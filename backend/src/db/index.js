import mongoose from 'mongoose'
import { DB_NAME } from '../constants.js'

const connectDB = () => {
    return mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
    .then(() => {
        console.log("MongoDb connected successfully");
    })
    .catch((error) => {
        console.log(error);
    })
}

export { connectDB }