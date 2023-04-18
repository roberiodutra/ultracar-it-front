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
  const res = await fetch('http://localhost:3000/api/services');
  const data = await res.json();
  return {
    props: {
      data: data.filter(
        (elem: serviceData) => elem.id === Number(context.query.id),
      ),
    },
  };
};
