import { createSlice } from "@reduxjs/toolkit";
import { Article } from "../models/Article";

const initialState = {
  news: [] as Article[],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNews: (state, action) => {
      state.news.push(action.payload);
    },
  },
});

export const { addNews } = newsSlice.actions;

export const selectNews = (state: any) => state.news.news;

export default newsSlice.reducer;
