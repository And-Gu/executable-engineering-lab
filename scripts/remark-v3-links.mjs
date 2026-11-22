import path from 'node:path';
import { existsSync } from 'node:fs';
const cardTypes = new Map([['Concept', 'concept'], ['Explore further', 'reading']]);
export default function v3Links() {
  return (tree, file) => {
    const name = String(file.path).replaceAll('\\', '/');
    const marker = '/project/v3/manuscripts/revised/';
    if (!name.includes(marker)) return;
    const root = name.slice(0, name.indexOf(marker));
    const learningChapter = tree.children.some(node => node.type === 'html' && /<!--\s*interactive:\s*chapter-quiz\s*-->/.test(node.value));
    function visit(node) {
      if (learningChapter && node.type === 'table') {
        // The reading layout scrolls wide tables horizontally on narrow screens.
        node.data ??= {};
        node.data.hProperties = { ...node.data.hProperties, tabIndex: 0 };
      }
      if (node.type === 'blockquote') {
        const label = node.children[0]?.children;
        const title = label?.length === 1 && label[0].type === 'strong' && label[0].children[0]?.value;
        const cardType = cardTypes.get(title);
        if (cardType) {
          node.data = { ...node.data, hName: 'aside', hProperties: { className: ['learning-card', cardType], ariaLabel: title } };
        }
      }
      if ((node.type === 'link' || node.type === 'definition') && !/^(?:[a-z]+:|#|\/)/i.test(node.url)) {
        const [target, fragment] = node.url.split('#');
        const resolved = path.resolve(path.dirname(name), target);
        if (!existsSync(resolved)) throw new Error(`Missing chapter source link: ${node.url}`);
        const relative = path.relative(root, resolved).replaceAll('\\', '/');
        node.url = (resolved.includes(marker) && /^\d\d-/.test(path.basename(resolved)))
          ? `/executable-engineering-lab/learn/v3/${path.basename(resolved, '.md')}/`
          : `https://github.com/And-Gu/executable-engineering-lab/blob/main/${relative}`;
        if (fragment) node.url += '#' + fragment;
      }
      for (const child of node.children || []) visit(child);
    }
    visit(tree);
  };
}
