import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Schedule() {
    return (
        <div className='HOME-schedule shadow'>
            <Image
                src={'/logo_schedule.png'}
                alt='Logo'
                fill
                className='HOME-schedule-logo'
            />

            <Image
                src={'/roro.png'}
                alt='Aurora Maria'
                fill
                className='HOME-schedule-roro'
            />

            <div className='HOME-schedule-info'>
                <h2>Marque uma consulta pelo nosso WhatsApp</h2>
                <Link href={'/'} className='button'>Clique Aqui</Link>
            </div>
        </div>
    )
}
