import React from "react";

interface SliderProps {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (value: number) => void;
  unit?: string;
}

const Slider: React.FC<SliderProps> = ({ label, min, max, step, value, onChange, unit = "" }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-700 font-medium">{label}</label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full cursor-pointer"
      />
      <span className="text-gray-800 font-semibold">{value} {unit}</span>
    </div>
  );
};

export default Slider;
