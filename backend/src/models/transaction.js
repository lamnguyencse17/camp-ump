import mongoose from "mongoose";

const Transaction = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

export const transactionSchema = new Transaction({
    isAdd: {type: Boolean, required: true}, // true: positive ratio, false: negative ratio
    amount: {type: Number, required: true},
    target: {type: ObjectId, required: true, ref: "Students"},
    giver: {type: ObjectId, required: true, ref: "Students"},
    event: {type: ObjectId, required: true, ref: "Events"}
});

const transactionModel = mongoose.model("Transactions", transactionSchema);

export default transactionModel;
