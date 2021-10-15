//Env variables
require("dotenv").config();

//Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";  

//config
import googleAuthConfig from "./config/google.config";

//API
import Auth from "./API/Auth";
import Food from "./API/Food";
import Image from "./API/Image";
import Menu from "./API/Menu";
import Order from "./API/Order";
import Restaurant from "./API/Restaurant";
import Review from "./API/Review";
import User from "./API/User";

//Database Connection
import ConnectDB from "./database/connection";

const zomato = express();

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({extended:false}));
zomato.use(cors());
zomato.use(helmet());
// zomato.use(passport.initialize());
// zomato.use(passport.session());

//passport configuration
googleAuthConfig(passport);

//Application route
zomato.use("/auth", Auth);
zomato.use("/food", Food);
zomato.use("/image", Image);
zomato.use("/menu", Menu);
zomato.use("/order", Order);
zomato.use("/restaurant", Restaurant);
zomato.use("/review", Review);
zomato.use("/user", User);

zomato.get("/", (req,res) =>res.json({ message: "Setup Success"}));

zomato.listen(3000, () => ConnectDB()
    .then(() => console.log("Server is running"))
    .catch(() => console.log("Server is running, but database connection failed"))
);