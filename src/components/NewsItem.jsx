import React, { useState } from "react";
import img from "../assets/new.png";
import "../App.css";
import Listview from "./Listview";
import Gridview from "./Gridview";

// const NewsItem = ({ title, description, src, url, toggle }) => {
//   const [toggled, setToggled] = useState(toggle)
//   console.log(toggle)
//   return (
//    {toggled ? <h1>Hello</h1> : null}
//   );
// };

const NewsItem = ({ title, description, src, url, toggle }) => {
  return toggle ? (
    <Listview
      title={title}
      description={description}
      src={src}
      url={url}
      img={img}
    />
  ) : (
    <Gridview
      title={title}
      description={description}
      src={src}
      url={url}
      img={img}
    />
  );
};

export default NewsItem;
