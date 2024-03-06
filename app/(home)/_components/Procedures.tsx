import React from 'react'
import data from './procedures.json'
import ProceduresCard from './ProceduresCard'

export default function Procedures() {
    const procedures = data.procedures


    return (
        <section className='p-11'>
            <h2 className='procedures'>Procedimentos</h2>
            <div >
                {procedures.map(procedure => (
                    <ProceduresCard key={procedure.id} data={procedure} />
                ))}
            </div>
        </section>
    )
}
