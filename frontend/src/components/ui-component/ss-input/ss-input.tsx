import { useState } from "react";
import {
  UseFormRegister,
  FieldValues,
  Path,
  RegisterOptions,
  FieldError,
} from "react-hook-form";

interface SSInputProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  type?: string;
  placeholder?: string;
  required?: boolean;
  icon?: string;
  register: UseFormRegister<T>;
  validation?: RegisterOptions<T>;
  error?: FieldError;
  autoComplete?: string;
}

const SSInput = <T extends FieldValues>({
  label,
  name,
  type = "text",
  placeholder,
  icon,
  register,
  validation,
  error,
  autoComplete,
}: SSInputProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

const inputType =
  type === "password"
    ? showPassword
      ? "text"
      : "password"
    : type;
  return (

    <div className="w-full">
      <label htmlFor={name} className="block text-sm font-medium text-gray-600 dark:text-gray-400">
        {label}
      </label>
      <div className="relative mt-2 w-full ">
        {icon && (
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">
            <i className={icon}></i>
          </span>
        )}
        <input
          type={inputType}
          id={name}

         
className={`block w-full min-w-0 max-w-full rounded-xl border bg-white dark:bg-slate-800 py-3 pl-10 pr-4 text-sm text-gray-900 dark:text-gray-200 border-gray-300 dark:border-slate-700 focus:outline-none focus:border-purple-500 ${
  error ? "border-red-500" : ""
}`}

 placeholder={placeholder}
          autoComplete={autoComplete}
          {...register(name, validation)}
        />
        {type === "password" && (
  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
  >
    <i className={showPassword ? "fi fi-rr-eye" : "fi fi-rr-eye-crossed"}></i>
  </button>
)}
      </div>
      {error && (
        <p className="text-red-400 text-sm mt-1">
        {error.message}
        </p>
    )}
    </div>
  );
};

export default SSInput;