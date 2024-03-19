import express, { Request, Response, NextFunction } from "express"
import {   tasksRouter } from "./routes.index"


import dotenv from "dotenv"
import cors from "cors"
import { initConnection } from "./database/connection";

initConnection();
dotenv.config()

const app = express();
app.use(express.json())
app.use(cors())


app.use("/tasks", tasksRouter); 


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.message);
    res.status(500).send("Something went wrong")
})

app.listen(process.env.PORT, () => {
console.log(process.env.PORT);

})


