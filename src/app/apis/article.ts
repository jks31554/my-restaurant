import { AxiosResponse } from "axios";
import { axiosInstance } from "./config";

export type ArticleType = {
  id: string;
  title: string;
  menu: string;
  content: string;
  createdAt: Date;
};

export const getArticles = (): Promise<AxiosResponse<ArticleType[]>> => {
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

export const deleteArticle = (id: string) => {
  return axiosInstance({
    method: "DELETE",
    url: `restaurant_article?id=${id}`,
  });
};