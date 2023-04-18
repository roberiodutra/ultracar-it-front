import HomePage from '@/components/home';
import { Decoder } from '@nuintun/qrcode';
import Head from 'next/head';
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
    <main>
      <Head>
        <title>Ultracar IT Front</title>
      </Head>
      <HomePage />
    </main>
  );
}
