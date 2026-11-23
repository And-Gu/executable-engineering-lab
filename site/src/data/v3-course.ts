import { readFileSync, readdirSync } from 'node:fs';

const map = readFileSync(new URL('../../../project/CURRICULUM-MAP.md', import.meta.url), 'utf8');
const manuscriptDirectory = new URL('../../../project/v3/manuscripts/revised/', import.meta.url);
const files = readdirSync(manuscriptDirectory);
const rows = map.split('\n')
  .filter(line => /^\| (I|II|III|IV)( |\|)/.test(line))
  .map(line => line.split('|').slice(1, -1).map(cell => cell.trim().replaceAll('**', '')));

/** Historical chapter-numbered sources can coexist with current chapters.
 * Select the manuscript whose frontmatter agrees with the approved curriculum,
 * rather than taking the first filename with a matching numeric prefix.
 */
function currentManuscript(number: string, title: string): string {
  const candidates = files.filter(file => {
    if (!file.startsWith(number + '-') || !file.endsWith('.md')) return false;
    const source = readFileSync(new URL(file, manuscriptDirectory), 'utf8');
    const frontmatter = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!frontmatter || /^status:\s*obsolete\s*$/m.test(frontmatter[1])) return false;
    const storedTitle = frontmatter[1].match(/^title:\s*"([^"]+)"\s*$/m)?.[1];
    const storedNumber = frontmatter[1].match(/^chapter:\s*(\d+)\s*$/m)?.[1];
    return storedTitle === title && Number(storedNumber) === Number(number);
  });
  if (candidates.length !== 1) {
    throw new Error(`Expected exactly one current V3 manuscript for chapter ${number} "${title}"; found ${candidates.length}`);
  }
  return candidates[0];
}

export const parts: { title: string; chapters: { number: string; title: string; summary: string; url: string }[] }[] = [];
for (const [part, number, title, summary] of rows) {
  if (part.includes('—')) parts.push({ title: part, chapters: [] });
  const file = currentManuscript(number, title);
  parts.at(-1)!.chapters.push({ number, title, summary, url: `${import.meta.env.BASE_URL}learn/v3/${file.slice(0, -3)}/` });
}
export const v3Chapters = parts.flatMap(part => part.chapters);
if (v3Chapters.length !== 14) throw new Error('Expected fourteen course chapters');
