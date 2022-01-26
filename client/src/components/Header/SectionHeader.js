import React from "react";

function SectionHeader(props) {
  return <div className={props.cName}>{props.children}</div>;
}

export default SectionHeader;
