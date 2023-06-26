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

};


// expected: { tag: 'p', id: 'awesome-paragraph', children: [] }
console.log(dfs(domTree, 'awesome-paragraph'));