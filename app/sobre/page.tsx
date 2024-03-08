import Image from 'next/image'
import React from 'react'

export default function Sobre() {
  return (
    <section className='ABOUT'>
      <h1 className='ABOUT-title'>Sobre</h1>
      <div className='ABOUT-container'>

        <div className='ABOUT-photo-container'>
          <Image
            src={'/about-photo.jpg'}
            alt='Sobre Anna Kampmann'
            // width={835}
            // height={533}
            fill
            className='ABOUT-photo'
          />
        </div>

        <div className='ABOUT-text-container'>

          <p>Meu nome é Anna Kampmann e sou uma dermatologista apaixonada pela saúde e beleza da pele. Minha jornada acadêmica começou com uma profunda fascinação pela anatomia e fisiologia da pele, que floresceu durante meus estudos de medicina. Desde cedo, eu sabia que queria dedicar minha carreira ao cuidado dermatológico, uma área onde a ciência se encontra com a arte de promover a autoestima e o bem-estar dos pacientes.</p>

          <p>Hoje, como dermatologista, estou comprometida em oferecer o mais alto padrão de cuidados dermatológicos, combinando conhecimento científico avançado com uma abordagem personalizada e holística. Estou aqui para ajudar meus pacientes a alcançarem uma pele saudável e radiante, enquanto os acompanho em sua jornada de confiança e autoaceitação.</p>
        </div>

      </div>
    </section>
  )
}
