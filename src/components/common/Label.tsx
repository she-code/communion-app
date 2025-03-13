import { ReactNode } from "react";

interface LabelProps {
  children: ReactNode;
  className?: string;
}

const Label = ({ children, className }: LabelProps) => {
  return (
    <label
      className={`text-lg font-semibold text-gray-800 mb-3.5 pb-2 ${className}`}
    >
      {children}
    </label>
  );
};

export default Label;
