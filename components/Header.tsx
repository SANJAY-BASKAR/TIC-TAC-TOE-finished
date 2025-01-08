
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div className="h-24 w-full absolute bg-transparent top-0 left-0 z-0 ">
      <div className='flex items-center justify-between m-3'>
        <div className='text-2xl font-mono text-purple-400 bg-transparent p-5 z-30 md:cursor-pointer'>
          <button ><Link href='/'>Home</Link></button>
        </div>
        <div className='text-2xl font-mono text-purple-400 bg-transparent p-5 z-30 cursor-pointer'>
          <button ><Link href="/rules">Rules⚡</Link></button>
        </div>
      </div>
      
    </div>
  );
}

export default Header;