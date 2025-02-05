import { memo } from "react";
import Slider from "../Slider";

interface Props {
  formData: {
    money: number;
    dayTime: number;
  };
  handleChange: (field: "money" | "dayTime", value: number) => void;
  errors: { [key: string]: string };
}

const Form3 = ({ formData, handleChange, errors }: Props) => {
return (
    <div className="flex flex-col gap-4 w-full my-4">
      <Slider
        label="Сумма займа"
        min={200}
        max={1000}
        step={100}
        value={formData.money}
        onChange={(value) => handleChange("money", value)}
        unit="$"
      />
      {errors.money && <p className="text-red-500">{errors.money}</p>}

      <Slider
        label="Срок займа"
        min={10}
        max={30}
        step={1}
        value={formData.dayTime}
        onChange={(value) => handleChange("dayTime", value)}
        unit="дней"
      />
      {errors.dayTime && <p className="text-red-500">{errors.dayTime}</p>}
    </div>
  );
};

export default memo(Form3);
