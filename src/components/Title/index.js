import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="title jumbotron">
      <h1>{props.children}</h1>
      <h2>Click on an image to earn points, but don't click on any more than once!</h2>
    </div>
  );
}

export default Title;
