import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: number;
  name: string;
  status: string;
  category: string;
  start_date?: string;
  end_date?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>,
) {
  const servicesMock = [
    {
      id: 1,
      name: 'Troca de óleo',
      status: 'Finished',
      category: 'Mechanics',
      start_date: '2018-05-05T11:50:55',
      end_date: '2018-05-05T14:50:55',
    },
    {
      id: 2,
      name: 'Revisão',
      status: 'Finished',
      category: 'Eletric',
      start_date: '2018-05-05T11:50:55',
      end_date: '2018-05-05T14:50:55',
    },
    {
      id: 3,
      name: 'Alinhamento',
      status: 'Canceled',
      category: 'Mechanics',
      start_date: '2018-05-05T11:50:55',
      end_date: '2018-05-05T14:50:55',
    },
    {
      id: 4,
      name: 'Balanceamento',
      status: 'Ongoing',
      category: 'Mechanics',
    },
    {
      id: 5,
      name: 'Reparação',
      status: 'Ongoing',
      category: 'Eletric',
    },
    {
      id: 6,
      name: 'Troca de peça',
      status: 'Ongoing',
      category: 'Eletric',
    },
  ];

  res.status(200).json(servicesMock);
}
