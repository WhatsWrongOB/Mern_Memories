import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import bodyParser from 'body-parser'
import { connectDatabase } from './config/database.js'
import { postRouter } from './routes/post.js'

const app = express()


dotenv.config({ path: './config/config.env' })


const corsOptions = {
    origin: (origin, callback) => {
        const allowedOrigins = [
            "http://localhost:5173",
        ];
        const isAllowed = allowedOrigins.includes(origin);
        callback(null, isAllowed ? origin : false);
    },
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser())
app.use(express.json())
app.use(bodyParser.json({ limit: '30mb', extended: true }))

app.use('/post', postRouter)
app.use(express.static('dist'));

const PORT = process.env.PORT;

connectDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server Running on Port : http://localhost:${PORT}`)
    })
})




