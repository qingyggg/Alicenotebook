import mysql from 'mysql'
import { batchArticleTableDataInsert, dataListType } from './dbData'
//初始化连接池
export function dbInit(cb?: (pool: mysql.Pool) => any): mysql.Pool {
  const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'notebook'
  });
  if (cb) cb(pool)
  return pool
}

//建立文章列表
const articleTableStatement =
  `CREATE TABLE  IF NOT EXISTS articles(
    id INT UNSIGNED AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL COMMENT '文章标题',
    description VARCHAR(100) NOT NULL COMMENT '文章描述',
    content VARCHAR(20000) NOT NULL COMMENT '文章内容',
    create_time TIMESTAMP DEFAULT NOW() COMMENT '文章创建或者修改时间',
    PRIMARY KEY(id)
 ) ENGINE = InnoDB, DEFAULT CHARSET = utf8; `
 //建立点赞列表
const articleLikeTableStatement =
`CREATE TABLE  IF NOT EXISTS likes(
  id INT UNSIGNED AUTO_INCREMENT,
  num INT NOT NULL COMMENT '点赞数量',
  CONSTRAINT fk_article_id,
  FOREIGN KEY(articleId) REFERENCES articles(id)
  PRIMARY KEY(id)
) ENGINE = InnoDB, DEFAULT CHARSET = utf8; `
//建立账户表
const authorTableStatement =
`CREATE TABLE  IF NOT EXISTS authors(
  id INT UNSIGNED AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL COMMENT '点赞数量',
  password  VARCHAR(100) NOT NULL COMMENT '点赞数量',
  likeA
  PRIMARY KEY(id)
) ENGINE = InnoDB, DEFAULT CHARSET = utf8; `




//造数据
export function articleInit(pool: mysql.Pool) {
  //建立article表
  pool.query(articleTableStatement, function (error, results, fields) {
    if (error) throw error;
    console.log('建articles表已完成，正在插入测试数据');
    //插入测试数据,插入10个
    pool.query(dbDataStatementGenerator(batchArticleTableDataInsert(10)), function (error, results, fields) {
      if (error) throw error;
      console.log('成功插入测试数据');
    });
  });
}
//生成插入语句
function dbDataStatementGenerator(dataList: dataListType) {
  let statementPre = "INSERT INTO articles(title,description,content) VALUES"
  let statementNex = ""
  //语句拼接
  dataList.forEach((v, i) => {
    statementNex += (`("${v.title}","${v.description}","${v.content}")`)
    //判断是否为最后一个元素
    if (i !== dataList.length - 1) {
      statementNex += ','
    } else {
      statementNex += ';'
    }
  })
  return statementPre + statementNex
}