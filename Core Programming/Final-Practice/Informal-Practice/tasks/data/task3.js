const gameData = {
  dataProp: 'games',
  groupByProp: 'released',
  games: [
    {
      name: 'World of Warcraft',
      released: 2004,
      version: 'Vanilla',
      developer: 'Blizzard',
    },
    {
      name: 'World of Warcraft',
      released: 2007,
      version: 'The Burning Crusade',
      developer: 'Blizzard',
    },
    {
      name: 'World of Warcraft',
      released: 2008,
      version: 'The Wrath of the Lich King',
      developer: 'Blizzard',
    },
    {
      name: 'World of Warcraft',
      released: 2010,
      version: 'Cataclysm',
      developer: 'Blizzard',
    },
    {
      name: 'World of Warcraft',
      released: 2012,
      version: 'Mists of Pandaria',
      developer: 'Blizzard',
    },
    {
      name: 'Warlords Battlecry',
      released: 2000,
      version: '1',
      developer: 'Strategic Studies Group',
    },
    {
      name: 'Warlords Battlecry',
      released: 2002,
      version: '2',
      developer: 'Strategic Studies Group',
    },
    {
      name: 'Warlords Battlecry',
      released: 2004,
      version: '3',
      developer: 'Infinite Interactive',
    },
    {
      name: 'The Sims',
      released: 2000,
      version: '1',
      developer: 'Maxis',
    },
    {
      name: 'The Sims',
      released: 2004,
      version: '2',
      developer: 'Maxis',
    },
    {
      name: 'The Sims',
      released: 2009,
      version: '3',
      developer: 'Maxis',
    },
    {
      name: 'The Sims',
      released: 2014,
      version: '4',
      developer: 'Maxis',
    },
    {
      name: 'Spore',
      released: 2008,
      version: '1',
      developer: 'Maxis',
    },
  ],
};

export default [
  // case 1,
  {
    input: {
      dataProp: 'students',
      groupByProp: 'age',
      students: [
        {
          name: 'Peter',
          age: 20,
        },
        {
          name: 'George',
          age: 24,
        },
        {
          name: 'Maria',
          age: 20,
        },
      ],
    },
    output: {},
    test: {
      '20': [{ name: 'Peter', age: 20 }, { name: 'Maria', age: 20 }],
      '24': [{ name: 'George', age: 24 }]
    },
  },

  // case 2,
  {
    input: {
      dataProp: 'students',
      groupByProp: 'name',
      students: [
        {
          name: 'Peter',
          age: 20,
        },
        {
          name: 'George',
          age: 24,
        },
        {
          name: 'Maria',
          age: 20,
        },
      ],
    },
    output: {},
    test: {
      Peter: [{ name: 'Peter', age: 20 }],
      George: [{ name: 'George', age: 24 }],
      Maria: [{ name: 'Maria', age: 20 }]
    },
  },

  // case 3,
  {
    input: gameData,
    output: {},
    test: {
      '2000': [
        {
          name: 'Warlords Battlecry',
          released: 2000,
          version: '1',
          developer: 'Strategic Studies Group'
        },
        {
          name: 'The Sims',
          released: 2000,
          version: '1',
          developer: 'Maxis'
        }
      ],
      '2002': [
        {
          name: 'Warlords Battlecry',
          released: 2002,
          version: '2',
          developer: 'Strategic Studies Group'
        }
      ],
      '2004': [
        {
          name: 'World of Warcraft',
          released: 2004,
          version: 'Vanilla',
          developer: 'Blizzard'
        },
        {
          name: 'Warlords Battlecry',
          released: 2004,
          version: '3',
          developer: 'Infinite Interactive'
        },
        {
          name: 'The Sims',
          released: 2004,
          version: '2',
          developer: 'Maxis'
        }
      ],
      '2007': [
        {
          name: 'World of Warcraft',
          released: 2007,
          version: 'The Burning Crusade',
          developer: 'Blizzard'
        }
      ],
      '2008': [
        {
          name: 'World of Warcraft',
          released: 2008,
          version: 'The Wrath of the Lich King',
          developer: 'Blizzard'
        },
        { name: 'Spore', released: 2008, version: '1', developer: 'Maxis' }
      ],
      '2009': [
        {
          name: 'The Sims',
          released: 2009,
          version: '3',
          developer: 'Maxis'
        }
      ],
      '2010': [
        {
          name: 'World of Warcraft',
          released: 2010,
          version: 'Cataclysm',
          developer: 'Blizzard'
        }
      ],
      '2012': [
        {
          name: 'World of Warcraft',
          released: 2012,
          version: 'Mists of Pandaria',
          developer: 'Blizzard'
        }
      ],
      '2014': [
        {
          name: 'The Sims',
          released: 2014,
          version: '4',
          developer: 'Maxis'
        }
      ]
    },
  },

  // case 4,
  {
    input: {
      ...gameData,
      dataProp: 'games',
      groupByProp: 'developer',
    },
    output: {},
    test: {
      Blizzard: [
        {
          name: 'World of Warcraft',
          released: 2004,
          version: 'Vanilla',
          developer: 'Blizzard'
        },
        {
          name: 'World of Warcraft',
          released: 2007,
          version: 'The Burning Crusade',
          developer: 'Blizzard'
        },
        {
          name: 'World of Warcraft',
          released: 2008,
          version: 'The Wrath of the Lich King',
          developer: 'Blizzard'
        },
        {
          name: 'World of Warcraft',
          released: 2010,
          version: 'Cataclysm',
          developer: 'Blizzard'
        },
        {
          name: 'World of Warcraft',
          released: 2012,
          version: 'Mists of Pandaria',
          developer: 'Blizzard'
        }
      ],
      'Strategic Studies Group': [
        {
          name: 'Warlords Battlecry',
          released: 2000,
          version: '1',
          developer: 'Strategic Studies Group'
        },
        {
          name: 'Warlords Battlecry',
          released: 2002,
          version: '2',
          developer: 'Strategic Studies Group'
        }
      ],
      'Infinite Interactive': [
        {
          name: 'Warlords Battlecry',
          released: 2004,
          version: '3',
          developer: 'Infinite Interactive'
        }
      ],
      Maxis: [
        {
          name: 'The Sims',
          released: 2000,
          version: '1',
          developer: 'Maxis'
        },
        {
          name: 'The Sims',
          released: 2004,
          version: '2',
          developer: 'Maxis'
        },
        {
          name: 'The Sims',
          released: 2009,
          version: '3',
          developer: 'Maxis'
        },
        {
          name: 'The Sims',
          released: 2014,
          version: '4',
          developer: 'Maxis'
        },
        { name: 'Spore', released: 2008, version: '1', developer: 'Maxis' }
      ]
    },
  },

  // case 5,
  {
    input: {
      ...gameData,
      dataProp: 'games',
      groupByProp: 'name',
    },
    output: {},
    test: {
      'World of Warcraft': [
        {
          name: 'World of Warcraft',
          released: 2004,
          version: 'Vanilla',
          developer: 'Blizzard'
        },
        {
          name: 'World of Warcraft',
          released: 2007,
          version: 'The Burning Crusade',
          developer: 'Blizzard'
        },
        {
          name: 'World of Warcraft',
          released: 2008,
          version: 'The Wrath of the Lich King',
          developer: 'Blizzard'
        },
        {
          name: 'World of Warcraft',
          released: 2010,
          version: 'Cataclysm',
          developer: 'Blizzard'
        },
        {
          name: 'World of Warcraft',
          released: 2012,
          version: 'Mists of Pandaria',
          developer: 'Blizzard'
        }
      ],
      'Warlords Battlecry': [
        {
          name: 'Warlords Battlecry',
          released: 2000,
          version: '1',
          developer: 'Strategic Studies Group'
        },
        {
          name: 'Warlords Battlecry',
          released: 2002,
          version: '2',
          developer: 'Strategic Studies Group'
        },
        {
          name: 'Warlords Battlecry',
          released: 2004,
          version: '3',
          developer: 'Infinite Interactive'
        }
      ],
      'The Sims': [
        {
          name: 'The Sims',
          released: 2000,
          version: '1',
          developer: 'Maxis'
        },
        {
          name: 'The Sims',
          released: 2004,
          version: '2',
          developer: 'Maxis'
        },
        {
          name: 'The Sims',
          released: 2009,
          version: '3',
          developer: 'Maxis'
        },
        {
          name: 'The Sims',
          released: 2014,
          version: '4',
          developer: 'Maxis'
        }
      ],
      Spore: [
        { name: 'Spore', released: 2008, version: '1', developer: 'Maxis' }
      ]
    },
  },

];
