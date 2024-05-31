import mongoose from "mongoose";
import { Post } from "../models/post.js"

export const getPost = async (req, res) => {
    try {
        const post = await Post.find()
        res.status(200).json(post);
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

export const createPost = async (req, res) => {
    try {
        const { title, message, selectedFile, creator, tags } = req.body;
        const newPost = await Post.create({
            title,
            message,
            selectedFile,
            creator,
            tags
        })
        return res.status(200).json({
            success: true,
            message: 'Post created successfully',
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, message, creator, selectedFile } = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: `No post with id ${id}`,
            });
        }
        const updatedPost = { creator, title, message, selectedFile, _id: id };
        await Post.findByIdAndUpdate(id, updatedPost, { new: true })
        return res.status(200).json({
            success: true,
            message: 'Post updated successfully',
            updatedPost
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: `No post with id ${id}`,
            });
        }
        await Post.findByIdAndDelete(id)
        return res.status(200).json({
            success: true,
            message: 'Post deleted successfully',
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}

export const likePost = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: `No post with id ${id}`,
            });
        }
        const post = await Post.findById(id);
        const updatedPost = await Post.findByIdAndUpdate(id, {
            likeCount: post.likeCount + 1
        }, { new: true })
        return res.status(200).json({
            success: true,
            message: 'Liked successfully',
            updatedPost
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: error.message,
        });
    }
}



