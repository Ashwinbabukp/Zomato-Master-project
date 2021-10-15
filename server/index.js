//Env variables
require("dotenv").config();

//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";

//API
import Auth from "./API/Auth";

//Database Connection
import ConnectDB from "./database/connection";

const zomato = express();

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(cors());
zomato.use(helmet());

//Application route
zomato.use("/auth", Auth);


zomato.get("/", (req,res) =>res.json({ message: "Setup Success"}));

zomato.listen(3000, () => ConnectDB()
    .then(() => console.log("Server is running"))
    .catch(() => console.log("Server is running, but database connection failed"))
);
