import { pool } from '../server'
export default class Article {
  //获取文章列表
  static async getArticleList(offset: number): Promise<any> {
    //limit等前台分页(当文章超过30篇后)做了再添加
    // return await queryMaker("SELECT id,title,description,create_time FROM articles LIMIT 10 OFFSET " + offset)
    return await queryMaker("SELECT id,title,description,create_time FROM articles")
  }
  //获取文章内容
  static async getArticleContent(articleId: number): Promise<any> {
    return await queryMaker("SELECT title,description,content,create_time FROM articles WHERE id=" + articleId)
  }
  //添加文章 
  static async addArticle(title: string, description: string, content: string):Promise<any> {
    return await queryMaker(`INSERT INTO articles(title,description,content) VALUES ('${title}','${description}','${content}')`)
  }
  //修改文章
  static async alterArticle(articleId: number, title: string, description: string, content: string) {
    return await queryMaker(`UPDATE articles SET title='${title}',description='${description}',content='${content}' WHERE id=${articleId}`)
  }
  //删除文章
  static async deleteArticle(articleId:number) {
    return await queryMaker(`DELETE FROM articles WHERE id=${articleId}`)
  }
}
//语句查询函数封装
const queryMaker = (statement: string): Promise<any> => {
  return new Promise((resolve,reject) => {
    pool.query(statement, function (error, results, fields) {
      if (error) throw error;
      console.log('sql results', results);
      resolve(results)
    })
  })
}