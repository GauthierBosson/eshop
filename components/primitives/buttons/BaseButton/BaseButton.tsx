import React from "react";
import clsx from "clsx";

type HTMLButtonProps = {
  onClick?: JSX.IntrinsicElements["button"]["onClick"];
  type?: JSX.IntrinsicElements["button"]["type"];
};

type BaseButtonProps = {
  children?: React.ReactNode | React.ReactNode[];
  className?: string;
  size?: "small" | "medium" | "large";
} & HTMLButtonProps;

function BaseButton({
  children,
  className,
  size = "medium",
  type,
  onClick,
  ...props
}: BaseButtonProps) {
  const classname = clsx(
    "rounded-full border",
    {
      "p-2": size === "small",
      "p-6": size === "medium",
      "p-10": size === "large",
    },
    className
  );

  return (
    <button type={type} onClick={onClick} className={classname} {...props}>
      {children}
    </button>
  );
}

export default BaseButton;
