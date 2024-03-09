'use client'
import React, { useEffect, useState } from 'react'
import data from '@/public/procedures.json'
import ProceduresCard from './ProceduresCard'
import Link from 'next/link'

type Procedure = {
    id: number;
    title: string;
    description: string;
    image: string;
    param: string;
}[]


export default function Procedures() {

    const procedures = data.procedures




    return (
        <section className='HOME-procedures-container'>
            <h2 className='HOME-procedures-title'>Procedimentos</h2>
            <div className='HOME-procedures-grid'>
                {procedures.map(procedure => (
                    <Link key={procedure.id} href={`/procedimentos/${procedure.title}`} >
                        <ProceduresCard data={procedure} />
                    </Link>
                ))}
            </div>
            <div className='button'>
                <Link href={'/about'} >Ver mais</Link>
            </div>
        </section>
    )
}
