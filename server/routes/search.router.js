require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');

// router.post('/', async (req, res) => {
//     try {
//         const searchInfo = req.body.q;
//         console.log(searchInfo);
//         //limit to 10 or so?
//         const apiUrl = `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchInfo}`;
//         console.log(apiUrl)
//         const response = await axios.get(apiUrl)
//         res.send(response.data)
//     } catch (error) {
//         console.log(error.response.data);
//        res.sendStatus(500);
//     }
// })

router.get('/:query', async (req, res) => {
    try {
        const searchInfo = req.params.query;
        console.log(searchInfo);
        const apiUrl = `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${searchInfo}`;
        console.log(apiUrl);
        const response = await axios.get(apiUrl);
        res.send(response.data);
    } catch (error) {
        console.log(error.response.data);
        res.sendStatus(500);
    }
});


module.exports = router;
