import React from "react";

function Input(props) {
  let inputVal = props.inputVal;
  let dataType = props.dataType;
  let setFormData = props.propSetForm();
  return (
    <input
      value={inputVal.dataType}
      onChange={(e) => setFormData({ ...inputVal, dataType: e.target.value })}
    />
  );
}

export default Input;
