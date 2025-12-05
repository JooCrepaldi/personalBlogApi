import { prisma } from '../prismaClient.js';

export async function updatePost(req, res) {
    try {
        const { id } = req.params;

        const { title, content, status, published } = req.body;

        const updatedPost = await prisma.Post.update({
            where: { id: Number(id) },
            data: {
                title,
                content,
                status,
                published
            },
        });

        if (!updatedPost) {
            return res.status(404).send("Post not found");
        }

        res.status(200).json(updatedPost);
    } catch (error) {
        console.error("Error updating post:", error);
        res.status(500).send("Internal Server Error");
    }
}
