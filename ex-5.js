const students = [
  { name: "John", score: 80 },
  { name: "Jane", score: 90 },
  { name: "Jim", score: 85 },
  { name: "Joan", score: 95 },
];

function getAverageStudentScore(students) {
  // Start coding here
  let output = students.map(obj => obj.score).reduce((num1,num2) => num1+num2,0)
  return console.log(`Output: ${output/students.length}`)
}

getAverageStudentScore(students); // Output: 87.5
