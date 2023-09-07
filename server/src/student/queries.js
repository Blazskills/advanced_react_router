const getStudentsQuery = "SELECT * FROM students";
const getStudentIdQuery = "SELECT * FROM students WHERE id = $1";
const checkEmailExistQuery = "SELECT email FROM students WHERE email = $1";
const removeStudentByIdQuery = "DELETE FROM students WHERE id = $1";
const addStudentQuery =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const updateStudentQuery = "UPDATE students SET name = $1 WHERE id = $2";

export {
  getStudentsQuery,
  getStudentIdQuery,
  checkEmailExistQuery,
  addStudentQuery,
  removeStudentByIdQuery,
  updateStudentQuery,
};
