import { serviceData } from '@/pages/api/services';
import Link from 'next/link';
import { useEffect, useState } from 'react';

type PageProps = {
  data: serviceData[];
};

export default function Services({ data }: PageProps) {
  const startDate = new Date(data[0].start_date ?? Date.now());
  const endDate = new Date(data[0].end_date ?? '');
  const [totalServicePrice, setTotalPrice] = useState(0);
  const [totalServiceDuration, setServiceDuration] = useState(0);

  useEffect(() => {
    const servicesDuration = {
      'Troca de óleo': 1,
      'Revisão': 2,
      'Alinhamento': 1,
      'Balanceamento': 1,
      'Reparação': 3,
      'Troca de peça': 2,
    } as any;

    let totalPrice = 0;
    let duration = 4;

    if (data) {
      data[0].services.forEach((service) => {
        totalPrice += Number(service.price);
        duration += Number(servicesDuration[service.name]);
      });
    }
    setServiceDuration(duration);
    setTotalPrice(totalPrice);
  }, [data]);

  return (
    <main className='w-full bg-slate-800 h-screen flex justify-center items-center'>
      <div className='w-80 bg-slate-300 flex flex-col items-center p-2 rounded-xl'>
        <h1 className='md:text-lg font-semibold text-slate-800'>
          NOTA DE SERVIÇO
        </h1>
        <table className='w-full m-5 border shadow rounded-lg divide-y divide-gray-500'>
          <thead className='bg-gray-50'>
            <tr>
              <th
                scope='col'
                className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
              >
                Nome
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
              >
                Valor
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-500'>
            {data[0]?.services.map((service, index) => (
              <tr key={index}>
                <td className='px-6 py-4 text-sm font-semibold text-gray-700 whitespace-nowrap'>
                  {service.name}
                </td>
                <td className='px-6 py-4 text-sm font-semibold text-gray-700 whitespace-nowrap'>
                  {`R$ ${service.price || '--'}`}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className='px-5 w-full text-center py-2 font-medium text-base shadow bg-slate-300 text-blue-400'>
          {`INICIADO DIA ${startDate.toLocaleDateString(
            'pt-BR',
          )} ÀS ${startDate.getHours()}h`}
        </p>
        <p className='my-2 w-full text-center px-5 py-2 font-medium text-base shadow bg-slate-300 text-blue-400'>
          {data[0].end_date
            ? `FINALIZADO EM ${endDate.toLocaleDateString(
                'pt-BR',
              )} ÀS ${endDate.getHours()}h`
            : `DURAÇÃO DO SERVIÇO ${totalServiceDuration}h`}
        </p>
        <p className='my-2 p-5 w-full text-center font-bold text-xl bg-blue-300 text-slate-500 shadow'>
          {`VALOR R$ ${totalServicePrice > 0 ? totalServicePrice : '--'}`}
        </p>
      </div>
      <div className='animate qrcode-screen right-0'>
        <Link className='text-blue-800 button-close-qrcode-screen' href='/'>
          X
        </Link>
      </div>
    </main>
  );
}
