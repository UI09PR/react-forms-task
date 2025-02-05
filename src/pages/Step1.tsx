import { memo, useEffect, useState } from "react";
import FormLayout from "../components/ui/FormLayout";
import Form1 from "../components/ui/Forms/Form1";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useNavigate } from "react-router-dom";
import { updateField } from "../redux/slices/formsData/slice";
import { firstFormSchema, FormDataState } from "../types/formsData";

const Step1 = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formData = useAppSelector((state) => state.formsDataSlice);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const isValidData = () => {
    const validation = firstFormSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors = validation.error.format();
      setErrors({
        phone: fieldErrors.phone?._errors[0] || "",
        firstName: fieldErrors.firstName?._errors[0] || "",
        lastName: fieldErrors.lastName?._errors[0] || "",
        gender: fieldErrors.gender?._errors[0] || "",
      });
      return false;
    }
    setErrors({});
    return true;
  };

  const handleChange = (field: keyof FormDataState, value: string) => {
    dispatch(updateField({ field, value }));
  };

  const handleSubmit = () => {
    const validation = isValidData();
    if (!validation) {
      return;
    }
    navigate("/step2");
  };

  useEffect(() => {
    isValidData();
  }, [formData]);

  return (
    <FormLayout title="Шаг 1: Личные данные" handleNext={handleSubmit} handleBack={() => navigate("/")}>
      <Form1 formData={formData} handleChange={handleChange} errors={errors} />
    </FormLayout>
  );
};

export default memo(Step1);
