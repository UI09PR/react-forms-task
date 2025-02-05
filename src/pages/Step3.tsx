import { memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormLayout from "../components/ui/FormLayout";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { resetForm, setLoading, setMoadlShow, updateField } from "../redux/slices/formsData/slice";
import { thirdFormSchema } from "../types/formsData";
import Form3 from "../components/ui/Forms/Form3";
import { getCorrectName } from "../utils/getCorrectName";
import { postNewInfoThunk } from "../redux/slices/formsData/thunks";
import ModalQuestion from "../components/ui/ModalQuestion";

const Step3 = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formData = useAppSelector((state) => state.formsDataSlice);
  const { error } = useAppSelector((state) => state.formsDataSlice);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const isValidData = () => {
    const validation = thirdFormSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors = validation.error.format();
      setErrors({
        money: fieldErrors.money?._errors[0] || "",
        dayTime: fieldErrors.dayTime?._errors[0] || "",
      });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleChange = (field: "money" | "dayTime", value: number) => {
    dispatch(updateField({ field, value }));
  };

  const handleSubmit = async () => {
    if (!isValidData()) return;
    const payload = { title: `${formData.firstName} ${formData.lastName}` };
    dispatch(setLoading(true));
    dispatch(postNewInfoThunk(payload));
  };

  return (
    <FormLayout title="Шаг 3: Параметры займа" handleNext={handleSubmit} handleBack={() => navigate("/step2")}>
      <Form3 formData={formData} handleChange={handleChange} errors={errors} />
      <ModalQuestion
        title={error ?? `Поздравляем,${getCorrectName(formData.firstName, formData.lastName)}!`}
        info={error ? "" : `Вам одобрена сумма ${formData.money}$ на ${formData.dayTime} дней.`}
        closeCallBack={() => {
          dispatch(setMoadlShow(false));
          if (!error) {
            dispatch(resetForm());
            navigate("/");
          }
        }}
      />
    </FormLayout>
  );
};

export default memo(Step3);
