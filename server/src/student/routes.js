import { Router } from "express";

import { getStudents, getStudentById, addStudent, removeStudent, updateStudent } from "./controller.js";

const router = Router();

router.get("/", getStudents);
router.post("/", addStudent);
router.get("/:id", getStudentById);
router.delete("/:id", removeStudent);
router.put("/:id", updateStudent);

export default router;
