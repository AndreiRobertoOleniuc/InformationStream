import { createSlice } from "@reduxjs/toolkit";
import { Article } from "../models/Article";

const initialState = {
  articles: [
    {
      title: "Why Mclaren F1 Team is the next big contander",
      description:
        "How Mclaren turned it's operations around and is looking like the most likely contender to RedBull Racing F1",
      heroImage:
        "https://www.thepaddockmagazine.com/wp-content/uploads/2023/04/00001-1.jpeg",
      categories: ["Sports", "F1", "Cars"],
      author: "Test User",
      publishedAt: "15 January 2024",
      content: "<p>Test Content</p>",
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
