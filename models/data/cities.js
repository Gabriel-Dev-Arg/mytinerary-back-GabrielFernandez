//DATOS DEL SERVIDOR
import "dotenv/config.js"
//DATA DE MONGO
import "../../config/database.js"
//ESQUEMA
import City from "../City.js"

const cities = [
    {
        name: "Buenos Aires",
        photo: "https://plus.unsplash.com/premium_photo-1697729901052-fe8900e24993?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        country: "Argentina",
        continent: "South America",
        description: "Capital of Argentina, famous for its culture and European architecture.",
        population: 3075646,
        currency: "Argentine Peso",
        mainLanguage: "Spanish",
        timeZone: "GMT-3"
    },
    {
        name: "Paris",
        photo: "https://th.bing.com/th/id/R.65e4d9198aacb416e895db6d4b3f50bd?rik=2GfXuabUSEQRew&pid=ImgRaw&r=0",
        country: "France",
        continent: "Europe",
        description: "The capital of France, known for the Eiffel Tower and art.",
        population: 2140526,
        currency: "Euro",
        mainLanguage: "French",
        timeZone: "GMT+1"
    },
    {
        name: "Tokyo",
        photo: "https://plus.unsplash.com/premium_photo-1661873673782-88b30e6abef4?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        country: "Japan",
        continent: "Asia",
        description: "The capital of Japan, a technological and cultural hub.",
        population: 13929286,
        currency: "Yen",
        mainLanguage: "Japanese",
        timeZone: "GMT+9"
    },
    {
        name: "Sydney",
        photo: "https://plus.unsplash.com/premium_photo-1697730224601-a3c867ac1886?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        country: "Australia",
        continent: "Oceania",
        description: "The largest city in Australia, famous for its Opera House.",
        population: 5230330,
        currency: "Australian Dollar",
        mainLanguage: "English",
        timeZone: "GMT+10"
    },
    {
        name: "New York",
        photo: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        country: "United States",
        continent: "North America",
        description: "Iconic city of the United States, known as the Big Apple.",
        population: 8419600,
        currency: "US Dollar",
        mainLanguage: "English",
        timeZone: "GMT-5"
    },
    {
        name: "London",
        photo: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        country: "United Kingdom",
        continent: "Europe",
        description: "Capital of the United Kingdom, famous for Big Ben and Buckingham Palace.",
        population: 8982000,
        currency: "Pound Sterling",
        mainLanguage: "English",
        timeZone: "GMT+0"
    },
    {
        name: "Mexico City",
        photo: "https://i.natgeofe.com/n/6c02ad5a-977b-4f12-b9c0-02ffb0736e07/metropolitan-cathedral-zocalo-mexico-city_2x1.JPG",
        country: "Mexico",
        continent: "North America",
        description: "The capital of Mexico, one of the largest cities in the world.",
        population: 9209944,
        currency: "Mexican Peso",
        mainLanguage: "Spanish",
        timeZone: "GMT-6"
    },
    {
        name: "Berlin",
        photo: "https://th.bing.com/th/id/R.09520adf19c8748885737806a34be5fe?rik=EN0MFQUGGgpBUQ&pid=ImgRaw&r=0",
        country: "Germany",
        continent: "Europe",
        description: "The capital of Germany, known for its history and culture.",
        population: 3769495,
        currency: "Euro",
        mainLanguage: "German",
        timeZone: "GMT+1"
    },
    {
        name: "Cairo",
        photo: "https://img.freepik.com/premium-photo/cairo-downtown-nile-river-aerial-view-egypt_400112-940.jpg?w=2000",
        country: "Egypt",
        continent: "Africa",
        description: "The capital of Egypt, known for the nearby pyramids.",
        population: 20484965,
        currency: "Egyptian Pound",
        mainLanguage: "Arabic",
        timeZone: "GMT+2"
    },
    {
        name: "Dubai",
        photo: "https://th.bing.com/th/id/R.f1d7dee8cd6996b90c4752fce862065a?rik=nbrdivAvU6T7%2bw&pid=ImgRaw&r=0",
        country: "United Arab Emirates",
        continent: "Asia",
        description: "Known for its modern architecture and luxurious skyscrapers.",
        population: 3331420,
        currency: "Dirham",
        mainLanguage: "Arabic",
        timeZone: "GMT+4"
    },
    {
        name: "Moscow",
        photo: "https://th.bing.com/th/id/R.dc50c21bc50eac352fbc4f531e3d0bad?rik=1bPsWr%2f4Y%2fb4mw&riu=http%3a%2f%2fxlnation.city%2fmedia%2fmoscow-skyline.1737%2ffull%3fd%3d1472953301&ehk=mKH5Sk5I26dCfC0HUh43ilJwoT5xgyRVf%2f8IJrXAuQQ%3d&risl=&pid=ImgRaw&r=0",
        country: "Russia",
        continent: "Europe",
        description: "The capital of Russia, known for Red Square and the Kremlin.",
        population: 12506468,
        currency: "Russian Ruble",
        mainLanguage: "Russian",
        timeZone: "GMT+3"
    },
    {
        name: "Seoul",
        photo: "https://lp-cms-production.imgix.net/features/2016/09/shutterstock_407897917-lotte-world-tower-seoul-61bbde30f1cf.jpg?auto=format&fit=crop&q=40&sharp=10&vib=20&ixlib=react-8.6.4",
        country: "South Korea",
        continent: "Asia",
        description: "The capital of South Korea, a technological and cultural center.",
        population: 9776000,
        currency: "South Korean Won",
        mainLanguage: "Korean",
        timeZone: "GMT+9"
    },
    {
        name: "Rome",
        photo: "https://th.bing.com/th/id/R.51bdcb969d998fd4ff5bdfe75da6ad27?rik=rgmFUucuEwJ8eA&pid=ImgRaw&r=0",
        country: "Italy",
        continent: "Europe",
        description: "Capital of Italy, famous for the Colosseum and its ancient history.",
        population: 2873000,
        currency: "Euro",
        mainLanguage: "Italian",
        timeZone: "GMT+1"
    },
    {
        name: "São Paulo",
        photo: "https://th.bing.com/th/id/OIP.6kqhKBYnqpeX4nfdQuIhxAHaEK?rs=1&pid=ImgDetMain",
        country: "Brazil",
        continent: "South America",
        description: "The largest city in Brazil and a major financial center.",
        population: 12300000,
        currency: "Brazilian Real",
        mainLanguage: "Portuguese",
        timeZone: "GMT-3"
    },
    {
        name: "Toronto",
        photo: "https://th.bing.com/th/id/R.b8bcb849bee26dc4adab05289cc08080?rik=JshgMcsfXUsZaQ&riu=http%3a%2f%2fwww.opodo.de%2fblog%2fwp-content%2fuploads%2fsites%2f11%2f2017%2f03%2fToronto-Sehensw%c3%bcrdigkeiten_Opodo_Reiseblog-h.jpg&ehk=P18jDh5LUR4H3JZ51eUVNr7AL23GW%2bUGSwQvrCwxBCM%3d&risl=&pid=ImgRaw&r=0",
        country: "Canada",
        continent: "North America",
        description: "The largest city in Canada, known for its cultural diversity.",
        population: 2930000,
        currency: "Canadian Dollar",
        mainLanguage: "English",
        timeZone: "GMT-5"
    }
];

City.insertMany(cities)