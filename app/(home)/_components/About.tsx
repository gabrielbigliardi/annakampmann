import React from 'react'
import Image from "next/image";
import Link from 'next/link';

export default function About() {
    return (
        <section className='bg-boxes mb-96 lg:mb-10'>
            <div className='about'>
                <div className='relative w-screen h-[250px] about-1 '>
                    <Image
                        src="/about_1.jpg"
                        alt="Anna Service"
                        fill
                        objectFit='cover'
                        className='mt-[100px]'
                    />
                    <Image
                        src={'/dots.png'}
                        alt='Dots'
                        width={176}
                        height={176}
                        className='dots-1'
                    />
                </div>

                <div className='about-images-desktop-container'>
                    <Image
                        src={'/about-images-desktop.png'}
                        alt='About Anna'
                        width={750}
                        height={750}
                        className='about-image-desktop'
                    // fill
                    // objectFit='contain'
                    />
                </div>

                <div className='about-text-desktop'>
                    <h2 className='h2'>Sobre</h2>
                    <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum id tortor sit amet euismod. Etiam ultricies, nibh nec tempor fermentum, massa ligula fringilla eros, nec porta justo eros et elit. Nullam malesuada accumsan maximus. Nunc et libero quis justo vehicula porttitor vel nec urna. Suspendisse pulvinar, magna sed consectetur convallis, turpis lectus aliquet nisl, ut efficitur dui turpis at nibh. Donec scelerisque vel massa non maximus. In ut elementum diam. In nec posuere mi. Nullam posuere, mi vitae sollicitudin convallis, sapien nibh mattis elit, ac ultrices dolor orci et orci. Fusce quis malesuada turpis.</p>
                    <div className='button-about'>
                        <Link href={'/about'} >Ver mais</Link>
                    </div>
                </div>

                <div className='about-2 '>
                    <Image
                        src={'/dots.png'}
                        alt='Dots'
                        width={176}
                        height={176}
                        className='dots-2'
                    />

                    <Image
                        src={'/about_2.jpg'}
                        alt='Anna Service 2'
                        // fill
                        // objectFit='contain'
                        width={297}
                        height={297}

                        className='home-about-img-2 '
                    />
                </div>
            </div>
        </section >
    )
}
