import type { NextApiRequest, NextApiResponse } from 'next'

type NewUser = { id: string }

export default function handler(req: NextApiRequest, res: NextApiResponse<NewUser | { message: string }>) {
  if (req.method === 'POST') {
    return res.status(201).json({ id: 'new-user' })
  }
  res.setHeader('Allow', ['POST'])
  res.status(405).json({ message: `Method ${req.method} Not Allowed` })
}