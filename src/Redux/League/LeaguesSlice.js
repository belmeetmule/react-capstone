import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from './api';

// Actions
const GET_LEAGUE_DATA = 'GET_LEAGUE_DATA';

const initialState = [];

// Thunks
export const getLeaguesData = createAsyncThunk(GET_LEAGUE_DATA, async () => {
  try {
    return await api.fetchLeagueData();
  } catch (error) {
    return error.message;
  }
});

// Reducer
const leaguesSlice = createSlice({
  name: 'leagues',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getLeaguesData.pending, (state) => (
        state
      ))
      .addCase(getLeaguesData.fulfilled, (state, action) => (

        action.payload
      ))
      .addCase(getLeaguesData.rejected, (state) => (
        state
      ));
  },
});

const { actions, reducer } = leaguesSlice;
export { actions };
export default reducer;
