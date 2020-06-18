import React from "react";

interface ButtonProps {
  text: string;
  type: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ text, type, onClick }: ButtonProps) => {
  return (
    <button className={`button ${type}-button`} onClick={onClick} type="button">
      {text}
    </button>
  );
};

export default React.memo(Button);
