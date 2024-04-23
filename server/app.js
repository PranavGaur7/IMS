const express = require('express')
const app = express();
var cors = require('cors')
app.use(express.json());
app.use(cors({
    origin: ["https://ims-mocha.vercel.app"],
    methods: ["GET", "POST"],
    credentials: true,
}))
require('dotenv').config();
const server = app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
})


app.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'bad request'
    })
})
const userRouter = require('./userRouter');
app.use('/user', userRouter);

