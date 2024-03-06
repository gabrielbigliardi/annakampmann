import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <section className=''>
            <div className='h-screen w-screen'>

                <div className='gradient '>
                </div>
                <Image
                    src={'/anna_hero_2.png'}
                    alt='Anna Kampmann'
                    fill
                    // sizes='(min-width: 768px) 100vw, (min-width: 1024px) 50px'
                    // objectFit='(min-width: 768px) cover, (min-width: 1024px) contain'
                    objectFit='cover'
                    className='hero-photo-mobile'
                />
                <Image
                    src={'/anna_hero_2.png'}
                    alt='Anna Kampmann'
                    fill
                    // sizes='(min-width: 768px) 100vw, (min-width: 1024px) 50px'
                    // objectFit='(min-width: 768px) cover, (min-width: 1024px) contain'
                    objectFit='contain'
                    className='hero-photo-desktop'
                />
            </div>

            <div>
                <div className=" hero-text">

                    <h1 className="h1">Dra. Anna Kampmann</h1>
                    <h2 className="description">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos obcaecati laudantium asperiores molestias necessitatibus alias provident.
                    </h2>

                </div>
            </div>
        </section>
    )
}
