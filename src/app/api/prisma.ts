import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

prisma.$use(async (params, next) => {
  const result = await next(params);
  if (result && Array.isArray(result)) {
    result.forEach((item) => {
      if (item.price) {
        item.price = item.price.toString();
      }
    });
    return result;
  } else {
    if (result.price) {
      result.price = result.price.toString();
    }
    return result;
  }
});
