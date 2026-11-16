import path from 'node:path';
import { existsSync } from 'node:fs';
export default function v3Links() {
  return (tree, file) => {
    const name = String(file.path).replaceAll('\\', '/');
    const marker = '/project/v3/manuscripts/revised/';
    if (!name.includes(marker)) return;
    const root = name.slice(0, name.indexOf(marker));
    function visit(node) {
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
