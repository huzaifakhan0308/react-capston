import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getLatLon = createAsyncThunk(
  'city/LatLon',
  async (cityName) => {
    const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=f617f62839e8a87840642b3875ecf15e`);
    if (response.data[0] === undefined) {
      return { error: 'please correct your city name !' };
    }
    return response.data[0];
  },
);

const homeSlice = createSlice({
  name: 'home',
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getLatLon.fulfilled, (state, action) => action.payload);
  },
});

export default homeSlice;
