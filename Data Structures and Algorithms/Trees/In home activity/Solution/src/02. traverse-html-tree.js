const domTree = {
  tag: 'html',
  id: null,
  children: [
    {
      tag: 'head',
      id: null,
      children: [
        {
          tag: 'link',
          id: null,
          children: [],
        },
        {
          tag: 'title',
          id: null,
          children: [],
        },
        {
          tag: 'icon',
          id: null,
          children: [],
        },
      ],
    },
    {
      tag: 'body',
      id: null,
      children: [
        {
          tag: 'div',
          id: null,
          children: [
            {
              tag: 'p',
              id: 'awesome-paragraph',
              children: [],
            },
          ],
        },
        {
          tag: 'script',
          id: null,
          children: [],
        },
      ],
    },
  ],
};

const dfs = (root, id) => {
  if (root === null) return null;
  if (root.id === id) return root;

  // simpler code for depth-first traversal
  // for each child: apply dfs
  for (const child of root.children) {
    const result = dfs(child, id);

    // this check is necessary to not override 
    // a previously found result with null
    if (result !== null) {
      // that's our node
      return result;
    }
  }

  // all iterations on all children are done - we found nothing:
  return null;
};

// another way to write the function:
const dfs2 = (root, id) => {
  if (root === null) return null;
  if (root.id === id) return root;

  return root.children.reduce((res, child) => res || dfs2(child, id), null);
}

// expected: { tag: 'p', id: 'awesome-paragraph', children: [] }
console.log(dfs2(domTree, 'awesome-paragraph'));

