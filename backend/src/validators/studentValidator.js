import { isValidEmail, isValidPassword, isValidName, isValidId, isValidRole } from "./utils"

export const validateCreateStudent = ({ _id, email, password, name, role }) => {
    let status = true;
    let message = []
    if (!isValidId(_id)) {
        status = false
        message.push["Invalid Id"]
    }
    if (!isValidName(name)) {
        status = false
        message.push["Invalid name"]
    }
    if (!isValidEmail(email)) {
        status = false
        message.push["Invalid email"]
    }
    if (!isValidPassword(password)) {
        status = false
        message.push["Invalid password"]
    }
    if (!isValidRole(role)) {
        status = false
        message.push["Invalid role"]
    }
    return {status, message}
}