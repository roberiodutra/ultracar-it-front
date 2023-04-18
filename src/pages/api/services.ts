import type { NextApiRequest, NextApiResponse } from 'next';

type servicesData = {
  name: string;
  category: string;
  price?: string;
};

type Data = {
  id: number;
  services: servicesData[];
  status: string;
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
      services: [
        { name: 'Troca de óleo', category: 'Mechanics', price: '' },
        { name: 'Revisão', category: 'Eletric', price: '' },
      ],
      status: 'Finished',
      start_date: '2018-05-05T11:50:55',
      end_date: '2018-05-05T14:50:55',
    },
    {
      id: 2,
      services: [{ name: 'Alinhamento', category: 'Mechanics', price: '' }],
      status: 'Canceled',
      start_date: '2018-05-05T11:50:55',
      end_date: '2018-05-05T14:50:55',
    },
    {
      id: 3,
      services: [
        { name: 'Balanceamento', category: 'Mechanics', price: '' },
        { name: 'Reparação', category: 'Eletric', price: '' },
        { name: 'Troca de peça', category: 'Eletric', price: '50.00' },
      ],
      status: 'Ongoing',
    },
  ];

  res.status(200).json(servicesMock);
}
