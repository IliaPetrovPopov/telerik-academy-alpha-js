export default [
  // case 1
  {
    input: {
      course: 'JS Core',
      passingGrade: 3.5,
      students: [{ id: 1, name: 'Pesho' }, { id: 2, name: 'Gosho' }],
      grades: [{ studentId: 1, grade: 4 }, { studentName: 'Pesho', grade: 5 }, { studentId: 2, grade: 6 }],
      exams: [{ studentId: 1, grade: 5 }, { studentName: 'Pesho', grade: 6 }, { studentId: 2, grade: 6 }],
    },
    output: {},
    test: {
      name: 'JS Core',
      graduates: [{ id: 1, name: 'Pesho', grade: 5.1 }],
      nonGraduates: [{ id: 2, name: 'Gosho', reason: 'exams' }]
    },
  },

  // case 2
  {
    input: {
      course: 'Asteroseismology',
      passingGrade: 5,
      students: [{ id: 70, name: 'John' }, { id: 35, name: 'Jane' }, { id: 93, name: 'Toshio' }],
      grades: [
        { studentId: 70, grade: 6 }, { studentId: 70, grade: 5 }, { studentId: 70, grade: 5 },
        { studentId: 70, grade: 5 }, { studentId: 35, grade: 6 }, { studentId: 35, grade: 6 },
        { studentId: 93, grade: 4 }, { studentName: 'Toshio', grade: 5 }, { studentId: 35, grade: 6 },
      ],
      exams: [{ studentId: 35, grade: 5 }, { studentName: 'Jane', grade: 6 }, { studentId: 93, grade: 6 }],
    },
    output: {},
    test: {
      name: 'Asteroseismology',
      graduates: [{ id: 35, name: 'Jane', grade: 5.7 }],
      nonGraduates: [
        { id: 70, name: 'John', reason: 'score and exams' },
        { id: 93, name: 'Toshio', reason: 'exams' }
      ]
    },
  },

  // case 3
  {
    input: {
      course: 'Astrology',
      passingGrade: 2,
      students: [{ id: 7, name: 'Kate' }],
      grades: [
        { studentId: 7, grade: 1 },
      ],
      exams: [{ studentId: 7, grade: 1 }, { studentName: 'Kate', grade: 2 }, { studentId: 7, grade: 2 }],
    },
    output: {},
    test: {
      name: 'Astrology',
      graduates: [],
      nonGraduates: [{ id: 7, name: 'Kate', reason: 'score' }]
    },
  },

  // case 4
  {
    input: {
      course: 'Biochemistry',
      passingGrade: 10,
      students: [{ id: 1, name: 'Matt' }, { id: 2, name: 'Stuart' }, { id: 3, name: 'Victoria' }],
      grades: [
        { studentName: 'Matt', grade: 4 }, { studentName: 'Stuart', grade: 12 }, { studentName: 'Victoria', grade: 13 },
        { studentName: 'Matt', grade: 5 }, { studentName: 'Stuart', grade: 9 }, { studentName: 'Victoria', grade: 12 },
        { studentName: 'Matt', grade: 6 }, { studentName: 'Victoria', grade: 12 }, { studentName: 'Stuart', grade: 5 },
      ],
      exams: [
        { studentId: 1, grade: 7 }, { studentId: 1, grade: 6 },
        { studentId: 2, grade: 5 }, { studentId: 3, grade: 15 },
      ],
    },
    output: {},
    test: {
      name: 'Biochemistry',
      graduates: [],
      nonGraduates: [
        { id: 1, name: 'Matt', reason: 'score' },
        { id: 2, name: 'Stuart', reason: 'score and exams' },
        { id: 3, name: 'Victoria', reason: 'exams' }
      ]
    },
  },

  // case 5
  {
    input: {
      course: 'Time Travel',
      passingGrade: 9000,
      students: [],
      grades: [],
      exams: [],
    },
    output: {},
    test: { name: 'Time Travel', graduates: [], nonGraduates: [] },
  },

];
