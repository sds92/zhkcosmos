// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { fakeData } from 'data/fakeData';

type Data = typeof fakeData;

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { id } = req.query;
  const apartment = fakeData.find((item) => item.id.toString() === id.toString())
  res.status(200).json({ apartment });
}
