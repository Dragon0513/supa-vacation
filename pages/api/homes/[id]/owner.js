import { prisma } from "@/prisma/index";

export default async function handler(req, res) {
  // Get the home's onwer
  if (req.method === 'GET') {
    try {
      const { id } = req.query;
      const { User } = await prisma.home.findUnique({
        where: { id },
        select: { User: true },
      });
      console.log(User)
      res.status(200).json(User);
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
  // HTTP method not supported!
  else {
    res.setHeader('Allow', ['GET']);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
