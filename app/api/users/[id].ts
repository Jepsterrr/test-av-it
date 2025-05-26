import type { NextApiRequest, NextApiResponse } from 'next'

type User = { id: string; name: string }

export default function handler(req: NextApiRequest, res: NextApiResponse<User | { message: string }>) {
  const { id } = req.query
  if (req.method === 'GET') {
    return res.status(200).json({ id: id as string, name: 'Mia Svensson' })
  }
  res.setHeader('Allow', ['GET'])
  res.status(405).json({ message: `Method ${req.method} Not Allowed` })
}