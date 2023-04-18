import Link from 'next/link';

export default function SearchScreen() {
  return (
    <div className='bg-slate-200 flex flex-col items-center p-2 rounded-xl'>
      <h3 className='md:text-xl font-semibold text-slate-800'>
        DIGITE O CPF DO CLIENTE
      </h3>
      <div className='drop-shadow-xl w-80 mt-2'>
        <form>
          <label
            htmlFor='default-search'
            className='mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white'
          >
            Buscar
          </label>
          <div className='relative'>
            <input
              type='search'
              placeholder='ex: 123'
              className='block w-full p-4 pl-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
              required
            />
            <Link
              href={'/customer'}
              className='text-white absolute right-2.5 bottom-2.5 bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-500 dark:hover:bg-blue-500 dark:focus:ring-blue-600'
            >
              Buscar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
