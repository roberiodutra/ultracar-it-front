import { Decoder } from '@nuintun/qrcode';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ReadQrCode() {
  const [data, setData] = useState({});
  const qrcode = new Decoder();

  qrcode
    .scan('http://localhost:3000/qrCode.png')
    .then((result) => {
      setData(result.data);
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div className='bg-slate-200 flex flex-col items-center p-2 rounded-xl'>
      <h3 className='md:text-xl font-bold text-slate-800'>LER QR CODE</h3>
      <div className='drop-shadow-xl mt-2'>
        <Link href={'/techSelect'}>
          <Image
            src='/scanner.jpg'
            alt='QRcode Scanner'
            width={500}
            height={0}
            priority
          />
        </Link>
      </div>
    </div>
  );
}
