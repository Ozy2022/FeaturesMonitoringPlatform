
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';
import userRouter from "./routes/user.js";

const app = express();

/* Setting the limit of the data that can be sent to the server. Allowing the server to accept requests from other domains. */
app.use(express.json({ limit: '30mb', extended: true }))

app.use(express.urlencoded({ limit: '30mb', extended: true }))
/* Allowing the server to accept requests from other domains. */
app.use(cors());

/* Telling the server to use the postRoutes file when the server receives a request to the posts and user
routes. */
app.use('/posts', postRoutes);
app.use("/user", userRouter);

/* Connecting to the database. */
const CONNECTION_URL = 'mongodb+srv://Ozy2635:Os2635669@cluster0.iwnvxsa.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));

mongoose.connect(CONNECTION_URL).then(()=>{console.log('...')})

