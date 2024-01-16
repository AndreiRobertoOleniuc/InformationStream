import { createSlice } from "@reduxjs/toolkit";
import { Article } from "../models/Article";

const initialState = {
  articles: [
    {
      title: "ETH Zurich Wins Watt d’Or for Innovative Energy Technology",
      description:
        "ETH Zurich, in collaboration with AEW Energie AG, has been awarded the Watt d’Or for developing a groundbreaking energy optimization algorithm.",
      heroImage:
        "https://www.studyinswitzerland.plus/app/uploads/2018/02/sta_zentrum_hauptgebaeude_048.jpg",
      categories: ["Science", "Technology", "Environment"],
      author: "Luca Nana",
      publishedAt: "2024-01-16",
      content:
        "<p>ETH Zurich researchers have been recognized with the Watt d’Or award for their significant contributions to energy technology, optimizing the electricity grid with a novel algorithm. This achievement marks a major step forward in sustainable energy management.</p>",
    },
    {
      title:
        "Innovative Traffic Solutions to Transform Zurich's Urban Landscape",
      description:
        "Zurich is set to implement cutting-edge traffic management systems aimed at enhancing urban mobility and reducing congestion.",
      heroImage:
        "https://www.swissinfo.ch/resource/image/18011388/landscape_ratio3x2/580/386/a5795c52fb95ade0a4024c148ac09cda/F1159856DD9B773C94E4F056B8628C91/82245820-18011390.jpg",
      categories: ["Urban Planning", "Technology"],
      author: "Andrei Oleniuc",
      publishedAt: "2024-01-14",
      content:
        "<p>Zurich city planners are embracing innovative technologies to revolutionize traffic management, aiming to create a more efficient and less congested urban environment.</p>",
    },
    {
      title: "Aargau's Push for Eco-Friendly Public Transport",
      description:
        "Aargau invests in green public transport solutions, aiming to reduce carbon emissions and promote sustainable travel.",
      heroImage:
        "https://swissfederalism.ch/wp-content/uploads/2021/03/Un-bus-elettrico-di-marca-VOS-per-lAutpostale.jpeg",
      categories: ["Environment", "Transportation"],
      author: "Fabian Bähler",
      publishedAt: "2024-01-12",
      content:
        "<p>Aargau is leading the way in environmental conservation by investing in eco-friendly public transportation options, significantly reducing the region's carbon footprint.</p>",
    },
    {
      title: "Zurich's Thriving Tech Start-Up Scene",
      description:
        "Zurich emerges as a hub for tech start-ups, attracting talent and investors with its dynamic ecosystem and supportive infrastructure.",
      heroImage:
        "https://images.unsplash.com/photo-1620563092215-0fbc6b55cfc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8enVyaWNofGVufDB8fDB8fHww&w=1000&q=80",
      categories: ["Business", "Technology"],
      author: "Simon Strauber",
      publishedAt: "2024-01-10",
      content:
        "<p>Zurich is rapidly becoming a hotspot for tech start-ups, with a growing number of innovative companies choosing the city as their base.</p>",
    },
    {
      title: "Aargau's Commitment to Renewable Energy",
      description:
        "Aargau sets an example in renewable energy adoption, aiming to meet its energy needs sustainably.",
      heroImage:
        "https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2023/07/Untitled-683-%C3%97-1024px-1024-%C3%97-683px-2023-07-12T154605.688.jpg",
      categories: ["Environment", "Energy"],
      author: "Luca Nana",
      publishedAt: "2024-01-08",
      content:
        "<p>Aargau demonstrates its commitment to a sustainable future by significantly investing in renewable energy sources, aiming to become a leader in green energy.</p>",
    },
    {
      title: "Zurich's New Artistic Wave: Reviving the Cultural Scene",
      description:
        "Zurich's cultural landscape is experiencing a renaissance, with an influx of new galleries and art initiatives.",
      heroImage:
        "https://newinzurich.com/wp-content/uploads/2023/12/1117D0BF-1A03-4D2B-BA47-DA815729D5D7-compressed.jpg",
      categories: ["Culture", "Art"],
      author: "Andrei Oleniuc",
      publishedAt: "2024-01-06",
      content:
        "<p>Zurich is witnessing a cultural revival, marked by the opening of new art galleries and a surge in creative initiatives, enriching the city's artistic landscape.</p>",
    },
    {
      title: "Aargau's Agricultural Innovations Boost Local Economy",
      description:
        "Aargau's agricultural sector embraces technology, leading to increased productivity and a boost to the local economy.",
      heroImage:
        "https://www.ag.ch/media/kanton-aargau/portal/unser-kanton-aargau/zukunft/drohne-landwirtschaft_large.jpg",
      categories: ["Agriculture", "Economy"],
      author: "Tim Walter",
      publishedAt: "2024-01-04",
      content:
        "<p>Technological advancements in Aargau's agriculture are driving productivity, significantly contributing to the region's economic growth.</p>",
    },
    // {
    //   title: "Why Mclaren F1 Team is the next big contander",
    //   description:
    //     "How Mclaren turned it's operations around and is looking like the most likely contender to RedBull Racing F1",
    //   heroImage:
    //     "https://www.thepaddockmagazine.com/wp-content/uploads/2023/04/00001-1.jpeg",
    //   categories: ["Sports", "F1", "Cars"],
    //   author: "Andrei Oleniuc",
    //   publishedAt: "21 January 2024",
    //   content: "<p>Test Content</p>",
    // },
    // {
    //   title: "The Rise and Fall of Ferrari: A Legendary Journey",
    //   description:
    //     "Explore the captivating story of Ferrari, from its humble beginnings to its iconic status in the world of motorsports.",
    //   heroImage:
    //     "https://cdn-9.motorsport.com/images/amp/YW7LO7OY/s1000/charles-leclerc-ferrari-f1-75-.jpg",
    //   categories: ["Sports", "F1", "Cars"],
    //   author: "Andrei Oleniuc",
    //   publishedAt: "13 January 2024",
    //   content:
    //     "<p>Ferrari's journey began in 1929 with Enzo Ferrari at its helm. Initially, the company sponsored drivers and manufactured racing cars before moving into production of street-legal vehicles in 1947. Over the years, Ferrari has established itself as a symbol of speed, luxury, and wealth. Despite facing numerous challenges, including the death of its founder and changes in ownership, Ferrari has maintained its status as a leading player in the automotive and motorsport world. Today, Ferrari is synonymous with Formula 1 racing and is recognized for its iconic red cars and the 'Prancing Horse' logo.</p>",
    // },
  ] as Article[],
  searchFilter: "",
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    addNews: (state, action) => {
      state.articles.push(action.payload);
    },
    setSearchFilter: (state, action) => {
      state.searchFilter = action.payload;
    },
  },
});

export const { addNews, setSearchFilter } = newsSlice.actions;

export const selectArticles = (state: any) => state.news.articles;
export const selectSearchFilter = (state: any) => state.news.searchFilter;

export default newsSlice.reducer;
