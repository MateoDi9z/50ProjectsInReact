import { useState } from "react";

import imgs from "../../assets/img/1/";

const { img1, img2, img3, img4, img5 } = imgs;

const images = [
  {
    img: img1,
    txt: "Explore The World",
  },
  {
    img: img2,
    txt: "Wild Forest",
  },
  {
    img: img3,
    txt: "Sunny Beach",
  },
  {
    img: img4,
    txt: "City on Winter",
  },
  {
    img: img5,
    txt: "Mountains - Clouds",
  },
];

export default function ExpandingCards() {
  const [active, setActive] = useState(0);

  function click(id: number) {
    setActive(id);
  }

  return (
    <article className="flex flex-row">
      {images.map((img, idx) => (
        <div
          onClick={() => click(idx)}
          className={
            "overflow-hidden h-fit mx-2.5 object-cover " +
            (active == idx ? "w-full" : "w-56")
          }
          style={{ transition: "1s ease" }}
          key={idx}
        >
          <img
            src={img.img}
            className="object-cover"
            alt="img"
            style={{ height: "90vh", borderRadius: "50px" }}
          />

          <h1
            className="absolute -translate-y-20 translate-x-10 opacity-0 font-medium text-4xl "
            style={{
              transition: "opacity 0.4s ease-in .1s",
              opacity: idx == active ? 1 : 0,
            }}
          >
            {img.txt}
          </h1>
        </div>
      ))}
    </article>
  );
}
