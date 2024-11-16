import { HTMLAttributes, ReactNode } from "react";

const Button = ({
  children,
  ...props
}: {
  children: ReactNode;
  props?: HTMLAttributes<HTMLButtonElement>;
}) => {
  return (
    <button
      {...props}
      className="bg-slate-700 text-white px-3 py-0.5 rounded flex justify-center items-center text-sm"
    >
      {children}
    </button>
  );
};

export default Button;
