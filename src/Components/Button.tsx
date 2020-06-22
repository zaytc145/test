import React from "react";

interface ButtonProps {
  text: string;
  type: string;
  onClick: () => void;
}

const Button = ({ text, type, onClick }: ButtonProps) => {
  return (
    <button className={`button ${type}-button`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
