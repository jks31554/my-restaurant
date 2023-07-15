"use client";
import { FC, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Title from "src/app/components/Common/Title";
import { TitleStyle, container, section, aside } from "src/app/styles/styled";
import { RestaurantCard } from "../../components/RestaurantCard";
import { ArticleType, getArticles } from "../../apis/article";
import { AxiosError } from "axios";

type Props = {};

const Main: FC<Props> = () => {
  const router = useRouter();

  const [isHovered, setIsHovered] = useState(false);
  const [articles, setArticles] = useState<
    (ArticleType & { articleId: number })[]
  >([]);

  const handleForm = () => {
    router.push("/write");
  };

  useEffect(() => {
    getArticles()
      .then((res) => {
        if (res.status === 200) {
          console.log("status code:", res.status);
          setArticles(res.data);
        }
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          console.log("AxiosError:", error.response);
        } else {
          console.log("Not AxiosError:", error);
        }
      });
  }, []);

  return (
    <div className="container" style={container}>
      <section style={section}>
        <Title text="나만의 식당 리스트" style={TitleStyle} />
        <article
          style={{
            display: "grid",
            width: "50vw",
            gap: "20px",
            justifyContent: "center",
            // border: '1px solid red',
          }}
        >
          <div
            style={{
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
          {articles.reverse().map((article) => (
            <RestaurantCard
              key={article.articleId}
              image={""}
              text={article.title}
            />
          ))}
        </article>
      </section>
    </div>
  );
};

export default Main;
