import { serviceData } from '@/pages/api/services';

type PageProps = {
  data: serviceData[];
};

export default function DashboardServices({ data }: PageProps) {
  return (
    <main className='w-full bg-slate-800 p-8 flex justify-center items-center'>
      <div className='w-96 bg-slate-300 flex flex-col items-center p-2 rounded-xl'>
        <h1 className='md:text-lg font-semibold text-slate-800'>
          {`Joana's services`}
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
              <th
                scope='col'
                className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-500'>
            {data?.map((ele: any) =>
              ele.services.map((services: any, index: number) => (
                <tr key={index}>
                  <td className='px-6 py-4 text-sm font-semibold text-gray-700 whitespace-nowrap'>
                    {services.name}
                  </td>
                  <td className='px-6 py-4 text-sm font-semibold text-gray-700 whitespace-nowrap'>
                    {`R$ ${services.price || '--'}`}
                  </td>
                  <td className='px-6 py-4 text-sm font-semibold text-gray-700 whitespace-nowrap'>
                    {ele.Status}
                  </td>
                </tr>
              )),
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
