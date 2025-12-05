import { prisma } from '../prismaClient.js';

export async function createPost(req, res) {
    try {
        const { title, content, status, published } = req.body;

        if (!title || !content) {
            return res.status(400).send("Missing required fields");
        }

        const newPost = await prisma.Post.create({
            data: {
                title,
                content,
                status,
                published: Boolean(published) 
            },
        });

        res.status(201).send("Post created!").json(newPost);
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).send("Internal Server Error");
    }
}
