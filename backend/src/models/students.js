import mongoose from "mongoose";

const Student = mongoose.Schema;

export const studentSchema = new Student({
    _id: {
        type: String,
        require: true,
        unique: true
    },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {type: Number, required: true}
});

const studentModel = mongoose.model("Students", studentSchema);
export default studentModel;
