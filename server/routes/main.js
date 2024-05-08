const express = require('express');
const router = express.Router();
const post = require('../models/Post')


router.get('', async (req, res) => {
    const locals = {
        title: "movbuzz",
        description: "A blog about latest movies and tv shows"
    }
    try {
        const data = await post.find();
        res.render('index', { locals, data });

    }
    catch (error) {
        console.log(error);
    }


})


// function insertPostData() {
//     post.insertMany([
//         {
//             title: "Checking In: A Guide to Hotel Reviews and Recommendations for Discerning Travelers",
//             body: "Selecting the perfect hotel is a crucial aspect of any travel experience. It serves as a home away from home, a sanctuary where weary travelers can rest, recharge, and create lasting memories. In today"
//         },
//         {
//             title: "Checking In: A Guide to Hotel Reviews and Recommendations for Discerning Travelers",
//             body: "Selecting the perfect hotel is a crucial aspect of any travel experience. It serves as a home away from home, a sanctuary where weary travelers can rest, recharge, and create lasting memories. In today"
//         },
//         {
//             title: "Checking In: A Guide to Hotel Reviews and Recommendations for Discerning Travelers",
//             body: "Selecting the perfect hotel is a crucial aspect of any travel experience. It serves as a home away from home, a sanctuary where weary travelers can rest, recharge, and create lasting memories. In today"
//         },
//         {
//             title: "Checking In: A Guide to Hotel Reviews and Recommendations for Discerning Travelers",
//             body: "Selecting the perfect hotel is a crucial aspect of any travel experience. It serves as a home away from home, a sanctuary where weary travelers can rest, recharge, and create lasting memories. In today"
//         },
//         {
//             title: "Checking In: A Guide to Hotel Reviews and Recommendations for Discerning Travelers",
//             body: "Selecting the perfect hotel is a crucial aspect of any travel experience. It serves as a home away from home, a sanctuary where weary travelers can rest, recharge, and create lasting memories. In today"
//         },
//         {
//             title: "Checking In: A Guide to Hotel Reviews and Recommendations for Discerning Travelers",
//             body: "Selecting the perfect hotel is a crucial aspect of any travel experience. It serves as a home away from home, a sanctuary where weary travelers can rest, recharge, and create lasting memories. In today"
//         }
//     ])
// }



// insertPostData();










router.get('/about', (req, res) => {
    res.render('about');
})

module.exports = router;