import express from "express"; // Express ES6 import
import { promises as fs } from "fs"; // Promisified fs moduli
import path from "path"; // Fayl yo'llarini boshqarish uchun
import { fileURLToPath } from "url"; // Fayl yo'lini olish uchun
import cors from "cors"; // CORS

const app = express();

// CORS ni faollashtirish (barcha so'rovlarga ruxsat berish)
app.use(cors());

// Body parser ishlatish
app.use(express.json());

// Fayl yo'li olish uchun __dirname o'rnini bosuvchi kod (ES6 da bu avtomatik kelmaydi)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// movies.json fayliga yo'l
const moviesFilePath = path.join(__dirname, "public/movies.json");

// Yangi kino qo'shish endpointi
app.post("/save-movie", async (req, res) => {
  const newMovie = req.body;

  try {
    const data = await fs.readFile(moviesFilePath, "utf8");
    let movies = JSON.parse(data);

    newMovie.id = movies.length + 1;
    movies.push(newMovie);

    await fs.writeFile(moviesFilePath, JSON.stringify(movies, null, 2));
    res.status(200).json(newMovie);
  } catch (error) {
    res.status(500).json({ message: "Faylga yozishda xatolik yuz berdi!", error });
  }
});

// Kinoni yangilash uchun PUT marshruti
app.put("/movies/:id", async (req, res) => {
  const movieId = Number(req.params.id);
  const updatedMovie = req.body;

  try {
    // Hozirgi kinolarni yuklash
    const data = await fs.readFile(moviesFilePath, "utf8");
    let movies = JSON.parse(data);

    // Kerakli kinoni topib yangilash
    movies = movies.map(movie => (movie.id === movieId ? updatedMovie : movie));

    // Yangilangan ro'yxatni faylga yozish
    await fs.writeFile(moviesFilePath, JSON.stringify(movies, null, 2));

    res.status(200).json({ message: "Movie updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error updating movie", error });
  }
});


// mavjud ma'lumotni o'chirib yuborish uchun quyidagicha funksiya javob beradi:
// Kinoni o'chirish uchun asinxron marshrut
app.delete("/movies/:id", async (req, res) => {
  const movieId = Number(req.params.id);

  try {
    const data = await fs.readFile(moviesFilePath, "utf8");
    let movies = JSON.parse(data);

    const updatedMovies = movies.filter(movie => movie.id !== movieId);
    await fs.writeFile(moviesFilePath, JSON.stringify(updatedMovies, null, 2));
    res.status(200).json(updatedMovies);
  } catch (error) {
    res.status(500).json({ message: "Error deleting movie", error });
  }
});

// Serverni ishga tushirish
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server ${PORT}-portda ishlamoqda`);
});
