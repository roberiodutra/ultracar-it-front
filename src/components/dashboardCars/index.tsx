import { carsData } from '@/pages/api/car';

type PageProps = {
  data: carsData[];
};

export default function DashboardCars({ data }: PageProps) {
  return (
    <main className='w-full bg-slate-800 p-8 flex justify-center items-center'>
      <div className='w-96 bg-slate-300 flex flex-col items-center p-2 rounded-xl'>
        <h1 className='md:text-lg font-semibold text-slate-800'>{`Joana's Cars`}</h1>
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
                Ano
              </th>
              <th
                scope='col'
                className='px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase '
              >
                Cor
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-500'>
            {data.map((car, index) => (
              <tr key={index}>
                <td className='px-6 py-4 text-sm font-semibold text-gray-700 whitespace-nowrap'>
                  {car.name}
                </td>
                <td className='px-6 py-4 text-sm font-semibold text-gray-700 whitespace-nowrap'>
                  {car.year}
                </td>
                <td className='px-6 py-4 text-sm font-semibold text-gray-700 whitespace-nowrap'>
                  {car.color}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
