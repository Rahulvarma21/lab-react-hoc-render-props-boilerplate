import React, { useState } from "react";
import Component from "../Component";

const LikeImage = (props) => {
  return (
    <div>
      <button onClick={props.handleClick}>Like Image {props.state}</button>
    </div>
  );
};

let componentCall = Component(LikeImage);

export default componentCall;
