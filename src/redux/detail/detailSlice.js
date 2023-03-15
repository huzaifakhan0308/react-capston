import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getWeatherData = createAsyncThunk(
  'city/weatherData',
  async ({ lat, lon }) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f617f62839e8a87840642b3875ecf15e`);
    return response.data;
  },
);

const detailSlice = createSlice({
  name: 'detail',
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getWeatherData.fulfilled, (state, action) => action.payload);
  },
});

export default detailSlice;
