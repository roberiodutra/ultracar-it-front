import Link from 'next/link';

export default function TechnicianSelect() {
  return (
    <div className='bg-slate-200 flex flex-col items-center p-2 rounded-xl'>
      <h3 className='md:text-lg pb-3 font-semibold text-slate-800'>
        TÉCNICO QUE REALIZARÁ O SERVIÇO
      </h3>
      <div className='drop-shadow-xl mt-2'>
        <select className='block w-80 bg-blue-200 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline font-bold'>
          <option>John Doe</option>
        </select>
      </div>
      <Link
        href={'/services/3'}
        className='opacity-75 m-4 w-80 text-center bg-blue-400 hover:bg-indigo-400 text-slate-900 font-bold py-2 px-20 border-b-4 border-slate-600 hover:border-blue-500 rounded'
      >
        CONFIRMAR
      </Link>
    </div>
  );
}
