const course = {
    name: 'Music',
    teacher: 'Mr. Smile',
    studentsCount: 21,
    weekDay: 'Wednesday'
};

console.log(`${course.name} by ${course.teacher}. Every ${course.weekDay}, expected attendance: ${course.studentsCount}`);

const createCourse = function (name, teacher, weekDay, studentsCount) {
    return {
        name,
        teacher,
        weekDay,
        studentsCount
    };
};

const getCourseLabel = function (course) {
    return`${course.name} by ${course.teacher}. Every ${course.weekDay}, expected attendance: ${course.studentsCount}`;
};

const math = createCourse('Math', 'Ms. Atanasova', 31, 'Monday');
const label = getCourseLabel(math);
console.log(label);
// Math by Ms. Atanasova. Every Monday, expected attendance: 31