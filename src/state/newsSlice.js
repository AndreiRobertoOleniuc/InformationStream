import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    news: [],
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

export const selectNews = (state) => state.news.news;


export default newsSlice.reducer;
