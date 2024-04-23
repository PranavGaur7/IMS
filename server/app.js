const express = require('express')
const app = express();
var cors = require('cors')
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST"],
    credentials: true,
}))
require('dotenv').config();
const server = app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
})



const userRouter = require('./userRouter');
app.use('/user', userRouter);

