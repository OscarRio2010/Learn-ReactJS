import React from "react";
import YoutubeItem from "./YoutubeItem";
import { YoutubeData } from "../../data";

const YoutubeList = (props) => {
  return (
    <div className="youtube-list">
      {props.children}
      {YoutubeData.map((item, index) => {
        let newClass = "";
        if (index === 0) newClass = "abc";

        return (
          <YoutubeItem
            key={item.id}
            image={item.image}
            avatar={item.avatar}
            title={item.title}
            author={item.author}
            className={newClass}
          ></YoutubeItem>
        );
      })}
    </div>
  );
};

export default YoutubeList;
