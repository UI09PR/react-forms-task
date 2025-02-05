import { memo } from "react";
import Input from "../Input";

interface Props {
  formData: {
    workPlace: string;
    address: string;
  };
  workPlaces: string[];
  errors: { [key: string]: string };
  handleChange: (field: "workPlace" | "address", value: string) => void;
}

const Form2 = ({ formData, handleChange, errors, workPlaces }: Props) => {
return (
    <div className="flex flex-col gap-4 w-full my-4">
      <div>
        <label className="text-gray-700 font-medium">Место работы</label>
        <select
          value={formData.workPlace}
          onChange={(e) => handleChange("workPlace", e.target.value)}
          className="border p-2 rounded w-full bg-white text-gray-800"
        >
          <option value="">Выберите место работы</option>
          {workPlaces.map((place) => (
            <option key={place} value={place}>
              {place}
            </option>
          ))}
        </select>
        {errors.workPlace && <p className="text-red-500">{errors.workPlace}</p>}
      </div>

      <Input
        label="Адрес проживания"
        placeholder="Введите адрес"
        value={formData.address}
        onChange={(value) => handleChange("address", value)}
        error={errors.address}
      />
    </div>
  );
};

export default memo(Form2);
