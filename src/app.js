import React from "react";
import RatingContainer from "./reactRating/ratingContainer";

const Testing = () => {
  return (
    <RatingContainer
      numberOfStar={10}
      numberOfSelectedStar={2.5}
      colorFilledStar={"red"}
      colorEmptyStar={"black"}
      starSize="20px"
      spaceBetweenStar="10px"
      disableOnSelect={false}
      onSelectStar={val => {console.log(val)}}
    />
  );
};

export default Testing;
