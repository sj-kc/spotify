'use client';

import { useRouter } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';

interface HeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = () => {
    // TODO: Handle logout
  };

  return (
    <div
      className={twMerge(
        'h-fit bg-gradient-to-b from-emerald-800 p-6',
        className
      )}
    >
      <div className='w-full mb-4 flex items-center justify-between'>
        <div className='hidden md:flex gap-x-2 items-center'>
          <button
            className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'
            onClick={() => router.back()}
          >
            <RxCaretLeft className='text-white' size={35} />
          </button>
          <button
            className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'
            onClick={() => router.forward()}
          >
            <RxCaretRight className='text-white' size={35} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
