
interface data{
  title: string
  description: string
  content: string 
}
export type dataListType=data[]

export const batchArticleTableDataInsert=(num: number): dataListType=>{
  let result:data[]=[]
  for (let i = 0; i < num; i++){
    result.push(articleData)
  }
  return result
}
export const articleData  = 
  {
    title: "魔理沙的情书",
    description: "哈哈哈哈哈它就是个情书",
    content:"35,32,77,97,114,105,115,97,10,35,32,10084,65039,10084,65039,10,35,32,65,108,105,99,101,10,10,96,96,96,10,104,97,104,97,104,97,104,25105,22909,21916,27426,29233,20029,19997,21834,10,96,96,96"
  }
