import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const Input: React.FC<InputProps> = ({ label, placeholder, type = "text", value, onChange, error }) => {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-700 font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`border p-2 rounded w-full ${error ? "border-red-500" : "border-gray-300"}`}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default Input;
