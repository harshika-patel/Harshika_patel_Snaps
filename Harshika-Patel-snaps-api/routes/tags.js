import express, { json } from 'express';
import fs from 'fs';


const router = express.Router();

const getTags = () => {
    const data = fs.readFileSync('./data/tags.json');
    return JSON.parse(data);
}

router.get("/", (req, res) => {
        const tags = getTags();
        res.send(tags);
        console.error(error);
    
});

export default router;