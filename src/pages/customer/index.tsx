import DashboardCars from '@/components/dashboardCars';
import DashboardHeader from '@/components/dashboardHeader';
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
    </main>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const customerResponse = await fetch('http://localhost:3000/api/customer');
  const customerData = await customerResponse.json();

  const carResponse = await fetch('http://localhost:3000/api/car');
  const carsData = await carResponse.json();

  const serviceResponse = await fetch('http://localhost:3000/api/services');
  const servicesData = await serviceResponse.json();

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
