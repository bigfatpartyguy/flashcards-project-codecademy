import {createSlice} from '@reduxjs/toolkit';

const topics = createSlice({
  name: 'topics',
  initialState: {},
  reducers: {
    addTopic: (state, action) => {
      const {id} = action.payload;
      state[id] = {...action.payload, quizIds: []};
    },
    addQuizId: (state, action) => {
      const {topicId, id} = action.payload;
      state[topicId].quizIds.push(id);
    },
  },
});

export const selectTopics = state => state.topics;

export const {addTopic, addQuizId} = topics.actions;
export default topics.reducer;
