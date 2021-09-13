import {createSlice} from '@reduxjs/toolkit';

const topics = createSlice({
  name: 'topics',
  initialState: {},
  reducers: {
    addTopic: (state, action) => {
      const {id} = action.payload;
      state[id] = {...action.payload, quizIds: []};
    },
  },
});

export const selectTopics = state => state.topics;

export const {addTopic} = topics.actions;
export default topics.reducer;
