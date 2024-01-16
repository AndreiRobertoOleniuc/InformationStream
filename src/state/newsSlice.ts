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
      author: "Andrei Oleniuc",
      publishedAt: "21 January 2024",
      content: "<p>Test Content</p>",
    },
    {
      title: "The Rise and Fall of Ferrari: A Legendary Journey",
      description:
        "Explore the captivating story of Ferrari, from its humble beginnings to its iconic status in the world of motorsports.",
      heroImage:
        "https://cdn-9.motorsport.com/images/amp/YW7LO7OY/s1000/charles-leclerc-ferrari-f1-75-.jpg",
      categories: ["Sports", "F1", "Cars"],
      author: "Andrei Oleniuc",
      publishedAt: "13 January 2024",
      content:
        "<p>Ferrari's journey began in 1929 with Enzo Ferrari at its helm. Initially, the company sponsored drivers and manufactured racing cars before moving into production of street-legal vehicles in 1947. Over the years, Ferrari has established itself as a symbol of speed, luxury, and wealth. Despite facing numerous challenges, including the death of its founder and changes in ownership, Ferrari has maintained its status as a leading player in the automotive and motorsport world. Today, Ferrari is synonymous with Formula 1 racing and is recognized for its iconic red cars and the 'Prancing Horse' logo.</p>",
    },
    {
      title: "Why Mclaren F1 Team is the next big contander",
      description:
        "How Mclaren turned it's operations around and is looking like the most likely contender to RedBull Racing F1",
      heroImage:
        "https://www.thepaddockmagazine.com/wp-content/uploads/2023/04/00001-1.jpeg",
      categories: ["Sports", "F1", "Cars"],
      author: "Tim Walter",
      publishedAt: "15 January 2024",
      content: "<p>Test Content</p>",
    },
    {
      title: "The Rise and Fall of Ferrari: A Legendary Journey",
      description:
        "Explore the captivating story of Ferrari, from its humble beginnings to its iconic status in the world of motorsports.",
      heroImage:
        "https://cdn-9.motorsport.com/images/amp/YW7LO7OY/s1000/charles-leclerc-ferrari-f1-75-.jpg",
      categories: ["Sports", "F1", "Cars"],
      author: "Fabian Bähler",
      publishedAt: "18 January 2024",
      content:
        "<p>Ferrari's journey began in 1929 with Enzo Ferrari at its helm. Initially, the company sponsored drivers and manufactured racing cars before moving into production of street-legal vehicles in 1947. Over the years, Ferrari has established itself as a symbol of speed, luxury, and wealth. Despite facing numerous challenges, including the death of its founder and changes in ownership, Ferrari has maintained its status as a leading player in the automotive and motorsport world. Today, Ferrari is synonymous with Formula 1 racing and is recognized for its iconic red cars and the 'Prancing Horse' logo.</p>",
    },
    {
      title: "Why Mclaren F1 Team is the next big contander",
      description:
        "How Mclaren turned it's operations around and is looking like the most likely contender to RedBull Racing F1",
      heroImage:
        "https://www.thepaddockmagazine.com/wp-content/uploads/2023/04/00001-1.jpeg",
      categories: ["Sports", "F1", "Cars"],
      author: "Luca Nana",
      publishedAt: "10 January 2024",
      content: "<p>Test Content</p>",
    },
    {
      title: "The Rise and Fall of Ferrari: A Legendary Journey",
      description:
        "Explore the captivating story of Ferrari, from its humble beginnings to its iconic status in the world of motorsports.",
      heroImage:
        "https://cdn-9.motorsport.com/images/amp/YW7LO7OY/s1000/charles-leclerc-ferrari-f1-75-.jpg",
      categories: ["Sports", "F1", "Cars"],
      author: "Simon Strauber",
      publishedAt: "09 January 2024",
      content:
        "<p>Ferrari's journey began in 1929 with Enzo Ferrari at its helm. Initially, the company sponsored drivers and manufactured racing cars before moving into production of street-legal vehicles in 1947. Over the years, Ferrari has established itself as a symbol of speed, luxury, and wealth. Despite facing numerous challenges, including the death of its founder and changes in ownership, Ferrari has maintained its status as a leading player in the automotive and motorsport world. Today, Ferrari is synonymous with Formula 1 racing and is recognized for its iconic red cars and the 'Prancing Horse' logo.</p>",
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
