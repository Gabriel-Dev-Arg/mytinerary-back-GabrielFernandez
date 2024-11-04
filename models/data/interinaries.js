//DATOS DEL SERVIDOR
import "dotenv/config.js";
//DATA DE MONGO
import "../../config/database.js";
//ESQUEMA
import Itinerary from "../Itinerary.js";

const itineraries = [
  {
    author: {
      name: "Ethan Parker",
      photo: "https://i.pravatar.cc/150?img=3",
    },
    price: 3,
    duration: 24,
    likes: 0,
    hashtags: ["#toronto", "#citylife", "#canada"],
    activities: [],
    comments: [],
    city: "Toronto",
    cityId: "6717e832a0345dda4ac10c20",
  },
  {
    author: {
      name: "Lily Thompson",
      photo: "https://i.pravatar.cc/150?img=1",
    },
    price: 5,
    duration: 12,
    likes: 0,
    hashtags: ["#art", "#culture", "#canadianvibes"],
    activities: [],
    comments: [],
    city: "Toronto",
    cityId: "6717e832a0345dda4ac10c20",
  },
  {
    author: { name: "Noah Evans", photo: "https://i.pravatar.cc/150?img=4" },
    price: 4,
    duration: 18,
    likes: 0,
    hashtags: ["#foodie", "#streetfood", "#torontolife"],
    activities: [],
    comments: [],
    city: "Toronto",
    cityId: "6717e832a0345dda4ac10c20",
  },
  {
    author: {
      name: "Carlos Lopez",
      photo: "https://i.pravatar.cc/150?img=6",
    },
    price: 3,
    duration: 24,
    likes: 0,
    hashtags: ["#buenosaires", "#culture", "#food"],
    activities: [],
    comments: [],
    city: "Buenos Aires",
    cityId: "6717e832a0345dda4ac10c12",
  },
  {
    author: {
      name: "Lucia Fernandez",
      photo: "https://i.pravatar.cc/150?img=5",
    },
    price: 4,
    duration: 12,
    likes: 0,
    hashtags: ["#history", "#architecture", "#city"],
    activities: [],
    comments: [],
    city: "Buenos Aires",
    cityId: "6717e832a0345dda4ac10c12",
  },
  {
    author: {
      name: "Federico Martinez",
      photo: "https://i.pravatar.cc/150?img=7",
    },
    price: 5,
    duration: 36,
    likes: 0,
    hashtags: ["#gastronomy", "#tradition", "#baires"],
    activities: [],
    comments: [],
    city: "Buenos Aires",
    cityId: "6717e832a0345dda4ac10c12",
  },
  {
    author: {
      name: "Andres Perez",
      photo: "https://i.pravatar.cc/150?img=8",
    },
    price: 3,
    duration: 24,
    likes: 0,
    hashtags: ["#bogota", "#mountain", "#culture"],
    activities: [],
    comments: [],
    city: "Bogotá",
    cityId: "671810860584e0439b616daf",
  },
  {
    author: {
      name: "Camila Morales",
      photo: "https://i.pravatar.cc/150?img=9",
    },
    price: 4,
    duration: 16,
    likes: 0,
    hashtags: ["#art", "#historic", "#colombia"],
    activities: [],
    comments: [],
    city: "Bogotá",
    cityId: "671810860584e0439b616daf",
  },
  {
    author: {
      name: "Javier Martinez",
      photo: "https://i.pravatar.cc/150?img=11",
    },
    price: 5,
    duration: 32,
    likes: 0,
    hashtags: ["#gastronomy", "#markets", "#bogota"],
    activities: [],
    comments: [],
    city: "Bogotá",
    cityId: "671810860584e0439b616daf",
  },
  {
    author: { name: "Ana Souza", photo: "https://i.pravatar.cc/150?img=10" },
    price: 3,
    duration: 20,
    likes: 0,
    hashtags: ["#saopaulo", "#culture", "#gastronomy"],
    activities: [],
    comments: [],
    city: "São Paulo",
    cityId: "6717e832a0345dda4ac10c1f",
  },
  {
    author: {
      name: "Bruno Pereira",
      photo: "https://i.pravatar.cc/150?img=12",
    },
    price: 4,
    duration: 12,
    likes: 0,
    hashtags: ["#architecture", "#city", "#tourism"],
    activities: [],
    comments: [],
    city: "São Paulo",
    cityId: "6717e832a0345dda4ac10c1f",
  },
  {
    author: {
      name: "Carla Menezes",
      photo: "http://example.com/photo_carla.jpg",
    },
    price: 5,
    duration: 30,
    likes: 0,
    hashtags: ["#parks", "#history", "#streetart"],
    activities: [],
    comments: [],
    city: "São Paulo",
    cityId: "6717e832a0345dda4ac10c1f",
  },
  {
    author: {
      name: "Marco Rossi",
      photo: "https://i.pravatar.cc/150?img=13"
    },
    price: 4,
    duration: 24,
    likes: 0,
    hashtags: ["#rome", "#history", "#ancientruins"],
    activities: [],
    comments: [],
    city: "Rome",
    cityId: "6717e832a0345dda4ac10c1e"
  },
  {
    author: {
      name: "Giulia Bianchi",
      photo: "https://i.pravatar.cc/150?img=16"
    },
    price: 5,
    duration: 18,
    likes: 0,
    hashtags: ["#art", "#colosseum", "#italianculture"],
    activities: [],
    comments: [],
    city: "Rome",
    cityId: "6717e832a0345dda4ac10c1e"
  },
  {
    author: {
      name: "Luca Verdi",
      photo: "https://i.pravatar.cc/150?img=14"
    },
    price: 3,
    duration: 12,
    likes: 0,
    hashtags: ["#food", "#pizza", "#vatican"],
    activities: [],
    comments: [],
    city: "Rome",
    cityId: "6717e832a0345dda4ac10c1e"
  },
  {
    author: {
      name: "Chloe Dubois",
      photo: "https://i.pravatar.cc/150?img=15"
    },
    price: 4,
    duration: 16,
    likes: 0,
    hashtags: ["#paris", "#eiffeltower", "#france"],
    activities: [],
    comments: [],
    city: "Paris",
    cityId: "6717e832a0345dda4ac10c13"
  },
  {
    author: {
      name: "Homero Simpson",
      photo: "https://toppng.com/uploads/preview/homero-11529080096pkfxouaqfu.png"
    },
    price: 4,
    duration: 16,
    likes: 0,
    hashtags: ["#paris", "#eiffeltower", "#france"],
    activities: [],
    comments: [],
    city: "Paris",
    cityId: "6717e832a0345dda4ac10c13"
  },
  {
    author: {
      name: "Lucas Moreau",
      photo: "https://i.pravatar.cc/150?img=17"
    },
    price: 5,
    duration: 20,
    likes: 0,
    hashtags: ["#art", "#louvre", "#parisianlife"],
    activities: [],
    comments: [],
    city: "Paris",
    cityId: "6717e832a0345dda4ac10c13"
  },
  {
    author: {
      name: "Hakira Tanaka",
      photo: "https://i.pravatar.cc/150?img=25"
    },
    price: 4,
    duration: 18,
    likes: 0,
    hashtags: ["#tokyo", "#shibuya", "#japan"],
    activities: [],
    comments: [],
    city: "Tokyo",
    cityId: "6717e832a0345dda4ac10c14"
  },
  {
    author: {
      name: "Aiko Sato",
      photo: "https://i.pravatar.cc/150?img=35"
    },
    price: 3,
    duration: 12,
    likes: 0,
    hashtags: ["#temples", "#culture", "#tokyolife"],
    activities: [],
    comments: [],
    city: "Tokyo",
    cityId: "6717e832a0345dda4ac10c14"
  },
  {
    author: {
      name: "Yuto Nakamura",
      photo: "https://i.pravatar.cc/150?img=38"
    },
    price: 5,
    duration: 24,
    likes: 0,
    hashtags: ["#foodie", "#ramen", "#japanesefood"],
    activities: [],
    comments: [],
    city: "Tokyo",
    cityId: "6717e832a0345dda4ac10c14"
  },
  {
    author: {
      name: "Oliver Smith",
      photo: "https://i.pravatar.cc/150?img=50"
    },
    price: 4,
    duration: 16,
    likes: 0,
    hashtags: ["#sydney", "#operaHouse", "#australia"],
    activities: [],
    comments: [],
    city: "Sydney",
    cityId: "6717e832a0345dda4ac10c15"
  },
  {
    author: {
      name: "Amelia Brown",
      photo: "https://i.pravatar.cc/150?img=40"
    },
    price: 3,
    duration: 12,
    likes: 0,
    hashtags: ["#beaches", "#bondiBeach", "#australianvibes"],
    activities: [],
    comments: [],
    city: "Sydney",
    cityId: "6717e832a0345dda4ac10c15"
  },
  {
    author: {
      name: "Ethan Wilson",
      photo: "https://this-person-does-not-exist.com/img/avatar-gen4be29c8865d838b165a56af0b88a7ab3.jpg"
    },
    price: 5,
    duration: 20,
    likes: 0,
    hashtags: ["#foodie", "#harbourBridge", "#sydneyLife"],
    activities: [],
    comments: [],
    city: "Sydney",
    cityId: "6717e832a0345dda4ac10c15"
  },
  {
    author: {
      name: "Emma Johnson",
      photo: "https://this-person-does-not-exist.com/img/avatar-genb4982872064b374c542f80cdba6e2bf4.jpg"
    },
    price: 5,
    duration: 18,
    likes: 0,
    hashtags: ["#newyork", "#centralPark", "#bigApple"],
    activities: [],
    comments: [],
    city: "New York",
    cityId: "6717e832a0345dda4ac10c16"
  },
  {
    author: {
      name: "Liam Scott",
      photo: "https://i.pravatar.cc/150?img=41"
    },
    price: 4,
    duration: 10,
    likes: 0,
    hashtags: ["#broadway", "#nyCulture", "#usa"],
    activities: [],
    comments: [],
    city: "New York",
    cityId: "6717e832a0345dda4ac10c16"
  },
  {
    author: {
      name: "Sophia Martinez",
      photo: "https://i.pravatar.cc/150?img=42"
    },
    price: 3,
    duration: 12,
    likes: 0,
    hashtags: ["#foodie", "#timesSquare", "#nycLife"],
    activities: [],
    comments: [],
    city: "New York",
    cityId: "6717e832a0345dda4ac10c16"
  },
  {
    author: {
      name: "Carlos Hernandez",
      photo: "https://this-person-does-not-exist.com/img/avatar-gen80b45514e179756196f7b7682ba17bb0.jpg"
    },
    price: 3,
    duration: 15,
    likes: 0,
    hashtags: ["#mexicocity", "#cultura", "#zocalo"],
    activities: [],
    comments: [],
    city: "Mexico City",
    cityId: "6717e832a0345dda4ac10c18"
  },
  {
    author: {
      name: "Mariana Lopez",
      photo: "https://i.pravatar.cc/150?img=44"
    },
    price: 4,
    duration: 20,
    likes: 0,
    hashtags: ["#artemexicano", "#museo", "#cdmx"],
    activities: [],
    comments: [],
    city: "Mexico City",
    cityId: "6717e832a0345dda4ac10c18"
  },
  {
    author: {
      name: "Akira Torishima",
      photo: "https://this-person-does-not-exist.com/img/avatar-gen1d83cce06b8b962d11071e999b2dcbe0.jpg"
    },
    price: 5,
    duration: 30,
    likes: 0,
    hashtags: ["#gastronomia", "#streetfood", "#tacos"],
    activities: [],
    comments: [],
    city: "Mexico City",
    cityId: "6717e832a0345dda4ac10c18"
  },
];

try {
  await Itinerary.insertMany(itineraries);
  console.log("Itinerarios para Toronto creados exitosamente");
} catch (error) {
  console.error("Error al crear los itinerarios:", error);
}
