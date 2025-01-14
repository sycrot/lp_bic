import Image from "next/image";
import styles from './styles.module.scss';
import LogoBicKids from '../../assets/images/logo-bic-kids.svg';
import LogoUau from '../../assets/images/logo-uau.svg';

function Header() {
  return (
    <div className={`row justify-content-center align-items-center ${styles.rowLogos}`}>
      <div className="col-12 col-md-6 d-flex justify-content-md-end px-md-5">
        <Image src={LogoBicKids} alt="Logo Bic Kids" />
      </div>
      <div className="col-12 col-md-6 d-flex justify-content-md-start px-md-5">
        <Image src={LogoUau} alt="Logo UAU" />
      </div>
    </div>
  )
}

export default Header;