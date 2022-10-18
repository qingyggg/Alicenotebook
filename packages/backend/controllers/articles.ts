import express from "express"
import Article from "../services/article"
const router = express.Router()


router.get('/', (req: any, res: any) => {
  res.json({ message: "欢迎来到article控制器" })
})
router.get('/list', async (req: { query: { offset: number } }, res: any) => {
  const data = await Article.getArticleList(req.query.offset)
  res.json({ message: "获取文章列表", content: data })
})
router.get('/detail/:articleId', async (req: { params: { articleId: number } }, res: any) => {
  const data = await Article.getArticleContent(req.params.articleId)
  //这里加data[0]是因为where查询语句返回的是数组，不论查到的是一个还是两个
  res.json({ message: "获取某个文章的内容", content: data[0] })
})
//添加文章
router.post('/add', async (req: { body: { title: string, description: string, content: string } }, res: any) => {
  console.log(req.body);
  const { title, description, content } = req.body
  const data = await Article.addArticle(title, description, content)

  //test:data数据
  console.log(data);

  res.json({ message: "添加文章", content: data })
})
//修改文章
router.post('/alter', async (req: { body: { articleId: number, title: string, description: string, content: string } }, res: any) => {
  const { articleId, title, description, content } = req.body
  const data = await Article.alterArticle(articleId, title, description, content)

  //test:data数据
  console.log(data);

  res.json({ message: "修改文章", content: data })
})
//删除文章
router.post('/delete', async (req: { body: { articleId: number } }, res: any) => {
  const { articleId } = req.body
  const data = await Article.deleteArticle(articleId)

  //test:data数据
  console.log(data);

  res.json({ message: "删除文章", content: data })
})
export default router;
