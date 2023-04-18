import Image from 'next/image';
import Link from 'next/link';

export default function DashboardHeader() {
  return (
    <div className='bg-slate-500 h-50 flex justify-between p-2'>
      <div>
        <Image
          src='/menux.png'
          alt='Ultracar dashboard menu'
          width={50}
          height={50}
          priority
        />
      </div>
      <div>
        <Link href={'/'}>
          <Image
            src='/small-logo.png'
            alt='Ultracar Small Logo'
            width={50}
            height={50}
            priority
          />
        </Link>
      </div>
      <div className='h-5'>
        <Image
          src='/femaleProfile.png'
          alt='Female customer perfil'
          width={50}
          height={50}
          priority
        />
      </div>
    </div>
  );
}
