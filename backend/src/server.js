import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import morgan from "morgan";
import passport from "passport";
import cookieParser from "cookie-parser";
import compression from "compression";

const data_uri =
  "mongodb://db:27017/camp-ump?readPreference=primary&appname=Server&ssl=false";

mongoose.connect(data_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const port = 3000

const app = express()
app.use(compression())
app.use(morgan("tiny"));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.FRONT_END_URL }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", (req, res) => {
  res.send("OK");
})
app.use("/api/", require("./routes"));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})