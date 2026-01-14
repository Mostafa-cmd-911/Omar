import mongoose, { Schema, Document } from "mongoose";

const studentSchema = new Schema({
    Name: { type: String },
    Email: { type: String },
    Gender: { type: String, },
    Age: { type: Number },
});

export const studentsModel = mongoose.model("test", studentSchema);
