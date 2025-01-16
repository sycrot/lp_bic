import Image from "next/image";
import styles from "./page.module.scss";
import Panel1 from '../assets/images/panel-1.svg';
import ImgBg2 from '../assets/images/bg_img-2.svg';
import Collection1 from '../assets/images/collection_1.png';
import Collection2 from '../assets/images/collection_2.png';
import ImagesInfo from '../assets/images/ImageInfos.png';
import OncaBic from '../assets/images/BIC_BIENAL_SP_ESPACO_KIDS_ONCA.svg';
import Header from "@/components/header";

export default function Home() {
  return (
    <div className={styles.page}>
      <Image className={styles.imgBg1} src={Panel1} alt="Panel 1" />
      <Image className={styles.imgBg2} src={ImgBg2} alt="Panel 1" />
      <div className={`container ${styles.container}`}>
        <Header />

        <div className={`row align-items-center`}>
          <div className="col-12 col-md-6 d-flex justify-content-end px-5 px-md-0 mb-4 mb-md-0 pe-md-3">
            <Image src={Collection1} className={styles.imageCollection1} alt="Collection" quality={100} style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className={`col-12 col-md-6 d-flex flex-column justify-content-start ${styles.info1}`}>
            <h4>Conheça os novos lápis de madeira BIC Kids.</h4>
            <p>Faça o cadastro e receba um kit especial, com 2uni de lápis de cor e um marca páginas para você colorir.</p>
            <a href="/form">CLIQUE E PARTICIPE</a>
          </div>
          <div className="col-12 d-none d-none d-md-flex justify-content-center">
            <p className={`text-center ${styles.info2}`}>
              Mergulhe em nossas aventuras coloridas e divertidas com os Lápis de Cor Premium BIC Kids, produto especialmente desenvolvido para o conforto e segurança das crianças.
            </p>
          </div>
        </div>

        <div className={`row ${styles.RowInfoFooter}`}>
          <div className="col-12 col-md-4 d-flex align-items-center flex-column flex-md-row mt-4 mt-md-0 px-0">
            <Image src={Collection2} alt="Collection 2" />
            <p className={`text-center d-md-none ${styles.info2}`}>
              Mergulhe em nossas aventuras coloridas e divertidas com os Lápis de Cor Premium BIC Kids, produto especialmente desenvolvido para o conforto e segurança das crianças.
            </p>
          </div>
          <div className="col-12 col-md-4 d-flex flex-column justify-content-end">
            <Image src={ImagesInfo} alt="Info" />
            <p>Entre em contato conosco pelo e-mail:</p>
            <span>faleconosco@criandouau.bickids.com.br</span>
          </div>
          <div className={`col-12 col-md-4 p-0 ${styles.oncaImage}`}>
            <Image src={OncaBic} alt="Onca" layout="responsive" />
          </div>
        </div>
      </div>
    </div>
  );
}
