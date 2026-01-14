import express from "express";
import { studentsModel } from "../models/students.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const students = await studentsModel.find();
    res.send(students);
});

router.post("/", async (req, res) => {
    const data = req.body;

    const filteredData = {
        Name: data.username,
        Age: data.age,
        Email: data.email,
        Gender: data.gender,
    };

    const newStudent = await studentsModel.create(filteredData);

    res.status(201).json(newStudent);
});















































// router.put("/:id", async (req, res) => {
//   const id = req.params.id;
//   const data = req.body;
//   const student = await studentsModel.findByIdAndUpdate(id, data, {
//     new: true,
//   });

//   router.get("/");
//   if (!student) {
//     return res.status(404).send({ message: "Student not found" });
//   }

//   res.send(student);
// });

// router.delete("/:id", async (req, res) => {
//   const id = req.params.id;
//   const student = await studentsModel.findByIdAndDelete(id);

//   if (!student) {
//     return res.status(404).send({ message: "Student not found" });
//   }

//   res.send({ message: "Student deleted successfully" });
// });

// async function clearDatabase() {
//     try {
//         const result = await studentsModel.deleteMany({});
//         console.log("All students deleted:", result);
//     } catch (err) {
//         console.error("Error deleting students:", err);
//     }
// }

// clearDatabase();

export default router;
