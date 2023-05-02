export default [
  // case 1,
  {
    input: [
      {
        name: 'John',
        pets: [
          {
            name: 'Capybara',
            power: 240,
          },
          {
            name: 'Tasmanian Devil',
            power: 130,
          },
        ],
      },
      {
        name: 'Jane',
        pets: [
          {
            name: 'Quokka',
            power: 800,
          },
        ],
      },
      {
        name: 'Bob',
        pets: [
          {
            name: 'Tasmanian Devil',
            power: 450,
          },
          {
            name: 'Capybara',
            power: 450,
          },
          {
            name: 'Quokka',
            power: 660,
          },
        ],
      },
    ],
    output: {},
    test: [
      {
        name: 'Capybara',
        totalPower: 690,
        mostPowerfulPlayer: {
          name: 'Bob',
          pets: [
            {
              name: 'Tasmanian Devil',
              power: 450,
            },
            {
              name: 'Capybara',
              power: 450,
            },
            {
              name: 'Quokka',
              power: 660,
            },
          ],
        },
      },
      {
        name: 'Quokka',
        totalPower: 1460,
        mostPowerfulPlayer: {
          name: 'Jane',
          pets: [
            {
              name: 'Quokka',
              power: 800,
            },
          ],
        },
      },
      {
        name: 'Tasmanian Devil',
        totalPower: 580,
        mostPowerfulPlayer: {
          name: 'Bob',
          pets: [
            {
              name: 'Tasmanian Devil',
              power: 450,
            },
            {
              name: 'Capybara',
              power: 450,
            },
            {
              name: 'Quokka',
              power: 660,
            },
          ],
        },
      },
    ],
  },

  // case 2,
  {
    input: [
      {
        name: 'Dave',
        pets: [
          {
            name: 'Owl',
            power: 100,
          },
          {
            name: 'Raven',
            power: 200,
          },
        ],
      },
      {
        name: 'Steve',
        pets: [
          {
            name: 'Owl',
            power: 50,
          },
          {
            name: 'Raven',
            power: 300,
          },
        ],
      },
    ],
    output: {},
    test: [
      {
        name: 'Owl',
        totalPower: 150,
        mostPowerfulPlayer: {
          name: 'Dave',
          pets: [
            {
              name: 'Owl',
              power: 100,
            },
            {
              name: 'Raven',
              power: 200,
            },
          ],
        },
      },
      {
        name: 'Raven',
        totalPower: 500,
        mostPowerfulPlayer: {
          name: 'Steve',
          pets: [
            {
              name: 'Owl',
              power: 50,
            },
            {
              name: 'Raven',
              power: 300,
            },
          ],
        },
      },
    ],
  },

  // case 3,
  {
    input: [
      {
        name: 'Mark',
        pets: [
          {
            name: 'Hupyrian beetle',
            power: 1,
          },
        ],
      },
      {
        name: 'Quark',
        pets: [
          {
            name: 'Hupyrian beetle',
            power: 3,
          },
        ],
      },
      {
        name: 'Lynda',
        pets: [
          {
            name: 'Hupyrian beetle',
            power: 2,
          },
        ],
      },
    ],
    output: {},
    test: [
      {
        name: 'Hupyrian beetle',
        totalPower: 6,
        mostPowerfulPlayer: {
          name: 'Quark',
          pets: [
            {
              name: 'Hupyrian beetle',
              power: 3,
            },
          ],
        },
      },
    ],
  },

  // case 4,
  {
    input: [
      {
        name: 'Quick Ben',
        pets: [],
      },
      {
        name: 'Tattersail',
        pets: [],
      },
      {
        name: 'Shadowthrone',
        pets: [
          {
            name: 'Shan',
            power: 1000,
          },
          {
            name: 'Rood',
            power: 1000,
          },
          {
            name: 'Pallick',
            power: 1000,
          },
          {
            name: 'Baran',
            power: 1000,
          },
        ],
      },
    ],
    output: {},
    test: [
      {
        name: 'Baran',
        totalPower: 1000,
        mostPowerfulPlayer: {
          name: 'Shadowthrone',
          pets: [
            {
              name: 'Shan',
              power: 1000,
            },
            {
              name: 'Rood',
              power: 1000,
            },
            {
              name: 'Pallick',
              power: 1000,
            },
            {
              name: 'Baran',
              power: 1000,
            },
          ],
        },
      },
      {
        name: 'Pallick',
        totalPower: 1000,
        mostPowerfulPlayer: {
          name: 'Shadowthrone',
          pets: [
            {
              name: 'Shan',
              power: 1000,
            },
            {
              name: 'Rood',
              power: 1000,
            },
            {
              name: 'Pallick',
              power: 1000,
            },
            {
              name: 'Baran',
              power: 1000,
            },
          ],
        },
      },
      {
        name: 'Rood',
        totalPower: 1000,
        mostPowerfulPlayer: {
          name: 'Shadowthrone',
          pets: [
            {
              name: 'Shan',
              power: 1000,
            },
            {
              name: 'Rood',
              power: 1000,
            },
            {
              name: 'Pallick',
              power: 1000,
            },
            {
              name: 'Baran',
              power: 1000,
            },
          ],
        },
      },
      {
        name: 'Shan',
        totalPower: 1000,
        mostPowerfulPlayer: {
          name: 'Shadowthrone',
          pets: [
            {
              name: 'Shan',
              power: 1000,
            },
            {
              name: 'Rood',
              power: 1000,
            },
            {
              name: 'Pallick',
              power: 1000,
            },
            {
              name: 'Baran',
              power: 1000,
            },
          ],
        },
      },
    ],
  },

  // case 5,
  {
    input: [
      {
        name: 'Quick Ben',
        pets: [],
      },
      {
        name: 'Tattersail',
        pets: [],
      },
      {
        name: 'Kalam',
        pets: [],
      },
    ],
    output: {},
    test: [],
  },

];
