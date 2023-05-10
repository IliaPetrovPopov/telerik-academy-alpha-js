// Students graduation

/**
 * 
 * @param {{ course: string, passingGrade: number, students: Array<{id: number, name: string}>, grades: Array<{ studentId: number, grade: number}>, exams: Array<{ studentId: number, grade: number }>} data 
 */
export default function (data) {
// your code starts here
const graduates = [];
const nonGraduates = [];

const statusOfStudents = data.students.reduce((_, student) => {
  let currNormalGrades = ((data.grades.reduce((gradesCalc, current) => {
    if(student.name === current.studentName || student.id === current.studentId) {
      gradesCalc += current.grade;
      }
      
      return gradesCalc;
    }, 0) / data.grades.filter(localSt => localSt.studentId === student.id || localSt.studentName === student.name).length) * 40) / 100;

      const examsInfo = data.exams.filter(local => local.studentId === student.id || local.studentName === student.name).length;
      
        let currExamGrades = (data.exams.reduce((examCalc, current) => {
      if(student.name === current.studentName || student.id === current.studentId) {
        examCalc += current.grade;
      }

        return examCalc;
    }, 0) / examsInfo * 60) / 100;

      if(isNaN(currExamGrades)) {
        currExamGrades = 0;
      }

    let totalGrade = currNormalGrades + currExamGrades;

    if( totalGrade >= data.passingGrade && examsInfo >= 2) {
      graduates.push({ 
        id: student.id,
        name: student.name,
        grade: Number(totalGrade.toFixed(1))
      });
    } else {
      let reason = '';

      if (totalGrade < data.passingGrade && examsInfo < 2) {
        reason = 'score and exams';
      } else if(totalGrade >= data.passingGrade && examsInfo < 2) {
        reason = 'exams';
      } else if(totalGrade < data.passingGrade && examsInfo >= 2){
        reason = 'score';
      }
      nonGraduates.push({ 
        id: student.id,
        name: student.name,
        reason: reason
      })
    }
  }, 0);

return {
  name: data.course,
  graduates: graduates,
  nonGraduates: nonGraduates
}
// your code ends here
}