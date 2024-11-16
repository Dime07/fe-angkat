import { ComponentProps, ReactNode } from "react";
import { cn } from "../utils";

interface IButton extends ComponentProps<"button"> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "bordered";
}

const Button = ({ children, variant = "primary", ...props }: IButton) => {
  return (
    <button
      {...props}
      className={cn(
        "text-white px-3 py-0.5 rounded flex justify-center items-center text-xs w-full",
        "transition duration-200 ease-in-out",
        {
          "bg-primary-950": variant === "primary",
          "bg-secondary-950": variant === "secondary",
          "border-2 border-primary-950 bg-white text-primary-950 hover:bg-primary-950 hover:text-white":
            variant === "bordered",
        },
        props?.className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
