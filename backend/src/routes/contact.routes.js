import express from 'express'
import { createContact, deleteContact, getContacts } from '../controllers/contact.controller.js';


const contactRoute = express.Router();

contactRoute.post("/add", createContact);
contactRoute.delete("/:id", deleteContact);
contactRoute.get("/contacts", getContacts);

export { contactRoute };