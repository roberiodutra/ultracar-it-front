import DashboardCars from '@/components/dashboardCars';
import DashboardHeader from '@/components/dashboardHeader';
import DashboardServices from '@/components/dashboardServices';
import { GetServerSideProps } from 'next';
import { carsData } from '../api/car';
import { customerData } from '../api/customer';
import { serviceData } from '../api/services';

type PageProps = {
  data: { customer: customerData; cars: carsData[]; services: serviceData[] };
};

export default function CustomerPage({ data }: PageProps) {
  return (
    <main>
      <DashboardHeader />
      <DashboardCars data={data.cars} />
      <DashboardServices data={data.services} />
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const customerData = {
    id: '123',
    name: 'Joana',
    carId: [1, 2],
  };

  const carsData = [
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

  const servicesData = [
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

  const data = {
    customer: customerData,
    cars: carsData,
    services: servicesData,
  };

  return {
    props: {
      data,
    },
  };
};
