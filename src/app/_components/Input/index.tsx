import { ComponentProps } from "react";

interface IInput extends ComponentProps<"input"> {
  name: string;
  label: string;
}

const Input = ({ name, label, ...props }: IInput) => {
  return (
    <div className="flex flex-col gap-0.5">
      <label htmlFor={name} className="text-xs text-primary-800">
        {label}
      </label>
      <input
        {...props}
        name={name}
        className="border border-primary-100 rounded px-2 py-1 text-sm"
      />
    </div>
  );
};

export default Input;
