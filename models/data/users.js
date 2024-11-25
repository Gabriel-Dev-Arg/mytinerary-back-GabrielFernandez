//DATOS DEL SERVIDOR
import "dotenv/config.js"
//DATA DE MONGO
import "../../config/database.js"
import User from "../User.js";

const users = [
    {
        firstName: "Juan",
        lastName: "Pérez",
        email: "juan.perez@gmail.com",
        password: "hashedPassword123",
        photo: "https://randomuser.me/api/portraits/men/1.jpg",
        country: "Argentina",
        online: false
    },
    {
        firstName: "María",
        lastName: "González",
        email: "maria.gonzalez@gmail.com",
        password: "hashedPassword456",
        photo: "https://randomuser.me/api/portraits/women/1.jpg",
        country: "México",
        online: false
    },
    {
        firstName: "Carlos",
        lastName: "Rodríguez",
        email: "carlos.rodriguez@gmail.com",
        password: "hashedPassword789",
        photo: "https://randomuser.me/api/portraits/men/2.jpg",
        country: "España",
        online: false
    },
    {
        firstName: "Ana",
        lastName: "Martínez",
        email: "ana.martinez@gmail.com",
        password: "hashedPassword101",
        photo: "https://randomuser.me/api/portraits/women/2.jpg",
        country: "Colombia",
        online: false
    },
    {
        firstName: "Luis",
        lastName: "Sánchez",
        email: "luis.sanchez@gmail.com",
        password: "hashedPassword102",
        photo: "https://randomuser.me/api/portraits/men/3.jpg",
        country: "Chile",
        online: false
    },
    {
        firstName: "Laura",
        lastName: "López",
        email: "laura.lopez@gmail.com",
        password: "hashedPassword103",
        photo: "https://randomuser.me/api/portraits/women/3.jpg",
        country: "Perú",
        online: false
    },
    {
        firstName: "Diego",
        lastName: "Torres",
        email: "diego.torres@gmail.com",
        password: "hashedPassword104",
        photo: "https://randomuser.me/api/portraits/men/4.jpg",
        country: "Uruguay",
        online: false
    },
    {
        firstName: "Sofía",
        lastName: "Ramírez",
        email: "sofia.ramirez@gmail.com",
        password: "hashedPassword105",
        photo: "https://randomuser.me/api/portraits/women/4.jpg",
        country: "Ecuador",
        online: false
    },
    {
        firstName: "Gabriel",
        lastName: "Morales",
        email: "gabriel.morales@gmail.com",
        password: "hashedPassword106",
        photo: "https://randomuser.me/api/portraits/men/5.jpg",
        country: "Brasil",
        online: false
    },
    {
        firstName: "Valentina",
        lastName: "Castro",
        email: "valentina.castro@gmail.com",
        password: "hashedPassword107",
        photo: "https://randomuser.me/api/portraits/women/5.jpg",
        country: "Paraguay",
        online: false
    }
];
User.insertMany(users)