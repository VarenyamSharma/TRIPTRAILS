"use client";

import { useState } from 'react';
import { NAV_LINKS } from '@/constants';
import Link from 'next/link';
import React from 'react';
import Button from './Button';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
      <Link href="/">
        <h1 className='font-bold text-2xl'>
          TRIP<span className='text-green-500'>TRAILS</span>
        </h1>
      </Link>

      <ul className={`hidden lg:flex h-full gap-12 ${isMenuOpen ? 'flex' : ''}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>

      <div className='lg:flexCenter hidden'>
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

      {isMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white lg:hidden flex flex-col items-center">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
