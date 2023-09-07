import pool from "../../db.js";
import {
  addStudentQuery,
  checkEmailExistQuery,
  getStudentIdQuery,
  getStudentsQuery,
  removeStudentByIdQuery,
  updateStudentQuery,
} from "./queries.js";

const getStudents = (req, res) => {
  pool.query(getStudentsQuery, (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(getStudentIdQuery, [id], (error, result) => {
    if (error) throw error;
    res.status(200).json(result.rows);
  });
};

const addStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  pool.query(checkEmailExistQuery, [email], (error, results) => {
    if (error) {
      // Handle the database error here, e.g., sending an error response.
      console.error("Database error:", error);
      res.status(500).send("Database error");
      return;
    }
    //add student

    if (results.rows.length) {
      res.status(400).send("Email already exists.");
    }
    pool.query(addStudentQuery, [name, email, age, dob], (error, results) => {
      if (error) {
        // Handle the database error here, e.g., sending an error response.
        console.error("Database error:", error);
        res.status(500).send("Database error");
        return;
      }
      res.status(201).send("Student Created successfully!");
    });
  });
};

const removeStudent = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  pool.query(getStudentIdQuery, [id], (error, results) => {
    if (error) {
      // Handle the database error here, e.g., sending an error response.
      console.error("Database error:", error);
      res.status(500).send("Database error");
      return;
    }
    if (!results.rows.length) {
      res.status(400).send("Student does not exist in the database.");
      return;
    }
    pool.query(removeStudentByIdQuery, [id], (error, results) => {
      if (error) {
        // Handle the database error here, e.g., sending an error response.
        console.error("Database error:", error);
        res.status(500).send("Database error");
        return;
      }
      res.status(200).send("Student removed successfully.");
    });
  });
};

const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  pool.query(getStudentIdQuery, [id], (error, result) => {
    if (error) {
      // Handle the database error here, e.g., sending an error response.
      console.error("Database error:", error);
      res.status(500).send("Database error");
      return;
    }

    if (!result.rows.length) {
      res.status(400).send("Student does not exists.");
      return;
    }

    pool.query(updateStudentQuery, [name, id], (error, result) => {
      if (error) {
        // Handle the database error here, e.g., sending an error response.
        console.error("Database error:", error);
        res.status(500).send("Database error");
        return;
      }
     return res.status(200).send("Student updated successfully.");
    });
  });
};

export {
  getStudents,
  getStudentById,
  addStudent,
  removeStudent,
  updateStudent,
};
