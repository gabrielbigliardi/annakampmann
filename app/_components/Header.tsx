// 'use client'
import { Menu, X } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link';

export default function Header() {

  return (
    <nav className='shadow'>
      <input type="checkbox" id='sidebar-active' />

      <Image
        src={'/logo_header.png'}
        alt='Anna Kampmann Logo'
        width={225}
        height={45}
      />
      <label htmlFor="sidebar-active" className='open-sidebar-button'>
        <Menu />
      </label>
      <div className="links-container">
        <label htmlFor="sidebar-active" className='close-sidebar-button'>
          <X />
        </label>

        <span>MENU</span>
        <Link href={'/'}>Início</Link>
        <Link href={'/sobre'}>Sobre</Link>
        <Link href={'/clinica'}>Clínica</Link>
        <Link href={'/procedimentos'}>Procedimentos</Link>
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
