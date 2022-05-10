var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
var avg = 0;
var totalStudent = students.length;

for (i = 0; i < totalStudent; i++) {
    avg = avg + students[i][1];
}
var avgMarks = avg / totalStudent;
if (avgMarks < 60) {
    alert("Grade : F");
}
else if (avgMarks < 70) {
    alert("Grade : D");
}
else if (avgMarks < 80) {
    alert("Grade : C");
} else if (avgMarks < 90) {
    alert("Grade : B");
} else if (avgMarks < 100) {
    alert("Grade : A");
}
