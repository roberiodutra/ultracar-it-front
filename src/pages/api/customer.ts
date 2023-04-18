import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
  id: string;
  carId: number[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const customerMock = {
    id: '123.456.789.00',
    name: 'Joana',
    carId: [1, 2],
  };

  res.status(200).json(customerMock);
}
