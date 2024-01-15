import { createSlice } from "@reduxjs/toolkit";
import { Article } from "../models/Article";

const initialState = {
  articles: [
    {
      title: "Test",
      description: "Test",
      heroImage: "",
      categories: ["Tres"],
      author: "Test User",
      publishedAt: "12 January 2024",
      content:
        "<h1>This is a Test Article to Display the content</h1><p>Wow this really works greatly didn't expect this</p>",
    },
  ] as Article[],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNews: (state, action) => {
      state.articles.push(action.payload);
    },
  },
});

export const { addNews } = newsSlice.actions;

export const selectArticles = (state: any) => state.news.articles;

export default newsSlice.reducer;
