import React from "react";
import "./index.scss";

interface Props {
  text: string;
  type: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ text, type, onClick }: Props) => {
  return (
    <button className={`button ${type}-button`} onClick={onClick} type="button">
      {text}
    </button>
  );
};

export default React.memo(Button);
