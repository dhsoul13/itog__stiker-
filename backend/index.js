import express  from "express";
import config from 'config';
import mongoose from "mongoose";
import router from "./routes/index.js"
import bp from "body-parser"
import cors from "cors"
import cookieParser from "cookie-parser";
import MiddlewareErr from "./middlewares/error-mid.js";

/// Порт на котором бэк работает

const port = config.get("port") || 5000;

/// экземпляр express.
const app = express();

/// для распарсить боди

  app.use(bp.json());
/// для кук

  app.use(cookieParser())

/// контролировать доступ к тегам на веб странице по сети.
  app.use(cors({
      credentials: true,
      origin: "http://localhost:3000"
  }))

/// для роутингов 

  app.use('/api/auth', router)

//// мидлвеэр для кастомных обработок 

  app.use(MiddlewareErr);

/// старт сервера и подкдючение монгобд
async function start(){
    try{
        await mongoose.connect(config.get("mongoUrl"),{
            useNewUrlParser: true, 
            useUnifiedTopology: true })
            
        app.listen(port, ()=>{
            console.log("Старт на порту:",port);
        })
    } catch(e) {
        console.log('Сервер упал', e);
        process.exit(1);
    }
}

start()

