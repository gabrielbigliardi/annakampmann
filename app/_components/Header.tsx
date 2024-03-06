'use client'
import { Menu, X } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';

export default function Header() {

  const [showNav, setShowNav] = useState(false)

  return (
    <header className='block z-30'>

      <div className='flex justify-between items-center px-10 h-16 shadow 
      xl:px-36 2xl:text-[1.1rem]
      2xl:px-52'>
        <Image
          src={'/logo_header.png'}
          alt='Anna Kampmann'
          width={225}
          height={45}
        />

        <Menu
          className='text-text cursor-pointer lg:hidden'
          onClick={() => setShowNav(!showNav)}
        />

        <nav className='hidden lg:flex items-center gap-9 text-text '>
          <Link href={'/'} className=''>Início</Link>
          <Link href={'/about'} className=''>Sobre</Link>
          <Link href={'/clinic'} className=''>Clínica</Link>
          <Link href={'procedures'} className=''>Procedimentos</Link>
          <button className='bg-text text-white rounded-full px-8 py-2'>Agende Atendimento</button>
        </nav>
      </div>


      <nav className={`menu z-30 ${showNav ? 'menu-show' : ''} `}>

        <X className='absolute right-11 top-5 cursor-pointer' onClick={() => setShowNav(!showNav)} />

        <div className='flex flex-col mt-10 items-center text-center gap-10'>

          <span className=''>MENU</span>

          <div className='flex flex-col gap-5'>
            <Link href={'/'} className=''>Início</Link>
            <Link href={'/about'} className=''>Sobre</Link>
            <Link href={'/clinic'} className=''>Clínica</Link>
            <Link href={'procedures'} className=''>Procedimentos</Link>
          </div>

          <Image
            src={'/logo_footer.png'}
            alt='Anna Kampmann Logo'
            width={176}
            height={171}
            className='opacity-10'
          // fill
          // style={{ objectFit: "cover" }}
          ></Image>

          <button
            className='bg-text text-white rounded-full px-16 py-3'
          >Agende atendimento</button>

        </div>

      </nav>

    </header>
  )
}
