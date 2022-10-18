import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import articleRouter from './controllers/articles'
import { articleInit, dbInit } from "./util/db/db";
const app = express();
const port = 5000;

//初始化数据库,service获取连接池从这里获取
export const pool = dbInit(articleInit)//不仅创建了数据库还插入了数据
// export const pool = dbInit()

//跨域允许中间件 
app.use(cors())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(morgan('tiny'))
app.use(helmet());

app.get('/', (req: any, res: any) => {
  res.json({ message: "您正在访问notebook后台" })
})
//使用articles路由
app.use('/articles', articleRouter)

app.listen(port, () => {
  console.log(`NoteBook backend app listening at http://localhost:${port}`);
});