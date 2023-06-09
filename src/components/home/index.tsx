import Image from 'next/image';
import { useState } from 'react';
import ReadQrCode from '../readQrCode';
import SearchScreen from '../searchScreen';

export default function HomePage() {
  const [hideQrCodeScreen, setHideQrCodeScreen] = useState(true);
  const [hideSearchScreen, setHideSearchScreen] = useState(true);

  return (
    <div className='flex min-h-screen flex-col items-center p-2'>
      <div
        className={`
          ${hideQrCodeScreen ?? 'hide-qrcode-screen'} ${
          hideSearchScreen ?? 'hide-search-screen'
        } ${!hideQrCodeScreen || !hideSearchScreen ? 'screen-full' : ''}
        }`}
      ></div>
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
        <button
          className='opacity-75 m-2 w-80 bg-indigo-400 hover:bg-blue-400 text-slate-900 font-bold py-2 px-20 border-b-4 border-slate-600 hover:border-blue-500 rounded'
          onClick={() => setHideSearchScreen((prev) => !prev)}
        >
          BUSCAR CLIENTE
        </button>
        <button
          className='opacity-75 m-2 w-80 bg-blue-400 hover:bg-indigo-400 text-slate-900 font-bold py-2 px-20 border-b-4 border-slate-600 hover:border-blue-500 rounded'
          onClick={() => setHideQrCodeScreen((prev) => !prev)}
        >
          REALIZAR SERVIÇO
        </button>
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
      <div
        className={
          hideQrCodeScreen ? 'hide-qrcode-screen' : 'animate qrcode-screen'
        }
      >
        <button
          className='text-blue-800 button-close-qrcode-screen'
          type='button'
          onClick={() => setHideQrCodeScreen((prev) => !prev)}
        >
          X
        </button>
        <ReadQrCode />
      </div>
      <div
        className={
          hideSearchScreen ? 'hide-search-screen' : 'animate search-screen'
        }
      >
        <button
          className='text-blue-800 button-close-search-screen'
          type='button'
          onClick={() => setHideSearchScreen((prev) => !prev)}
        >
          X
        </button>
        <SearchScreen />
      </div>
    </div>
  );
}
