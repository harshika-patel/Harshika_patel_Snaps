import express from 'express';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
const router = express.Router();

const getPhotos = () => {
    const data = fs.readFileSync('./data/photos.json');
    return JSON.parse(data);
}

const savePhotos = (photos) => {
    fs.writeFileSync('./data/photos.json', JSON.stringify(photos, null, 2), 'utf8');
};



router.get("/", (req, res) => {
    try{
    const photos = getPhotos();
    photos.forEach(photo => {
        photo.photo = `http://localhost:8080/images/${path.basename(photo.photo)}`;
    });
    res.send(photos);}
    catch (error) {
        res.status(500).json({ error: "Failed to load photos" });
      }
});

router.get("/:id", (req, res) => {
    try{
    const photos = getPhotos();
    const photo = photos.find(p => p.id === req.params.id);
    if (!photo) return res.status(404).json({ error: "Photo not found" });
    photo.photo = `http://localhost:8080/images/${path.basename(photo.photo)}`;
    res.json(photo);
    }
    catch (error) {
        res.status(500).json({ error: "Failed to load photo" });
      }
  });

  router.get("/:id/comments", (req, res) => {
    try {
        const photos = getPhotos();
        const photo = photos.find(p => p.id === req.params.id);
        if (!photo) return res.status(404).json({ error: "Photo not found" });
        res.json(photo.comments || []);
    } catch (error) {
        res.status(500).json({ error: "Failed to load comments" });
    }
});
router.post('/:id/comments', (req, res) => {
    const { name,comment } = req.body;
    if (!name || !comment) return res.status(400).json({ message: "Comment text is required" });

    const photos = getPhotos();
    const photo = photos.find(p => p.id === req.params.id);
    if (!photo) return res.status(404).json({ message: "Photo not found" });

    const newComment =
     { id: uuidv4(), 
        name,
        comment, 
        timestamp: new Date() 
    };
    if (!photo.comments) photo.comments = [];
    photo.comments.unshift(newComment);

    savePhotos(photos);
    res.status(201).json(newComment);
});
export default router;