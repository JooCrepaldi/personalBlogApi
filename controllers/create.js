import { prisma } from './prismaClient.js';

export async function createPost(req, res) {
    try {
        const { title, content, published } = req.body;

        const newPost = await prisma.post.create({
            data: {
                title,
                content,
                published
            },
        });

        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}