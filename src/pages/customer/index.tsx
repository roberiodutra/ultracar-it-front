import Dashboard from '@/components/dashboard';
import { serviceData } from '@/pages/api/services';
import { GetServerSideProps } from 'next';

type PageProps = {
  data: serviceData[];
};

export default function CustomerPage({ data }: PageProps) {
  return <Dashboard />;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/customer');
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
