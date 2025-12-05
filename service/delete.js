import { prisma } from '../prismaClient.js';

export async function deletePost(req, res){
    try {
        const { id } = req.params;

        const deletedPost = await prisma.Post.delete({
            where: { id: Number(id) },
        });
        if (!deletedPost) {
            return res.status(404).send("Post not found");
        }
        res.status(204).send("Post deleted successfully");
    } catch (error) {
        console.error("Error deleting post:", error);
        res.status(500).send("Internal Server Error");
    }
}