import mongoose from 'mongoose'
import dotenv from 'dotenv';
dotenv.config();


const Connection = async () =>  {
    try {
        await mongoose.connect(process.env.URL, { useUnifiedTopology: true, useNewUrlParser: true, })
        console.log('Database connected successfully')
    } catch (error) {
        console.log('Error while connecting the database. Error no.', error);
    }
}

export default Connection