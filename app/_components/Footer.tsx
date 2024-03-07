import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="FOOTER-info">
        <div className="FOOTER-info-block">
          <h4>Links</h4>
          <Link href={''} className="FOOTER-info-item">Início</Link>
          <Link href={''} className="FOOTER-info-item">Sobre</Link>
          <Link href={''} className="FOOTER-info-item">Procedimentos</Link>
          <Link href={''} className="FOOTER-info-item">Clínica</Link>
          <Link href={''} className="FOOTER-info-item">Entre em contato</Link>
        </div>
        <div className="FOOTER-info-block">
          <h4>Endereço</h4>
          <Link href={''} className="FOOTER-info-item">Av. Dom Joaquim, n° 1515 - sala 913</Link>
          <Link href={''} className="FOOTER-info-item">Moinhos Office</Link>
          <Link href={''} className="FOOTER-info-item">Pelotas, RS - Brasil</Link>
        </div>
        <div className="FOOTER-info-block">
          <h4>Links</h4>
          <Link href={''} className="FOOTER-info-item">annakampman@email.com</Link>
          <Link href={''} className="FOOTER-info-item">+55 53 98765-4321</Link>
        </div>

        <div className="FOOTER-info-img-container relative">
          <Image
            src={'/logo_footer.png'}
            alt='Anna Kampmann Selinho'
            width={176}
            height={171}
          />
        </div>

      </div>
    </footer>
  )
}
