import Image from 'next/image';

export default function DashboardServices() {
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
        <span>text</span>
      </div>
      <div>
        <Image
          src='/small-logo.png'
          alt='Ultracar Small Logo'
          width={50}
          height={50}
          priority
        />
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
