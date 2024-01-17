import React from "react";
import avatar from "../img/Avatar.svg";
import Groupe2 from "../img/Shape.svg";
import ellipse from "../img/Ellipse 2.svg";
function ImageComponent() {
  return (
    <div className="">
      {/* <Tilt> */}
        <img src={avatar} alt="" className="absolute  top-40 pl-20" />
      {/* </Tilt> */}
      <img src={ellipse} alt="" className="animate-bounce absolute bottom-6 pr-56" />
      <img src={Groupe2} alt="" className="absolute top-20 pr-20 " />
    </div>
  );
}

export default ImageComponent;
