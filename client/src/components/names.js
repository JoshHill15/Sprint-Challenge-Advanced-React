import React from "react";

function Names(props) {
  const { name, country } = props.cv;
  return (
    <div>
      <h3>_____________________</h3>
      <p>{name}</p>
      <p>{country}</p>
    </div>
  );
}

export default Names;
