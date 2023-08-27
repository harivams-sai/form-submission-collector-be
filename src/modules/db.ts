import { PrismaClient } from '@prisma/client';
import { v4 as uuidv4 } from 'uuid';

const db = new PrismaClient({ log: ['query', 'info', 'warn', 'error'] });
export default db;

export const genId = () => uuidv4();
