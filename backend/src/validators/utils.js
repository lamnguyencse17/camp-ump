import { isEmail, isEmpty, isLength, isInt } from "validator";
import {
    PASSWORD_MAX_LENGTH,
    NAME_MAX_LENGTH,
    PASSWORD_MIN_LENGTH,
    ID_MAX_LENGTH
  } from "../constants/input";

export const isValidEmail = (email) => {
    return !isEmail(email)
}

export const isValidPassword = (password) => {
    return !isEmpty(password) && isLength(password, {min: PASSWORD_MIN_LENGTH, max: PASSWORD_MAX_LENGTH})
}

export const isValidName = (name) => {
    return !isEmpty(name) && isLength(name, {max: NAME_MAX_LENGTH})
}

export const isValidId = (id) => {
    return !isEmpty(id) && isLength(id, {max: ID_MAX_LENGTH})
}

export const isValidRole = (role) => {
    return isInt(role)
}