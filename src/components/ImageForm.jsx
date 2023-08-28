/** @format */

import React from "react";
import bgFrom from "../assets/image 1.png";
function ImageForm() {
  return (
    <div>
      <div className='hidden md:block'>
        <img
          src={bgFrom}
          alt=''
          style={{
            width: "756px",
            height: "100vh",
            overflow: "hidden",
          }}
        />
      </div>
    </div>
  );
}

export default ImageForm;