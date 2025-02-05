import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FormDataState } from "../../../types/formsData";
import { formatPhoneNumber } from "../../../utils/getFormattedNumber";
import { getWorkPlacesThunk, postNewInfoThunk } from "./thunks";
import { MainState } from "../../../types";

const initialState: MainState = {
  phone: "",
  firstName: "",
  lastName: "",
  gender: "male",
  workPlace: "",
  address: "",
  money: 300,
  dayTime: 15,
  workPlaces: [],
  error: null,
  loading: false,
  moadlShow: false,
};

export const formsDataSlice = createSlice({
  name: "formsData",
  initialState,
  reducers: {
    updateField: <K extends keyof FormDataState>(
      state: FormDataState,
      action: PayloadAction<{ field: K; value: FormDataState[K] }>
    ) => {
      if (action.payload.field === "phone") {
        state.phone = formatPhoneNumber(action.payload.value as string);
      } else {
        state[action.payload.field] = action.payload.value;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setMoadlShow: (state, action: PayloadAction<boolean>) => {
      state.moadlShow = action.payload;
    },
    resetForm: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getWorkPlacesThunk.fulfilled, (state, action) => {
      state.workPlaces = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getWorkPlacesThunk.rejected, (state) => {
      state.error = "Ошибка, повторите загрузку";
      state.loading = false;
    });
    builder.addCase(postNewInfoThunk.fulfilled, (state) => {
      state.error = null;
      state.loading = false;
      state.moadlShow = true;
    });
    builder.addCase(postNewInfoThunk.rejected, (state) => {
      state.error = "Ошибка, повторите заявку позже";
      state.loading = false;
      state.moadlShow = true;
    });
  },
});

export const { updateField, resetForm, setLoading, setMoadlShow } = formsDataSlice.actions;
export default formsDataSlice.reducer;
