export default [
  // case 1
  {
    input: {
      cities: [
        {
          id: 1,
          name: 'Plovdiv',
        },
        {
          id: 2,
          name: 'Sofia',
        },
        {
          id: 3,
          name: 'Varna',
        },
      ],
      people: [
        {
          name: 'Peter',
          city: 2,
        },
        {
          name: 'Marry',
          city: 1,
        },
        {
          name: 'John',
          city: 3,
        },
        {
          name: 'George',
          city: 3,
        },
        {
          name: 'Anika',
          city: 1,
        },
      ],
    },
    output: {},
    test: [
      {
        name: 'Peter',
        city: {
          name: 'Sofia',
          population: 1,
        },
      },
      {
        name: 'Marry',
        city: {
          name: 'Plovdiv',
          population: 2,
        },
      },
      {
        name: 'John',
        city: {
          name: 'Varna',
          population: 2,
        },
      },
      {
        name: 'George',
        city: {
          name: 'Varna',
          population: 2,
        },
      },
      {
        name: 'Anika',
        city: {
          name: 'Plovdiv',
          population: 2,
        },
      },
    ],
  },

  // case 2
  {
    input: {
      cities: [
        {
          id: 444,
          name: 'Ankh-Morpork',
        },
      ],
      people: [
        {
          name: 'Sir Samuel Vimes',
          city: 444,
        },
        {
          name: 'Lord Downey',
          city: 444,
        },
        {
          name: 'Mustrum Ridcullys',
          city: 444,
        },
        {
          name: 'Hughnon Ridcully',
          city: 444,
        },
      ],
    },
    output: {},
    test: [
      {
        name: 'Sir Samuel Vimes',
        city: {
          name: 'Ankh-Morpork',
          population: 4,
        },
      },
      {
        name: 'Lord Downey',
        city: {
          name: 'Ankh-Morpork',
          population: 4,
        },
      },
      {
        name: 'Mustrum Ridcullys',
        city: {
          name: 'Ankh-Morpork',
          population: 4,
        },
      },
      {
        name: 'Hughnon Ridcully',
        city: {
          name: 'Ankh-Morpork',
          population: 4,
        },
      },
    ],
  },

  // case 3
  {
    input: {
      cities: [
        {
          name: 'Ogrimmar',
          id: 1,
        },
        {
          name: 'Stormwind City',
          id: 2,
        },
      ],
      people: [
        {
          name: 'Glinda the Troll',
          city: 1,
        },
        {
          name: 'Johnny the Goblin',
          city: 1,
        },
      ],
    },
    output: {},
    test: [
      {
        name: 'Glinda the Troll',
        city: {
          name: 'Ogrimmar',
          population: 2,
        },
      },
      {
        name: 'Johnny the Goblin',
        city: {
          name: 'Ogrimmar',
          population: 2,
        },
      },
    ],
  },

  // case 4
  {
    input: {
      cities: [
        {
          id: 100,
          name: 'Farpoint Station',
        },
        {
          id: 200,
          name: 'Ferenginar Capital',
        },
      ],
      people: [
        {
          name: 'Ishka',
          city: 200,
        },
        {
          name: 'Groppler Zorn',
          city: 100,
        },
      ],
    },
    output: {},
    test: [
      {
        name: 'Ishka',
        city: {
          name: 'Ferenginar Capital',
          population: 1,
        },
      },
      {
        name: 'Groppler Zorn',
        city: {
          name: 'Farpoint Station',
          population: 1,
        },
      },
    ],
  },
];