import { Decoder } from '@nuintun/qrcode';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [data, setData] = useState({});
  const qrcode = new Decoder();

  qrcode
    .scan('http://localhost:3000/qr-code.png')
    .then((result) => {
      setData(result.data);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <main className='flex min-h-screen flex-col items-center p-2'>
      <Head>
        <title>Ultracar IT Front</title>
      </Head>
      <div className='drop-shadow-xl'>
        <Image
          src='/big-logo.png'
          alt='Ultracar Big Logo'
          width={1024}
          height={0}
          priority
        />
      </div>
      <div className='drop-shadow-xl pt-2 text-center sm:max-sm:flex container'>
        <button className='opacity-75 m-2 w-80 bg-indigo-400 hover:bg-blue-400 text-slate-900 font-bold py-2 px-20 border-b-4 border-slate-600 hover:border-blue-500 rounded'>
          BUSCAR CLIENTE
        </button>
        <button className='opacity-75 m-2 w-80 bg-blue-400 hover:bg-indigo-400 text-slate-900 font-bold py-2 px-20 border-b-4 border-slate-600 hover:border-blue-500 rounded'>
          REALIZAR SERVIÇO
        </button>
      </div>
      <div className='mt-2 drop-shadow-xl'>
        <Image
          src='/bg.jpg'
          alt='footer home background'
          width={1024}
          height={0}
          priority
        />
      </div>
    </main>
  );
}
