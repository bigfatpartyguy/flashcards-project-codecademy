import {createSlice} from '@reduxjs/toolkit';
import {addQuizId} from '../topics/topicsSlice';

const quizzes = createSlice({
  name: 'quizzes',
  initialState: {},
  reducers: {
    addQuiz: (state, action) => {
      const {id} = action.payload;
      state[id] = action.payload;
    },
  },
});

export const selectQuizzes = state => state.quizzes;

const {addQuiz} = quizzes.actions;
export const addQuizThunk = quiz => {
  return dispatch => {
    dispatch(addQuiz(quiz));
    dispatch(addQuizId(quiz));
  };
};

export default quizzes.reducer;
