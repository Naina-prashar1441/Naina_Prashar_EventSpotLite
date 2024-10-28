import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

const HeartButton = ({ initialLikes }) => {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(initialLikes || 0);

  const toggleLike = () => {
    setLiked(!liked);
    setLikesCount((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
  };

  return (
    <div className="heart-button" onClick={toggleLike} style={{ cursor: "pointer", display: "flex", alignItems: "center" }}>
      <FontAwesomeIcon icon={liked ? solidHeart : regularHeart} color={liked ? "red" : "grey"} size="lg" />
    </div>
  );
};

export default HeartButton;
