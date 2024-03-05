'use client'
import { Menu, X } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';

export default function Header() {

  const [showNav, setShowNav] = useState(false)

  return (
    <header className='z-20'>

      <div className='flex justify-between items-center h-16 px-11 shadow'>
        <Image
          src={'/logo_header.png'}
          alt='Anna Kampmann'
          width={225}
          height={45}
        />
        <Menu
          className='text-text cursor-pointer'
          onClick={() => setShowNav(!showNav)}
        />
      </div>

      <nav className={`menu z-30 ${showNav ? 'menu-show' : ''}`}>

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
