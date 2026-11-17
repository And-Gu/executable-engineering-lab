
import { readFileSync, readdirSync } from 'node:fs';
const map = readFileSync(new URL('../../../project/CURRICULUM-MAP.md', import.meta.url), 'utf8');
const files = readdirSync(new URL('../../../project/v3/manuscripts/revised/', import.meta.url));
const rows = map.split('\n').filter(line => /^\| (I|II|III|IV)( |\|)/.test(line)).map(line => line.split('|').slice(1,-1).map(cell => cell.trim().replaceAll('**','')));
export const parts: { title: string; chapters: { number: string; title: string; summary: string; url: string }[] }[] = [];
for (const [part, number, title, summary] of rows) {
  if (part.includes('—')) parts.push({ title: part, chapters: [] });
  const file = files.find(file => file.startsWith(number + '-') && file.endsWith('.md'));
  if (!file) throw new Error(`Missing revised manuscript ${number}`);
  parts.at(-1)!.chapters.push({ number, title, summary, url: `${import.meta.env.BASE_URL}learn/v3/${file.slice(0,-3)}/` });
}
if (parts.flatMap(part => part.chapters).length !== 15) throw new Error('Expected fifteen course chapters');

export const v3Chapters = parts.flatMap(part => part.chapters);
