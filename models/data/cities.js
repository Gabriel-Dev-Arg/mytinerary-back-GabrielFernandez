//DATOS DEL SERVIDOR
import "dotenv/config.js"
//DATA DE MONGO
import "../../config/database.js"
//ESQUEMA
import City from "../City.js"

const cities = [
    {
        name: "Buenos Aires",
        photo: "https://example.com/buenos-aires.jpg",
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
        photo: "https://example.com/paris.jpg",
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
        photo: "https://example.com/tokyo.jpg",
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
        photo: "https://example.com/sydney.jpg",
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
        photo: "https://example.com/new-york.jpg",
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
        photo: "https://example.com/london.jpg",
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
        photo: "https://example.com/mexico-city.jpg",
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
        photo: "https://example.com/berlin.jpg",
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
        photo: "https://example.com/cairo.jpg",
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
        photo: "https://example.com/dubai.jpg",
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
        photo: "https://example.com/moscow.jpg",
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
        photo: "https://example.com/seoul.jpg",
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
        photo: "https://example.com/rome.jpg",
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
        photo: "https://example.com/sao-paulo.jpg",
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
        photo: "https://example.com/toronto.jpg",
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