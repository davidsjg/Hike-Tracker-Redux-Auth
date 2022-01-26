import React from "react";

function MainContain(props) {
  return <div className={props.cName}>{props.children}</div>;
}

export default MainContain;
