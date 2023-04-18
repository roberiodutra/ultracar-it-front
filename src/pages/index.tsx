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
    <main className='flex min-h-screen flex-col items-center justify-between p-2'>
      <Head>
        <title>Ultracar IT Front</title>
      </Head>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <a
          className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
          href='/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Image
            src='/big-logo.png'
            alt='Ultracar Big Logo'
            width={100}
            height={24}
            priority
          />
          <span>text</span>
        </a>
      </div>
    </main>
  );
}
