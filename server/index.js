import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import Cards from './routes/cards.js'
import Auth from './routes/auth.js'
import User from './routes/users.js'
import dotenv from 'dotenv';

const app=express();
dotenv.config();


app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/cards',Cards);
app.use('/auth',Auth);
app.use('/',User);

app.get('/', (req,res) => {
  res.send("Welcome to Journal Entry")

})


const PORT = process.env.PORT|| 5000;

mongoose.connect(process.env.CONNECTION_URL)
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
