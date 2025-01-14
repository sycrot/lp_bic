import { Modal } from 'react-bootstrap';
import { IRegistrationCompletedModalProps } from './props';
import styles from './styles.module.scss';

function RegistrationCompletedModal(props: IRegistrationCompletedModalProps) {
  const {
    show,
    handleClose
  } = props;

  return (
    <Modal show={show} onHide={handleClose} centered className={styles.registrationCompletedModal}>
      <Modal.Header closeButton>
        <p>CADASTRO CONCLUÍDO</p>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <span>Prazo de recebimento de até 30 dias</span>
        <p>Aproveite também para conhecer toda a linha BIC Kids</p>
        <a href="">ACESSE E CONFIRA</a>
      </Modal.Body>
    </Modal>
  )
}

export default RegistrationCompletedModal;