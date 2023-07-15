"use client";
import { FC, useEffect, useRef, useState } from "react";
import TrashCan from "../../assets/trash_can.svg";

import { palette } from "src/app/styles/colors";

type Props = {
  image: string;
  text: string;
};

export const RestaurantCard: FC<Props> = ({ image, text }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const [slide, setSlide] = useState(false);

  useEffect(() => {
    const handleLeave = () => setSlide(false);
    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLDivElement;

      setSlide(true);
      target.style.cursor = "pointer";
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener("mouseover", handleHover);
      card.addEventListener("mouseleave", handleLeave);
    }
    return () => {
      card?.removeEventListener("mouseover", handleHover);
      card?.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      style={{
        width: "600px",
        height: "100px",
        overflow: "hidden",
        position: "relative",
        borderRadius: "10px",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(${image})`,
        border: `1px solid ${palette["gray-10"]}`,
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "30px",
          left: "30px",
        }}
      >
        {text}
      </span>
      {/* <div */}
      {/*   style={{ */}
      {/*     top: 0, */}
      {/*     left: 0, */}
      {/*     right: 0, */}
      {/*     bottom: 0, */}
      {/*     position: "absolute", */}
      {/*     backgroundColor: "black", */}
      {/*     opacity: slide ? 0.3 : 0, */}
      {/*     transition: "opacity 1s ease", */}
      {/*   }} */}
      {/* /> */}
      <div
        style={{
          width: "100px",
          color: "white",
          height: "100px",
          position: "absolute",
          transition: "all 1s ease",
          borderTopRightRadius: "10px",
          borderBottomRightRadius: "10px",
          backgroundColor: palette["warning"],
          transform: slide ? "translateX(500px)" : "translateX(600px)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TrashCan />
        </div>
      </div>
    </div>
  );
};
