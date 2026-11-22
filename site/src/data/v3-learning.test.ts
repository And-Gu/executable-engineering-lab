import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { v3Chapters } from './v3-course';
import { chapterQuizzes, chapterSections, quizSchema } from './v3-learning';

describe('V3 chapter activities', () => {
  it('binds the five published manuscripts to their own questions and slots', () => {
    for (const chapter of v3Chapters.slice(0, 5)) {
      const slug = chapter.url.split('/').filter(Boolean).at(-1);
      const source = readFileSync(new URL(`../../../project/v3/manuscripts/revised/${slug}.md`, import.meta.url), 'utf8');
      const id = source.match(/^id: (.+)$/m)![1];
      expect(chapterQuizzes.get(id)?.length).toBeGreaterThanOrEqual(2);
      const activities = chapter.number === '05' ? ['intersection-model', 'chapter-quiz'] : ['chapter-quiz'];
      expect(chapterSections(source, activities).filter(part => part.kind === 'activity').map(part => part.content)).toEqual(activities);
    }
  });

  it('rejects absent, repeated and unknown activities', () => {
    const marker = '<!-- interactive: chapter-quiz -->';
    expect(() => chapterSections('prose', ['chapter-quiz'])).toThrow(/Missing/);
    expect(() => chapterSections(marker + marker, ['chapter-quiz'])).toThrow(/repeated/);
    expect(() => chapterSections(marker, [])).toThrow(/Unexpected/);
  });

  it('requires one correct answer, distinct options, feedback and stable question IDs', () => {
    const good = { text: 'One', correct: true, feedback: 'The source supports this.' };
    const other = { text: 'Two', feedback: 'This requires another observation.' };
    const q = { id: 'source-check', prompt: 'Which choice is supported?', options: [good, other] };
    expect(quizSchema.safeParse([q]).success).toBe(true);
    for (const options of [[good], [other, { ...other, text: 'Three' }], [good, { ...other, correct: true }], [good, { ...other, text: good.text }], [good, { ...other, feedback: ' ' }]]) {
      expect(quizSchema.safeParse([{ ...q, options }]).success).toBe(false);
    }
    expect(quizSchema.safeParse([q, q]).success).toBe(false);
  });
});
