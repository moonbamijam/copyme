import { MouseEventHandler } from "react";

type ButtonProps = {
  id: string;
  text?: string;
  icon?: React.ReactNode;
  onClick?: MouseEventHandler;
  width?: string;
  height?: string;
  iconStyles?: string;
  hoverStyles?: string;
  activeStyles?: string;
  customStyles?: string;
  conditionalStyles?: string;
};

export default function Button({
  id,
  text,
  icon,
  onClick,
  width,
  height,
  iconStyles,
  customStyles,
  hoverStyles,
  activeStyles,
  conditionalStyles,
}: ButtonProps) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`transform ${width} ${height} ${customStyles} ${hoverStyles} ${activeStyles} ${conditionalStyles}`}
    >
      <span className={`${iconStyles}`}>{icon}</span>
      {text}
    </button>
  );
}
