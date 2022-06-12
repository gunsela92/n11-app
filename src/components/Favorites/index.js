import React from "react";
import {CommentCount, FavoriteStars, FavoriteStatus} from "./style";
import StarImage from "../../assets/star.svg";

const Favorites = () => {
  const favoriteStars = Array(5).fill("");

  return (
    <FavoriteStars>
      {favoriteStars?.map((_, index) => (
        <FavoriteStatus src={StarImage} key={index} className="favoriteStatus"/>
      ))}
      <CommentCount>23 Yorum</CommentCount>
    </FavoriteStars>
  );
};

export default Favorites;
