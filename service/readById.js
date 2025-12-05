import { prisma } from '../prismaClient.js';

export async function readByIdPost(req, res) {
    try {
        const { id } = req.params;

        const post = await prisma.post.findUnique({
            where: { id: Number(id) },
        });

        if (!post) {
            return res.status(404).send("Post not found");
        }

        res.status(200).json(post);
    } catch (error) {
        console.error("Error fetching post by ID:", error);
        res.status(500).send("Internal Server Error");
    }
}