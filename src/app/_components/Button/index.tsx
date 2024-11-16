import clsx from "clsx";
import { ComponentProps, ReactNode } from "react";

interface IButton extends ComponentProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary";
}

const Button = ({ children, variant = "primary", ...props }: IButton) => {
  return (
    <button
      {...props}
      className={clsx(
        "text-white px-3 py-0.5 rounded flex justify-center items-center text-xs w-full",
        {
          "bg-primary-950": variant === "primary",
          "bg-secondary-950": variant === "secondary",
        },
        props?.className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
