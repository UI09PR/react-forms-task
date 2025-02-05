import { createAsyncThunk } from '@reduxjs/toolkit';
import apiService from './service';

export const getWorkPlacesThunk = createAsyncThunk<string[], void>(
  'formsData/formsDataThunk',
  () => apiService.getWorkPlaces(),
);

export const postNewInfoThunk = createAsyncThunk<string[], {title: string}>(
    'formsData/postNewInfoThunk',
    (payload) => apiService.postNewInfo(payload),
  );