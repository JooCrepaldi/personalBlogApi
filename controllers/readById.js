import { prisma } from './prismaClient.js';

export async function readByIdPost(req, res) {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: 'Post ID is required' });
        }
        const post = await prisma.post.findUnique({
            where: { id: Number(id) },
        });

        res.status(200).json(post);

        if (!post) {
            return res.status(404).json({ error: 'Post not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}