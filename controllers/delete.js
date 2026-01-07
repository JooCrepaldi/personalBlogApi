import { prisma } from './prismaClient.js';

export async function deletePost (req, res){
    try{
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ error: 'Post ID is required' });
        }

        const deletedPost = await prisma.post.delete({ where: { id: Number(id) } });

        res.status(200).json({ message: 'Post deleted successfully', post: deletedPost });
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error' });
    }
}