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
      title: "Toronto Islands"
    },
    image:"https://www.viajeroscallejeros.com/wp-content/uploads/islas-toronto.jpg",
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
      title: "Beautiful trains"
    },
    image:"https://www.viajeroscallejeros.com/wp-content/uploads/museo-ferrocaril-toronto.jpg",
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
    author: { name: "Noah Evans", 
      photo: "https://i.pravatar.cc/150?img=4",
      title: "Visit Chinatown",
    },
    image: "https://www.viajeroscallejeros.com/wp-content/uploads/chinatown-que-visitar-en-toronto.jpg",
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
      title: "Beautiful Teatro Colón"
    },
    image:"https://respiroviajes.com/wp-content/uploads/2018/01/que-hacer-en-Buenos-Aires-5.jpg",
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
      title: "Japanese Garden in Buenos Aires"
    },
    image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/7a/be/b1/20160330-231611-largejpg.jpg?w=900&h=-1&s=1",
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
      title:"Shopping Trip Palermo Soho"
    },
    image:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/e3/41/52/palermo-soho.jpg?w=900&h=500&s=1",
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
      title: "Views of Cerro de Monserrate"

    },
    image:"https://www.viajeroscallejeros.com/wp-content/uploads/2020/01/vistas-cerro-de-monserrate.jpg",
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
      title: "Callejón del Embudo La Candelaria"

    },
    image:"https://www.viajeroscallejeros.com/wp-content/uploads/2020/01/callejon-del-embudo-la-candelaria.jpg",
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
      title: "delicious food in La Puerta Falsa"

    },
    image:"https://www.viajeroscallejeros.com/wp-content/uploads/2021/01/la-puerta-falsa.jpg",
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
    author: { name: "Ana Souza", 
      photo: "https://i.pravatar.cc/150?img=10",
      title: "Beautiful St. Paul"
    },
    image: "https://elviajerolibre.com/wp-content/uploads/2020/03/Avenida-Paulista-que-ver-731x1024.jpg",
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
      title: "Hermino Park",
    },
    image:"https://elviajerolibre.com/wp-content/uploads/2020/03/Sao-Paulo-Ibirapuera.jpg",
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
      title: "Beautiful St. Paul"
    },
    image:"https://elviajerolibre.com/wp-content/uploads/2020/03/Sao-Paulo-que-ver.jpg",
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
      photo: "https://i.pravatar.cc/150?img=13",
      title:"magical Coliseum"
    },
    image:"https://www.viajeroscallejeros.com/wp-content/uploads/2018/09/coliseo-romano.jpg",
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
      photo: "https://i.pravatar.cc/150?img=16",
      title: "Palatino"
    },
    image:"https://www.viajeroscallejeros.com/wp-content/uploads/palatino-que-ver-en-roma.jpg",
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
      photo: "https://i.pravatar.cc/150?img=14",
      title: "Museos Capitolinos"
    },
    image:"https://www.viajeroscallejeros.com/wp-content/uploads/2020/04/museos-capitolinos.jpg",
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
      photo: "https://i.pravatar.cc/150?img=15",
      title: "Eiffel Tower"
    },
    image:"https://www.viajeroscallejeros.com/wp-content/uploads/monumentos-de-paris-2.jpg",
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
      photo: "https://toppng.com/uploads/preview/homero-11529080096pkfxouaqfu.png",
      title: "Arc de Triomphe"
    },
    image:"https://www.viajeroscallejeros.com/wp-content/uploads/monumentos-de-paris-1.jpg",
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
      photo: "https://i.pravatar.cc/150?img=17",
      title: "La Conciergerie"
    },
    image:"https://www.viajeroscallejeros.com/wp-content/uploads/monumentos-de-paris-4.jpg",
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
      photo: "https://i.pravatar.cc/150?img=25",
      title: "Electronic Neighborhood"
    },
    image:"https://www.viajeroscallejeros.com/wp-content/uploads/akihabara-que-visitar-en-tokio.jpg",
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
      photo: "https://i.pravatar.cc/150?img=35",
      title: "Ueno Park Tokyo"
    },
    image:"https://www.viajeroscallejeros.com/wp-content/uploads/ueno-que-visitar-en-tokio.jpg",
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
      photo: "https://i.pravatar.cc/150?img=38",
      title: "Palacio Imperial"
    },
    image:"https://www.viajeroscallejeros.com/wp-content/uploads/palacio-imperial-tokio.jpg",
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
      photo: "https://i.pravatar.cc/150?img=50",
      title: "Opera House"
    },
    image:"https://comeamaviaja.com/wp-content/uploads/2023/11/la-opera.webp",
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
      photo: "https://i.pravatar.cc/150?img=40",
      title: "The Rocks"
    },
    image:"https://comeamaviaja.com/wp-content/uploads/2023/11/the-rocks.webp",
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
      photo: "https://this-person-does-not-exist.com/img/avatar-gen4be29c8865d838b165a56af0b88a7ab3.jpg",
      title: "beautiful St. Mary's Cathedral in Sydney"
    },
    image:"https://comeamaviaja.com/wp-content/uploads/2023/11/Catedral-de-Santa-Maria.webp",
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
      photo: "https://this-person-does-not-exist.com/img/avatar-gen80b45514e179756196f7b7682ba17bb0.jpg",
      title : "Magical town"
    },
    image:"https://www.mexicodesconocido.com.mx/sites/default/files/fichas-destino/destinos-cerca-df-qro-bernal.png",
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
      photo: "https://i.pravatar.cc/150?img=44",
      title: "architecture"
    },
    image:"https://www.mexicodesconocido.com.mx/wp-content/uploads/2010/05/ciudad-de-mexico-900x417.png",
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
      photo: "https://this-person-does-not-exist.com/img/avatar-gen1d83cce06b8b962d11071e999b2dcbe0.jpg",
      title: "incleible National Museum of Anthropology"
    },
    image: "https://www.mexicodesconocido.com.mx/wp-content/uploads/2010/05/munal-md-900x596.png",
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
  console.log("Itinerarios creados exitosamente");
} catch (error) {
  console.error("Error al crear los itinerarios:", error);
}
