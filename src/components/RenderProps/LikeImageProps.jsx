import React from "react";
import CommonProps from './CommonProps';

export default function LikeImageProps() {
  return(
    <CommonProps>
      {/* This is a children  */}
      {
        // This is a function
        ({like, handleLike}) => (
          <button onClick={handleLike}>
            Like Image {like}</button>
        )
      }
    </CommonProps>
  )
}
