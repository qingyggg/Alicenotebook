import instance from "./instance";

export default class Request {
  static async get(url:string) {
    return (await instance.get(url)).data
  }
  static async post(url:string,data:any) {
    return (await instance.post(url, data)).data
  }
}