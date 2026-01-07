import { prisma } from './prismaClient.js';

export async function readPosts(req, res) {
    try {
        const posts = await prisma.post.findMany();
        res.status(200).json(posts);

        if (!posts) {
            return res.status(404).json({ error: 'No posts found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}