import type { NextApiRequest, NextApiResponse } from 'next';

export type carsData = {
  id: number;
  name: string;
  color: string;
  year: string;
  servicesId: number[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<carsData[]>,
) {
  const carsMock = [
    {
      id: 1,
      name: 'Gol',
      color: 'Preto',
      year: '2015',
      servicesId: [1, 2, 3, 4, 5, 6],
    },
    {
      id: 2,
      name: 'Uno',
      color: 'Azul',
      year: '2010',
      servicesId: [],
    },
  ];

  res.status(200).json(carsMock);
}
