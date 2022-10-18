import { articleDetailType, articleListType } from './../../request/articles/type';
import request from '../../request/index'
export class articleFetch{
  //limit默认为10
  static async getAriticleList(offset:number):Promise<articleListType> {
    return  await request.get('/articles/list/'+offset)
  }
  static async getArticleDetail(articleId: number): Promise<articleDetailType>{
    return  await request.get('/detail/'+articleId)
  }
  static async addArticle(title: string, description: string, content: string) {
    return await request.post('/add', { title, description, content }).then(() => {
      alert('文章添加成功')
    }, () => {
      alert('文章添加失败')
    })
  }
  static async editArticle(articleId: number, title: string, description: string, content: string ) {
    return  await request.post('/edit',{articleId,title,description,content}).then(() => {
      alert('文章编辑成功')
    }, () => {
      alert('文章编辑失败')
    })
  }
  static async deleteArticle(articleId: number) {
    return  await request.post('/delete',{articleId}).then(() => {
      alert('文章删除成功')
    }, () => {
      alert('文章删除失败')
    })
  }
}