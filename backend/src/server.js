import dotenv from 'dotenv'
import { app } from "./app.js";
import { connectDB } from './db/index.js';

dotenv.config("./.env")

const PORT = process.env.PORT;

connectDB();
app.listen(PORT, () => {
    console.log("server running on port " + PORT);
})