import { createSlice } from "@reduxjs/toolkit";
import { Article } from "../models/Article";

const initialState = {
  articles: [
    {
      title: "ETH Zürich gewinnt Watt d’Or für innovative Energietechnologie",
      description:
        "Die ETH Zürich hat in Zusammenarbeit mit der AEW Energie AG den Watt d’Or für die Entwicklung eines bahnbrechenden Energieoptimierungsalgorithmus erhalten.",
      heroImage:
        "https://www.studyinswitzerland.plus/app/uploads/2018/02/sta_zentrum_hauptgebaeude_048.jpg",
      categories: ["Wissenschaft", "Technologie", "Umwelt"],
      author: "Luca Nana",
      publishedAt: "2024-01-16",
      content:
        "<p>Forscher der ETH Zürich wurden mit dem Watt d’Or Preis für ihre bedeutenden Beiträge zur Energietechnologie ausgezeichnet, indem sie das Stromnetz mit einem neuartigen Algorithmus optimieren. Diese Errungenschaft stellt einen großen Schritt nach vorne im nachhaltigen Energiemanagement dar.</p>",
    },
    {
      title: "Innovative Verkehrslösungen verwandeln Zürichs Stadtbild",
      description:
        "Zürich plant, modernste Verkehrsmanagementsysteme einzuführen, um die städtische Mobilität zu verbessern und Staus zu reduzieren.",
      heroImage:
        "https://www.swissinfo.ch/resource/image/18011388/landscape_ratio3x2/580/386/a5795c52fb95ade0a4024c148ac09cda/F1159856DD9B773C94E4F056B8628C91/82245820-18011390.jpg",
      categories: ["Stadtplanung", "Technologie"],
      author: "Andrei Oleniuc",
      publishedAt: "2024-01-14",
      content:
        "<p>Stadtplaner in Zürich setzen auf innovative Technologien, um das Verkehrsmanagement zu revolutionieren und so eine effizientere und weniger verstopfte städtische Umgebung zu schaffen.</p>",
    },
    {
      title: "Aargaus Vorstoß für umweltfreundlichen öffentlichen Verkehr",
      description:
        "Aargau investiert in grüne öffentliche Verkehrslösungen, um CO2-Emissionen zu reduzieren und nachhaltige Reisen zu fördern.",
      heroImage:
        "https://swissfederalism.ch/wp-content/uploads/2021/03/Un-bus-elettrico-di-marca-VOS-per-lAutpostale.jpeg",
      categories: ["Umwelt", "Verkehr"],
      author: "Fabian Bähler",
      publishedAt: "2024-01-12",
      content:
        "<p>Aargau geht bei der Umwelterhaltung voran, indem es in umweltfreundliche öffentliche Verkehrsmittel investiert und so den CO2-Fußabdruck der Region deutlich reduziert.</p>",
    },
    {
      title: "Zürichs florierende Tech-Startup-Szene",
      description:
        "Zürich entwickelt sich zu einem Zentrum für Tech-Startups und zieht mit seinem dynamischen Ökosystem und unterstützender Infrastruktur Talente und Investoren an.",
      heroImage:
        "https://images.unsplash.com/photo-1620563092215-0fbc6b55cfc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8enVyaWNofGVufDB8fDB8fHww&w=1000&q=80",
      categories: ["Geschäft", "Technologie"],
      author: "Simon Strauber",
      publishedAt: "2024-01-10",
      content:
        "<p>Zürich wird schnell zu einem Hotspot für Tech-Startups, mit einer wachsenden Zahl von innovativen Unternehmen, die die Stadt als ihren Standort wählen.</p>",
    },
    {
      title: "Aargaus Engagement für erneuerbare Energien",
      description:
        "Aargau setzt ein Beispiel für die Einführung erneuerbarer Energien und strebt danach, seine Energiebedürfnisse nachhaltig zu decken.",
      heroImage:
        "https://u4d2z7k9.rocketcdn.me/wp-content/uploads/2023/07/Untitled-683-%C3%97-1024px-1024-%C3%97-683px-2023-07-12T154605.688.jpg",
      categories: ["Umwelt", "Energie"],
      author: "Luca Nana",
      publishedAt: "2024-01-08",
      content:
        "<p>Aargau zeigt sein Engagement für eine nachhaltige Zukunft, indem es erheblich in erneuerbare Energiequellen investiert und so zum Vorreiter in Sachen grüner Energie wird.</p>",
    },
    {
      title: "Zürichs neue künstlerische Welle: Belebung der Kulturszene",
      description:
        "Die kulturelle Landschaft Zürichs erlebt eine Renaissance, mit einem Zustrom neuer Galerien und Kunstinitiativen.",
      heroImage:
        "https://newinzurich.com/wp-content/uploads/2023/12/1117D0BF-1A03-4D2B-BA47-DA815729D5D7-compressed.jpg",
      categories: ["Kultur", "Kunst"],
      author: "Andrei Oleniuc",
      publishedAt: "2024-01-06",
      content:
        "<p>Zürich erlebt eine kulturelle Wiederbelebung, gekennzeichnet durch die Eröffnung neuer Kunstgalerien und einem Anstieg kreativer Initiativen, die die künstlerische Landschaft der Stadt bereichern.</p>",
    },
    {
      title:
        "Aargaus landwirtschaftliche Innovationen stärken die lokale Wirtschaft",
      description:
        "Der landwirtschaftliche Sektor in Aargau nutzt die Technologie, was zu einer gesteigerten Produktivität und einem Schub für die lokale Wirtschaft führt.",
      heroImage:
        "https://www.ag.ch/media/kanton-aargau/portal/unser-kanton-aargau/zukunft/drohne-landwirtschaft_large.jpg",
      categories: ["Landwirtschaft", "Wirtschaft"],
      author: "Tim Walter",
      publishedAt: "2024-01-04",
      content:
        "<p>Technologische Fortschritte in der Landwirtschaft Aargaus treiben die Produktivität voran und tragen so erheblich zum wirtschaftlichen Wachstum der Region bei.</p>",
    },
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
