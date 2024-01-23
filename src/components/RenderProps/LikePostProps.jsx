import React from "react";
import CommonProps from './CommonProps';

export default function LikePostProps() {
  return(
    <CommonProps>
      {/* This is a children  */}
      {
        // This is a function
        ({like, handleLike}) => (
          <button onClick={handleLike}>
            Like Post {like}</button>
        )
      }
    </CommonProps>
  )
}
