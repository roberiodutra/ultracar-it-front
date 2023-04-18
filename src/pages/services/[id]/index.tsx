import Services from '@/components/services';
import { serviceData } from '@/pages/api/services';
import { GetServerSideProps } from 'next';

type PageProps = {
  data: serviceData[];
};

export default function ServicesId({ data }: PageProps) {
  return <Services data={data} />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = [
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
  return {
    props: {
      data: data.filter(
        (elem: serviceData) => elem.id === Number(context.query.id),
      ),
    },
  };
};
