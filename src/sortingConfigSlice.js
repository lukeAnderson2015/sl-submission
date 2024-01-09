import { createSlice } from '@reduxjs/toolkit';

export const ASCENDING = 'ascending';
export const DESCENDING = 'descending';

export const sortingConfigSlice = createSlice({
  name: 'sortingConfig',
  initialState: {
    column: '',
    direction: DESCENDING
  },
  reducers: {
    changeSortDirection: (state) => {
      const direction = state.direction;
      state.direction = direction === ASCENDING ? DESCENDING : ASCENDING;
    },
    changeSortColumn: (state, action) => {
      state.column = action.payload
    },
  },
})

export const { changeSortColumn, changeSortDirection } = sortingConfigSlice.actions

export default sortingConfigSlice.reducer