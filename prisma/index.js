// Import the generated Prisma client
import { PrismaClient } from '@prisma/client'
import { createClient } from '@supabase/supabase-js'

// Instantiate it
const prisma = new PrismaClient()

const serialize = (data) => {
  return JSON.parse(JSON.stringify(data));
}

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

export {
  prisma,
  serialize,
  supabase
}