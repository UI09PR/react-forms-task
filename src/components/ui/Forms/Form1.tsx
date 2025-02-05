import { memo } from "react";
import { FormDataState } from "../../../types/formsData";
import Input from "../Input";

interface Props {
  formData: FormDataState;
  errors: { [key: string]: string };
  handleChange: (field: keyof FormDataState, value: string) => void;
}
const Form1 = ({ formData, handleChange, errors }: Props) => {
return (
    <div className="flex-start-center gap-4 w-full my-4">
      <div className="flex flex-col gap-4 w-full">
        <Input
          label="Телефон"
          placeholder="0XXX XXX XXX"
          type="tel"
          value={formData.phone}
          onChange={(value) => handleChange("phone", value)}
          error={errors.phone}
        />

        <Input
          label="Имя"
          placeholder="Иван"
          value={formData.firstName}
          onChange={(value) => handleChange("firstName", value)}
          error={errors.firstName}
        />

        <Input
          label="Фамилия"
          placeholder="Иванов"
          value={formData.lastName}
          onChange={(value) => handleChange("lastName", value)}
          error={errors.lastName}
        />

        <div className="mt-1 flex gap-1 flex-col">
          <label className="text-gray-700 font-medium">Выберите пол</label>
          <select
            value={formData.gender}
            onChange={(e) => handleChange("gender", e.target.value)}
            className="border p-2 rounded w-full bg-white text-gray-800"
          >
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </select>
          {errors.gender && <p className="text-red-500">{errors.gender}</p>}
        </div>
      </div>
    </div>
  );
};

export default memo(Form1);
