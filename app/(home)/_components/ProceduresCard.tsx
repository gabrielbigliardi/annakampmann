import Image from 'next/image';
import React from 'react'

export default function ProceduresCard({ data }: { data: { id: number; title: string; description: string; image: string; param: string }; }) {

    // console.log(data.image);

    return (

        <div className='HOME-procedures-boxes shadow'>
            <div className='HOME-procedures-box-image'>
                <Image
                    src={data.image}
                    alt={data.title}
                    // width={321}
                    // height={321}
                    fill
                    objectFit='cover'
                    className='HOME-procedures-image'
                // className='h-3 w-3'
                // sizes='(max-width: 768px) 50vh'
                />
            </div>
            <div className='HOME-procedures-info'>
                <h3 className='HOME-procedure-title'>{data.title}</h3>
                <p className='HOME-procedure-description'>{data.description}</p>
            </div>
        </div>
    )
}