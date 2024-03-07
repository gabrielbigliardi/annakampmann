import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <section className='HERO'>
      <div className='HERO-image-container'>

        <Image
          src={'/anna_hero_2.png'}
          alt='Anna Kampmann'
          fill
          // objectFit='cover'
          className='HERO-photo-mobile'
        />
        <div className='HERO-gradient '></div>

        {/* <Image
          src={'/anna_hero_2.png'}
          alt='Anna Kampmann'
          width={976}
          height={976}
          // fill
          // objectFit='contain'
          className='HERO-photo-desktop'
        /> */}
      </div>

      <div className=" HERO-text">

        <h1 className="h1">Dra. Anna Kampmann</h1>
        <h2 className="description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos obcaecati laudantium asperiores molestias necessitatibus alias provident.
        </h2>

      </div>
    </section>
  )
}
