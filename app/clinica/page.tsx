'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'

import { images } from "@/app/_lib/images"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import { Key } from 'react'

export default function Page() {
  return (
    <section className='CLINIC'>
      <div className='CLINIC-container'>
        <Swiper
          navigation
          pagination={{ type: 'fraction' }}
          modules={[Navigation, Pagination]}
          onSwiper={swiper => console.log(swiper)}
          className='CLINIC-swiper'

        >
          {images.map((image: { src: string | StaticImport; alt: string }, index: Key | null | undefined) => (
            <SwiperSlide key={index} className='CLINIC-slide'>
              <div className='CLINIC-image-container'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  className='CLINIC-image'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='CLINIC-text'>
          <p>No coração de uma movimentada cidade, encontra-se o consultório da Dra. Anna Kampmann, um oásis de serenidade e beleza dedicado ao cuidado da pele e ao bem-estar dos pacientes. Situado em um prédio novo, seu consultório combina charme clássico com toques modernos, criando um ambiente acolhedor e convidativo.</p>

          <p>O consultório da Dra. Anna Kampmann é também um lugar de parceria e colaboração, onde ela divide não apenas sua paixão pela dermatologia, mas também seu espaço de trabalho com seu companheiro, o Dr. Bernardo Alves, um respeitado traumatologista. Juntos, eles compartilham o compromisso de fornecer cuidados de saúde excepcionais e personalizados, unindo suas especialidades para oferecer uma abordagem abrangente ao bem-estar dos pacientes.</p>

          <p>Para além da excelência médica, o consultório da Dra. Anna Kampmann é um refúgio onde os pacientes podem se sentir cuidados e compreendidos em sua jornada para uma pele saudável e radiante. É um lugar onde a beleza se encontra com a expertise, e onde o conforto e a confiança são prioridades absolutas.</p>
        </div>
      </div>
    </section>
  )
}




// import { register } from 'swiper/element/bundle';
// // register Swiper custom elements

// import { images } from "@/app/_lib/images"
// import Image from 'next/image';

// register();


// export default function ClinicPage() {

//   return (
//     <section className='pt-32 bg-blue-300'>
//       <div>
//         <swiper-container navigation thumbs-swiper=".my-thumbs" slides-per-view="3" speed="500" loop="true" css-mode="true">

//           {images.map(image => (
//             <swiper-slide key={image.alt}>
//               <div className='relative h-screen w-screen'>
//                 <Image
//                   src={image.src}
//                   alt={image.alt}
//                   fill
//                   objectFit='contain'
//                 />
//               </div>
//             </swiper-slide>
//           ))}
//         </swiper-container>
//       </div>
//     </section>
//   )
// }


