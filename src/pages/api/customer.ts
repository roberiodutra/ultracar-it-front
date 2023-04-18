import type { NextApiRequest, NextApiResponse } from 'next';

export type customerData = {
  name: string;
  id: string;
  carId: number[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<customerData>,
) {
  const customerMock = {
    id: '123',
    name: 'Joana',
    carId: [1, 2],
  };

  res.status(200).json(customerMock);
}
