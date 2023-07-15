"use client";

import Title from "../components/Common/Title";
import { FormEventHandler, useState } from "react";
import { uploadArticle } from "../apis/article";
import { useRouter } from "next/navigation";

const INPUT_FONT_SIZE = "20px";

function Write() {
  const router = useRouter();

  const [isHovered, setIsHovered] = useState(false);
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    uploadArticle(formData)
      .then((res) => {
        console.log("res:", res);
        router.push("/sign-in/main");
      })
      .catch((error) => console.log("error:", error));
  };

  return (
    <form
      style={{
        display: "grid",
        gap: "5px",
        width: "50%",
        margin: "50px auto",
        position: "relative",
      }}
      onSubmit={handleSubmit}
    >
      <Title text={"나만의 식당 추가"} />
      <input
        type="text"
        style={{
          width: "400px",
          height: "40px",
          borderRadius: 5,
          fontSize: INPUT_FONT_SIZE,
          border: "1px gray solid",
        }}
        placeholder={"제목 입력"}
        name="title"
      />
      <input
        type="text"
        style={{
          width: "400px",
          height: "40px",
          borderRadius: 5,
          fontSize: INPUT_FONT_SIZE,
          border: "1px gray solid",
        }}
        name={"menu"}
      />
      <textarea
        cols={20}
        style={{
          height: "600px",
          fontSize: INPUT_FONT_SIZE,
        }}
        name={"content"}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          height: "40px",
        }}
      >
        <button
          style={{
            width: "100px",
            color: "white",
            backgroundColor: "dodgerblue",
            borderRadius: 5,
            border: "none",
            cursor: isHovered ? "pointer" : "none",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          업로드
        </button>
      </div>
    </form>
  );
}

export default Write;
