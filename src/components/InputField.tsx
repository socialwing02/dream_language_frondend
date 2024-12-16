import { ChangeEvent } from "react";
import { Input } from "./ui/Input";

type Props = {
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  name: string;
  required: boolean;
};

export default function InputField({ label, name, ...props }: Props) {
  return (
    <div className="mb-1">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 "
      >
        {label}
      </label>
      <Input {...props} name={name} className="border outline-[1]" />
    </div>
  );
}
