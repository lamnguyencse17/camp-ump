import mongoose from "mongoose";

const Event = mongoose.Schema;

export const eventSchema = new Event({
    name: { type: String, required: true },
    ratio: {type: Number, required: true}
});

const eventModel = mongoose.model("Events", eventSchema);

export default eventModel;
