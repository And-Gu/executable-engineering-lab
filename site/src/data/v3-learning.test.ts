import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import { parts, v3Chapters } from './v3-course';
import { chapterQuizzes, chapterSections, quizSchema } from './v3-learning';

describe('V3 chapter activities', () => {
  it('binds all active manuscripts to their own questions and slots', () => {
    const slots: Record<string, string[]> = {
      '01': ['investment-feedback', 'chapter-quiz'],
      '02': ['arrival-patterns', 'chapter-quiz'],
      '04': ['change-impact-figure', 'chapter-quiz'],
      '05': ['intersection-model', 'chapter-quiz'],
      '06': ['two-cycle-experiment', 'chapter-quiz'],
      '09': ['chapter-quiz', 'digital-thread'],
      '11': ['integrated-change', 'chapter-quiz'],
      '13': ['release-readiness', 'chapter-quiz'],
      '14': ['engineering-capability-flow', 'evidence-handoffs', 'chapter-quiz'],
    };
    expect(v3Chapters.map(chapter => Number(chapter.number))).toEqual(Array.from({ length: 14 }, (_, i) => i + 1));
    expect(v3Chapters.at(-1)?.url).toContain('/14-from-engineering-intent-to-continuous-integration/');
    for (const chapter of v3Chapters) {
      const slug = chapter.url.split('/').filter(Boolean).at(-1);
      const source = readFileSync(new URL(`../../../project/v3/manuscripts/revised/${slug}.md`, import.meta.url), 'utf8');
      const id = source.match(/^id: (.+)$/m)![1];
      expect(chapterQuizzes.get(id)?.length).toBeGreaterThanOrEqual(2);
      const activities = slots[chapter.number] ?? ['chapter-quiz'];
      expect(chapterSections(source, activities).filter(part => part.kind === 'activity').map(part => part.content)).toEqual(activities);
    }
  });

  it('keeps the digital thread in Part II and starts Part III at product integration', () => {
    expect(parts.map(part => part.chapters[0].number)).toEqual(['01', '04', '10', '12']);
    expect(parts[1].chapters.at(-1)?.title).toBe('Planning and Controlling Agents');
    expect(parts[1].chapters.at(-1)?.url).toContain('09-engineering-in-small-reviewable-increments/');
    for (const part of parts) {
      for (const chapter of part.chapters) {
        const slug = chapter.url.split('/').filter(Boolean).at(-1);
        const source = readFileSync(new URL(`../../../project/v3/manuscripts/revised/${slug}.md`, import.meta.url), 'utf8');
        expect(source.match(/^part: "(.+)"$/m)?.[1]).toBe(part.title);
      }
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
