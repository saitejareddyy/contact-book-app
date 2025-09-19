import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    phone: {type: String, required: true, unique: true},
}, {timestamps: true})


const Contact = mongoose.model("Contact", contactSchema);

export { Contact };