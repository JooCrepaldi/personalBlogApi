import { readPosts } from "../controllers/readAll.js";
import { readByIdPost } from "../controllers/readById.js";
import { deletePost } from "../controllers/delete.js";
import { updatePost } from "../controllers/update.js";
import { createPost } from "../controllers/create.js";

const functions = {
    readPosts,
    readByIdPost,
    deletePost,
    updatePost,
    createPost
};

export default functions;