import { prisma } from '../prismaClient.js';

export async function readAllPost(req, res) {
    try {
        const posts = await prisma.Post.findMany();

        if (!posts) {
            return res.status(404).send("No posts found");
        }

        res.status(200).json(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        res.status(500).send("Internal Server Error");
    }
}