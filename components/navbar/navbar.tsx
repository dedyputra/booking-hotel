import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const navbar = () => {
  return (
    <div className="fixed top-0 w-full bg-white shadow-sm z-20">
      <div className="max-w-screen-xl max-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/">
          <Image src="/logo.png" width={128} height={49} alt="Logo" priority />
        </Link>
      </div>
    </div>
  );
};

export default navbar;
