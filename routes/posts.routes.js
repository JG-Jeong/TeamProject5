// routes/posts.routes.js
const express = require('express');
const router = express.Router();

const PostsController = require('../controllers/posts.controller');
const postsController = new PostsController();

router.get('/', postsController.getPosts);  // 게시글 검색 싹다

//게시글 포스팅
router.post('/', postsController.createPost);

module.exports = router;