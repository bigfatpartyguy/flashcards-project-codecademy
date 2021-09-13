import {createSlice} from '@reduxjs/toolkit';

const cards = createSlice({
  name: 'cards',
  initialState: {},
  reducers: {
    addCard: (state, action) => {
      const {id} = action.payload;
      state[id] = action.payload;
    },
  },
});

export const selectCards = state => state.cards;

export const {addCard} = cards.actions;
export default cards.reducer;
