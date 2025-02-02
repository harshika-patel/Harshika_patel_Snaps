import express from 'express';
import tagsRoutes from './routes/tags.js';
import photosRoutes from './routes/photos.js';  
import dotenv from 'dotenv';
import cors from "cors";
dotenv.config();


const app = express();

app.use(cors()); 
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.use('/tags', tagsRoutes);
app.use('/photos', photosRoutes);
app.use("/images",express.static("public/images"));
app.get('/', (req, res) => {
    // send some text back as a response
    res.send('Express is running!');
});
// start Express on port 8080
app.listen(PORT, () => {
    console.log('Server Started on http://localhost:8080');
    console.log('Press CTRL + C to stop server');
});