import TechnicianSelect from '@/components/technicianSelect';
import Image from 'next/image';
import Link from 'next/link';

export default function TechSelect() {
  return (
    <main>
      <div className='screen-full'></div>
      <div className='drop-shadow-xl'>
        <Image
          src='/big-logo.png'
          alt='Ultracar Big Logo'
          width={1024}
          height={0}
          priority
        />
      </div>
      <div className='mt-2 drop-shadow-xl'>
        <Image
          src='/bg.jpg'
          alt='Footer Home Background'
          width={1024}
          height={0}
          priority
        />
      </div>
      <div className='animate qrcode-screen'>
        <Link className='text-blue-800 button-close-qrcode-screen' href='/'>
          X
        </Link>
        <TechnicianSelect />
      </div>
    </main>
  );
}
