import Image from 'next/image';

export default function ReadQrCode() {
  return (
    <div className='bg-slate-200 flex flex-col items-center p-2 rounded-xl'>
      <h3 className='md:text-xl font-bold text-slate-800'>LER QR CODE</h3>
      <div className='drop-shadow-xl mt-2'>
        <Image
          src='/scanner.jpg'
          alt='QRcode Scanner'
          width={500}
          height={0}
          priority
        />
      </div>
    </div>
  );
}
