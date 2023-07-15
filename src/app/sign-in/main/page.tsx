"use client";
import { FC, Fragment, useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

import Title from "src/app/components/Common/Title";
import { RestaurantCard } from "src/app/components/RestaurantCard";

import { TitleStyle, container, section, aside } from "src/app/styles/styled";
import { ArticleType, deleteArticle, getArticles } from "src/app/apis/article";

type Props = {};

const Main: FC<Props> = () => {
  const router = useRouter();

  const [isHovered, setIsHovered] = useState(false);
  const [articles, setArticles] = useState<ArticleType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    updateArticles();
  }, []);

  const handleForm = () => {
    router.push("/write");
  };

  const handleDelete = useCallback((id: string) => {
    deleteArticle(id)
      .then((res) => {
        console.log("delete resposne:", res);
        updateArticles();
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const updateArticles = () => {
    setIsLoading(true);
    getArticles()
      .then((res) => {
        if (res.status === 200) {
          console.log("status code:", res.status);
          setArticles(res.data.reverse());
          setIsLoading(false);
        }
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          console.log("AxiosError:", error.response);
        } else {
          console.log("Not AxiosError:", error);
        }
      });
  };

  return (
    <div className="container" style={container}>
      <section style={section}>
        <Title text="나만의 식당 리스트" style={TitleStyle} />
        <article
          style={{
            display: "grid",
            gap: "20px",
            justifyContent: "center",
            // border: '1px solid red',
          }}
        >
          <div
            style={{
              width: "600px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <button
              onClick={handleForm}
              onMouseEnter={() => setIsHovered(!isHovered)}
              onMouseLeave={() => setIsHovered(!isHovered)}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: 100,
                backgroundColor: isHovered ? "dodgerblue" : "white",
                border: "1px gray solid",
                cursor: "pointer",
              }}
            >
              Add
            </button>
          </div>
          {isLoading ? (
            <div>fetching data..</div>
          ) : (
            articles.map((article) => (
              <RestaurantCard
                key={article.id}
                image={""}
                id={article.id}
                text={article.title}
                handleDelete={handleDelete}
              />
            ))
          )}
        </article>
      </section>
    </div>
  );
};
export default Main;
