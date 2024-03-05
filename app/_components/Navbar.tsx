import Image from 'next/image'
import React from 'react'

export default function Navbar({ activateBurger }: { activateBurger: boolean }) {
    console.log(activateBurger);

    return (

        // <div>
        <nav className="w-full bg-slate-300 fixed top-0 left-0 right-0 z-10">

            <h2>MENU</h2>
            <div className='flex flex-col items-center'>
                <a href={''} className=''>Início</a>
                <a href={''} className=''>Sobre</a>
                <a href={''} className=''>Clínica</a>
                <a href={''} className=''>Procedimentos</a>

            </div>
            <Image
                src={'/logo_footer.png'}
                alt='Anna Kampmann Logo'
                width={176}
                height={171}
            // fill
            // style={{ objectFit: "cover" }}
            ></Image>
            <button
                className='bg-text text-white rounded-full px-16 py-3'
            >Agende atendimento</button>
        </nav>
        // </div>
    )
}
