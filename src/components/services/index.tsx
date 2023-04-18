export default function Services() {
  return (
    <main className='w-full bg-slate-800 h-screen flex justify-center items-center'>
      <div className='w-80 bg-slate-300 flex flex-col items-center p-2 rounded-xl'>
        <h1 className='md:text-lg font-semibold text-slate-800'>
          NOTA DE SERVIÇO
        </h1>
        <table className='m-5 w-full border shadow rounded-lg divide-y divide-gray-500'>
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
          <tbody className='divide-y divide-blue-500'>
            <tr>
              <td className='px-6 py-4 text-sm font-semibold text-gray-700 whitespace-nowrap'>
                1
              </td>
              <td className='px-6 py-4 text-sm font-semibold text-gray-700 whitespace-nowrap'>
                Jone Doe
              </td>
            </tr>
          </tbody>
        </table>

        <p className='px-5 w-full text-center py-2 font-medium text-base shadow bg-slate-300 text-blue-400'>
          {`INICIADO DIA X ÀS Xh`}
        </p>
        <p className='my-2 w-full text-center px-5 py-2 font-medium text-base shadow bg-slate-300 text-blue-400'>
          {`DURAÇÃO DO SERVIÇO Xh`}
        </p>
        <p className='my-2 p-5 w-full text-center font-bold text-xl bg-blue-300 text-slate-500 shadow'>
          {`VALOR R$ X`}
        </p>
      </div>
    </main>
  );
}
