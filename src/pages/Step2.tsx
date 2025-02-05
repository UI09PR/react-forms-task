import { memo, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormLayout from "../components/ui/FormLayout";
import Form2 from "../components/ui/Forms/Form2";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { getWorkPlacesThunk } from "../redux/slices/formsData/thunks";
import { setLoading, updateField } from "../redux/slices/formsData/slice";
import { FormDataState, secondFormSchema } from "../types/formsData";

const Step2 = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formData = useAppSelector((state) => state.formsDataSlice);
  const { workPlaces } = useAppSelector((state) => state.formsDataSlice);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const isValidData = () => {
    const validation = secondFormSchema.safeParse(formData);

    if (!validation.success) {
      const fieldErrors = validation.error.format();
      setErrors({
        workPlace: fieldErrors.workPlace?._errors[0] || "",
        address: fieldErrors.address?._errors[0] || "",
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
    if (!isValidData()) return;
    navigate("/step3");
  };

  useEffect(() => {
    dispatch(setLoading(true))
    dispatch(getWorkPlacesThunk());
  }, [dispatch]);

  useEffect(() => {
    isValidData();
  }, [formData]);

  return (
    <FormLayout title="Шаг 2: Адрес и место работы" handleNext={handleSubmit} handleBack={() => navigate("/step1")}>
      <Form2 formData={formData} handleChange={handleChange} errors={errors} workPlaces={workPlaces} />
    </FormLayout>
  );
};

export default memo(Step2);
