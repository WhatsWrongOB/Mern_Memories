import express from 'express'
import { getPost, updatePost, createPost, deletePost, likePost } from '../controllers/post.js';

export const postRouter = express.Router();

postRouter.get('/', getPost)
postRouter.post('/', createPost)
postRouter.patch('/edit/:id', updatePost)
postRouter.post('/like/:id', likePost)
postRouter.delete('/delete/:id', deletePost)