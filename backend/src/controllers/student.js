import { OK_RESPONSE, HANDLED_ERROR_RESPONSE } from "../constants/http";
import {createStudent, getStudentById} from "../services/student"
import { validateCreateStudent } from "../validators/studentValidator";

export const registerController = async (req, res) => {
    let {_id, email, password, name, role} = req.body;
    let validateResult = validateCreateStudent({_id, email, password, name, role});
    if (!validateResult.status) {
      return res
        .status(HANDLED_ERROR_RESPONSE)
        .json({ message: validateResult.message });
    }
    // let duplicate = await getStudentById(_id);
    // if (duplicate.status) {
    //   return res
    //     .status(HANDLED_ERROR_RESPONSE)
    //     .json({ message: "Duplicate email!" });
    // }
    let { result, status } = await createStudent({_id, email, password, name, role});
    if (!status) {
      return res
        .status(HANDLED_ERROR_RESPONSE)
        .json({ message: "Something went wrong" });
    }
    return res.status(OK_RESPONSE).json(result);
  };