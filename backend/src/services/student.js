import studentModel from "../models/students";
import mongoose from "mongoose";

export const createStudent = async ({_id, email, password, name, role}) => {
    let result = await userModel.create({
        _id,
        name,
        email,
        password,
        role
    });
    return { result, status: true };
};