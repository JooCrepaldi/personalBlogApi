import { prisma } from './prismaClient.js';

export async function updatePost(req, res) {
    try {
        const { id } = req.params;
        const { title, content, published } = req.body;

        if (!id) {
            return res.status(400).json({ error: 'Post ID is required' });
        }

        const uptadatedPost = await prisma.post.update({
            where: { id: Number(id) },
            data: {
                title,
                content,
                published
            },
        });
        
        res.status(200).json(uptadatedPost);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}