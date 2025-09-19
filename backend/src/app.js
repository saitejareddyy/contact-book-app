import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { contactRoute } from './routes/contact.routes.js';

dotenv.config("./.env");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true, limit: "20kb"}))
app.use(
  cors({
    origin: "https://contact-book-app-frontend.onrender.com",
    credentials: true,
  })
);

//Routes

app.use("/api/v1/contacts", contactRoute) 

export { app };
