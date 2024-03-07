'use client'
import React, { useEffect, useState } from 'react'
import data from './procedures.json'
import ProceduresCard from './ProceduresCard'
import Link from 'next/link'

type Procedure = {
    id: number;
    title: string;
    description: string;
    image: string
}[]


export default function Procedures() {
    const procedures = data.procedures



    return (
        <section className='HOME-procedures-container'>
            <h2 className='procedures'>Procedimentos</h2>
            <div className='HOME-procedures-grid'>
                {procedures.map(procedure => (
                    <ProceduresCard key={procedure.id} data={procedure} />
                ))}
            </div>
            <div className='button'>
                <Link href={'/about'} >Ver mais</Link>
            </div>
        </section>
    )
}
