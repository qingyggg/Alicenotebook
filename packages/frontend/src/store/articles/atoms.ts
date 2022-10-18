import { atom } from "recoil";

export const articleList = atom({
  key: 'article_list',
  default: [],
});

export const articleDetail=atom({
  key: 'article_detail',
  default: {},
});