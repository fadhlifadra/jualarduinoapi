const express = require('express');
const Post = require('../models/Post');
const router = express.Router();


//get all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts);
        console.log(posts);
    } catch (err) {
        res.send({ message: err });
    }
});

//submit post
router.post('/', async (req, res) => {
    const post = new Post({
        link: req.body.link,
        nama: req.body.nama,
        deskripsi: req.body.deskripsi,
        harga: req.body.harga
    });
    try {
        const savedPost = await post.save()
        res.json(savedPost);
        console.log(savedPost);
    } catch (err) {
        res.json({ message: err })
    }
});

//specific post
router.get('/:nama', async (req, res) => {
    try {
        const post = await Post.findById(req.params.nama);
        res.json(post);
    } catch (err) {
        res.json({ message: err });
    }
});

//delete specific post
router.delete('/:nama', async (req, res) => {
    try {
        const hapus = await Post.remove({ nama: req.params.nama });
        Post.json({ hapus });
    } catch (err) {
        res.json({ message: err });
    }
});

//update post
router.put('/:nama', async (req, res) => {
    try {
        const edit = await Post.updateOne(
            { nama: req.params.nama },
            { $set: { link: req.body.link, nama: req.body.nama, deskripsi: req.body.deskripsi, harga: req.body.harga } });
        Post.json({ edit });
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;