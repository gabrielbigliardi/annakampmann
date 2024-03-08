'use client'
import { Menu, X } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';

export default function Header() {

  const [isChecked, setIsChecked] = useState(false)

  function closeMenu() {
    //TODO: USAR STATE

    // document.getElementById('sidebar-active')?.checked = false


  }

  return (
    <nav className='shadow'>
      <input type="checkbox" id='sidebar-active' checked={isChecked} />

      <Image
        src={'/logo_header.png'}
        alt='Anna Kampmann Logo'
        width={225}
        height={45}
      />
      <label
        htmlFor="sidebar-active"
        className='open-sidebar-button'
        onClick={() => setIsChecked(true)}
      >
        <Menu />
      </label>

      <div className="links-container">

        <label
          htmlFor="sidebar-active"
          className='close-sidebar-button'
          onClick={() => setIsChecked(false)}
        >
          <X />
        </label>

        <span>MENU</span>
        <Link href={'/'} onClick={() => setIsChecked(false)}>Início</Link>
        <Link href={'/sobre'} onClick={() => setIsChecked(false)}>Sobre</Link>
        <Link href={'/clinica'} onClick={() => setIsChecked(false)}>Clínica</Link>
        <Link href={'/procedimentos'} onClick={() => setIsChecked(false)}>Procedimentos</Link>
        <Link href={'/'} className='nav-schedule-button'>Marque atendimento</Link>

        <Image
          src={'/logo_footer.png'}
          alt='Anna Kampmann Logo'
          width={176}
          height={171}
        />
      </div>
    </nav>
  )
}
