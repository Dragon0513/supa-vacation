// Import the generated Prisma client
import { PrismaClient } from '@prisma/client'

// Instantiate it
const prisma = new PrismaClient()

const serialize = (data) => {
  return JSON.parse(JSON.stringify(data));
}

export {
  prisma,
  serialize
}