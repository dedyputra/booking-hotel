'use client';

import { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import clsx from 'clsx';

const Navlink = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <>
        <button
          onClick={() => setOpen(!open)}
          className="inline-flex items-center p-2 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100"
        >
          {!open ? (
            <IoMenu className="size-8" />
          ) : (
            <IoClose className="size-8" />
          )}
        </button>

        {/* Menu */}
      </>
    </div>
  );
};

export default Navlink;
