import pkg from '../node_modules/@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export { prisma };