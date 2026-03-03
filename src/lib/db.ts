// 这是一个数据库连接模块，使用了 Prisma ORM 和 PrismaPg 适配器来连接 PostgreSQL 数据库，并且在开发环境中使用全局变量来存储 PrismaClient 实例，以避免热重载导致的多个实例问题。

import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { env } from "./env";

// 采用 PrismaPg 适配器来连接 PostgreSQL 数据库，目的是了更好地支持 PostgreSQL 的特性和优化性能
const adapter = new PrismaPg({
  connectionString: env.DATABASE_URL,
});

// 在开发环境中，使用全局变量来存储 PrismaClient 实例，以避免热重载导致的多个实例问题
// https://www.prisma.io/docs/orm/more/troubleshooting/nextjs#best-practices-for-using-prisma-client-in-development
const globalForPrisma = global as unknown as { prisma: PrismaClient };

const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export { prisma };