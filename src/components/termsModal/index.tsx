import { Modal } from "react-bootstrap";
import { ITermsModalProps } from "./props";
import styles from './styles.module.scss';

function TermsModal(props: ITermsModalProps) {
  const {
    show,
    handleClose
  } = props;

  return (
    <Modal show={show} onHide={handleClose} centered className={styles.termsModal}>
      <Modal.Header closeButton>
        Política Geral de Privacidade de Dados Pessoais – BIC Brasil
      </Modal.Header>
      <Modal.Body>
        <p>Introdução</p>
        <p>Responsabilidade e ética são valores basilares dos negócios da BIC Brasil. Também reconhecemos que construir confiança de longo prazo é essencial à medida que aprofundamos o foco em trazer inovação aos nossos consumidores. É por isso que implementamos as medidas técnicas e organizacionais necessárias para proteger quaisquer dados pessoais que processamos e a atualizá-las conforme necessário.</p>
        <p>Na BIC Brasil, nosso compromisso é manter um alto padrão de proteção de dados pessoais e cumprir as legislações de privacidade aplicáveis.</p>
        <p>Esta Política Geral de Privacidade de Dados Pessoais – BIC Brasil baseia-se nas disposições da Lei Geral de Proteção de Dados Pessoais nº 13.709/2018 (LGPD) e demais regras complementares e/ou modificadoras, sendo atualizada conforme as necessidades regulatórias e tecnológicas, representando o compromisso da BIC Brasil em proteger o tratamento de dados pessoais coletados de consumidores, colaboradores, clientes, fornecedores, prestadores de serviços e outros parceiros de negócios.</p>
        <p>Embora as definições desta política norteiem o comprometimento da BIC Brasil em relação a todas as modalidades de tratamento de dados pessoais pela empresa, podemos implementar políticas complementares, inclusive para regular relações jurídicas específicas, tais como relações com colaboradores, parceiros, as decorrentes de procedimentos aplicáveis à segurança física e/ou da informação, entre outras.</p>
        <p>Definições</p>
        <p>Anonimização: utilização de meios técnicos razoáveis e disponíveis no momento do Tratamento, por meio dos quais perde-se a possibilidade de identificação ou associação, direta ou indireta, a um indivíduo.</p>
        <p>ANPD: Autoridade Nacional de Proteção de Dados no Brasil, órgão da administração pública responsável por zelar, implementar e fiscalizar o cumprimento da LGPD.</p>
        <p>Bloqueio: suspensão temporária de qualquer operação de Tratamento, mediante guarda dos Dados Pessoais, Dados Sensíveis ou do banco de dados.</p>
      </Modal.Body>
    </Modal>
  )
}

export default TermsModal;