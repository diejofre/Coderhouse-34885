import React from "react";

const Button = ({ texto, handleClick }) => {
  return (
    <button onClick={handleClick} className="btn">
      {texto}
    </button>
  );
};

export default Button;
