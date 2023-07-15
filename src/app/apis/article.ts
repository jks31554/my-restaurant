import { AxiosResponse } from "axios";
import { axiosInstance } from "./config";

export type ArticleType = {
  title: string;
  menu: string;
  content: string;
};

export const getArticles = (): Promise<
  AxiosResponse<(ArticleType & { articleId: number })[]>
> => {
  return axiosInstance({
    method: "GET",
    url: "restaurant_article",
  });
};

export const uploadArticle = (
  formData: FormData,
): Promise<AxiosResponse<ArticleType>> => {
  return axiosInstance({
    method: "POST",
    url: "restaurant_article",
    data: formData,
    headers: {
      "Content-Type": "application/json",
    },
  });
};
