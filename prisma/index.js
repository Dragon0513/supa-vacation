// Import the generated Prisma client
import { PrismaClient } from '@prisma/client'
import { createClient } from '@supabase/supabase-js'

// Instantiate it
const prisma = global.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

const supabase = global.supabase || createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
);

if (process.env.NODE_ENV !== 'production') {
  global.supabase = supabase;
}

const serialize = (data) => {
  return JSON.parse(JSON.stringify(data));
}

export {
  prisma,
  serialize,
  supabase
}