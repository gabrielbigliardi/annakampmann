'use client'
import { useEffect, useState } from 'react'
import data from '@/public/procedures.json'
import Image from 'next/image';
import Link from 'next/link';

type Procedure = {
  id: number;
  title: string;
  description: string;
  image: string
}


export default function ProcedurePage(props: { params: { procedure: string }, searchParams: {} }) {

  // console.log(props);

  const [procedure, setProcedure] = useState<Procedure | undefined>()

  const { procedures } = data

  // const current = procedures.find(p => p.title === props.params.procedure)
  // console.log(current);


  useEffect(() => {
    setProcedure(() => {
      return procedures.find(procedure => procedure.title === props.params.procedure)
    })
  }, [])


  return (
    <section className='PROCEDURE'>
      <h1 className='PROCEDURE-title'>Sobre</h1>

      <div className='PROCEDURE-buttons-container'>
        {procedures.map(procedure => (
          <Link key={procedure.id} href={`/procedimentos/${procedure.title}`} className='p-4'>
            {procedure.title}
          </Link>
        ))}
      </div>

      <div className='PROCEDURE-container'>

        <div className='PROCEDURE-photo-container'>
          <Image
            src={procedure?.image as string}
            alt='Sobre Anna Kampmann'
            // width={835}
            // height={533}
            fill
            className='PROCEDURE-photo'
          />
        </div>

        <div className='PROCEDURE-text-container'>

          <p>{procedure?.description}</p>
        </div>
      </div>
    </section>
  )
}
