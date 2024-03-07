import Image from 'next/image';
import React from 'react'

export default function ProceduresCard({ data }: { key: number; data: { id: number; title: string; description: string; image: string }; }) {

    console.log(data.image);

    return (

        <div className='HERO-procedures-boxes shadow'>
            <div className='HERO-procedures-box-image'>
                <Image
                    src={`/${data.image}`}
                    alt={data.title}
                    // width={321}
                    // height={321}
                    fill
                    objectFit='cover'
                    className='HERO-procedures-image'
                // className='h-3 w-3'
                // sizes='(max-width: 768px) 50vh'
                />
            </div>
            <div className='HERO-procedures-info'>
                <h3 className='HERO-procedures-title'>{data.title}</h3>
                <p className='HERO-procedures-description'>{data.description}</p>
            </div>
        </div>
    )
}