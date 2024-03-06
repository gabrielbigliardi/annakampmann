import React from 'react'
import Image from "next/image";

export default function About() {
    return (
        <section className='bg-boxes'>
            <div className='h-[921px]'>
                <div className='relative w-screen h-[250px] '>
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

                <div className='relative px-8 pt-36 text-text'>
                    <h2 className='h2'>Sobre</h2>
                    <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum id tortor sit amet euismod. Etiam ultricies, nibh nec tempor fermentum, massa ligula fringilla eros, nec porta justo eros et elit. Nullam malesuada accumsan maximus. Nunc et libero quis justo vehicula porttitor vel nec urna. Suspendisse pulvinar, magna sed consectetur convallis, turpis lectus aliquet nisl, ut efficitur dui turpis at nibh. Donec scelerisque vel massa non maximus. In ut elementum diam. In nec posuere mi. Nullam posuere, mi vitae sollicitudin convallis, sapien nibh mattis elit, ac ultrices dolor orci et orci. Fusce quis malesuada turpis.</p>
                </div>

                <div className='about-2'
                // style={{ marginRight: '-50%' }}
                >
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
        </section>
    )
}
