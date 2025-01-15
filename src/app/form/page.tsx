'use client'
import styles from './styles.module.scss';
import Image from "next/image";
import Panel1 from '../../assets/images/panel-1.svg';
import ImgBg2 from '../../assets/images/bg_img-2.svg';
import BgImageGirafa from '../../assets/images/bg_image_girafa.svg';
import BgImageOnca from '../../assets/images/BIC_BIENAL_SP_ESPACO_KIDS_ONCA.svg';
import Header from '@/components/header';
import * as yup from 'yup';
import * as React from 'react';
import { useFormik } from 'formik';
import DatePicker from 'react-datepicker';
import TermsModal from '@/components/termsModal';
import RegistrationCompletedModal from '@/components/registrationCompletedModal';
import Cleave from 'cleave.js/react';


const estados = [
  { nome: "Acre", sigla: "AC" },
  { nome: "Alagoas", sigla: "AL" },
  { nome: "Amapá", sigla: "AP" },
  { nome: "Amazonas", sigla: "AM" },
  { nome: "Bahia", sigla: "BA" },
  { nome: "Ceará", sigla: "CE" },
  { nome: "Distrito Federal", sigla: "DF" },
  { nome: "Espírito Santo", sigla: "ES" },
  { nome: "Goiás", sigla: "GO" },
  { nome: "Maranhão", sigla: "MA" },
  { nome: "Mato Grosso", sigla: "MT" },
  { nome: "Mato Grosso do Sul", sigla: "MS" },
  { nome: "Minas Gerais", sigla: "MG" },
  { nome: "Pará", sigla: "PA" },
  { nome: "Paraíba", sigla: "PB" },
  { nome: "Paraná", sigla: "PR" },
  { nome: "Pernambuco", sigla: "PE" },
  { nome: "Piauí", sigla: "PI" },
  { nome: "Rio de Janeiro", sigla: "RJ" },
  { nome: "Rio Grande do Norte", sigla: "RN" },
  { nome: "Rio Grande do Sul", sigla: "RS" },
  { nome: "Rondônia", sigla: "RO" },
  { nome: "Roraima", sigla: "RR" },
  { nome: "Santa Catarina", sigla: "SC" },
  { nome: "São Paulo", sigla: "SP" },
  { nome: "Sergipe", sigla: "SE" },
  { nome: "Tocantins", sigla: "TO" },
];

const validationSchema = yup.object().shape({
  nome: yup.string().required('Digite o seu nome!'),
  cpf: yup.string().required('Campo necessário'),
  dataNascimento: yup.string().required('Campo necessário'),
  // Address
  cep: yup.string().required('Campo necessário'),
  logradouro: yup.string().required('Campo necessário'),
  numero: yup.string().required('Campo necessário'),
  complemento: yup.string(),
  bairro: yup.string().required('Campo necessário'),
  cidade: yup.string().required('Campo necessário'),
  estado: yup.string().required('Campo necessário'),
  acceptTerms: yup.boolean().required('É necessário aceitar os termos.')
});

export default function Form() {
  const [show, setShow] = React.useState(false);
  const [showRegistrationCompleted, setShowRegistrationCompleted] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCloseRegistrationCompleted = () => setShowRegistrationCompleted(false);
  const handleShowRegistrationCompleted = () => setShowRegistrationCompleted(true);

  const formik = useFormik({
    initialValues: {
      nome: '',
      cpf: '',
      dataNascimento: '',
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      estado: '',
      acceptTerms: false
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleShowRegistrationCompleted();
      formik.resetForm();
    }
  });

  return (
    <div className={styles.Form}>
      <Image className={styles.imgBg1} src={Panel1} alt="Panel 1" />
      <Image className={styles.imgBg2} src={ImgBg2} alt="Panel 1" />

      <div className="container">
        <Header />

        <p className={styles.infoTop}>
          Preencha seus dados e receba em casa um <span>kit BIC Kids</span> com o lápis de cor que dá mais vida ao seu desenho.
        </p>
        <form onSubmit={formik.handleSubmit}>
          <div className={`row ${styles.rowForm}`}>
            <div className="col-12 mb-3">
              <h3>Dados pessoais</h3>
            </div>
            <div className="col-12">
              <div className={styles.input}>
                {/* {formik.touched.nome && formik.errors.nome &&
                  <span className={styles.error}>{formik.errors.nome}</span>
                } */}
                <input
                  type="text"
                  value={formik.values.nome}
                  name="nome"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Nome completo*"
                  className={`${formik.touched.nome && formik.errors.nome ? styles.errorInput : ''}`}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-md-6 mt-3">
              <div className={styles.input}>
                {/* {formik.touched.cpf && formik.errors.cpf &&
                  <span className={styles.error}>{formik.errors.cpf}</span>
                } */}
                <Cleave
                  options={{
                    blocks: [3, 3, 3, 2],
                    delimiters: ['.', '.', '-'],
                    numericOnly: true
                  }}
                  type="text"
                  value={formik.values.cpf}
                  name="cpf"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="CPF*"
                  className={`${formik.touched.cpf && formik.errors.cpf ? styles.errorInput : ''}`}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-md-6 mt-3">
              <div className={styles.input}>
                {/* {formik.touched.dataNascimento && formik.errors.dataNascimento &&
                  <span className={styles.error}>{formik.errors.dataNascimento}</span>
                } */}
                <DatePicker
                  selected={formik.values.dataNascimento ? new Date(formik.values.dataNascimento) : null}
                  onChange={(date) => formik.setFieldValue('dataNascimento', date)}
                  onBlur={formik.handleBlur}
                  name="dataNascimento"
                  placeholderText='Data de nascimento*'
                  required
                />
                {/* <input
                  type="text"
                  value={formik.values.dataNascimento}
                  name="dataNascimento"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Data de nascimento*"
                  className={`${formik.touched.dataNascimento && formik.errors.dataNascimento ? styles.errorInput : ''}`}
                /> */}
              </div>
            </div>
            <div className="col-12 mt-5 mb-3">
              <h3>Endereço</h3>
            </div>
            <div className="col-12">
              <div className={styles.input}>
                {/* {formik.touched.cep && formik.errors.cep &&
                  <span className={styles.error}>{formik.errors.cep}</span>
                } */}
                <Cleave
                  options={{
                    blocks: [5, 3],
                    delimiters: ['-'],
                    numericOnly: true
                  }}
                  type="text"
                  value={formik.values.cep}
                  name="cep"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="CEP*"
                  className={`${formik.touched.cep && formik.errors.cep ? styles.errorInput : ''}`}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-md-8 mt-3">
              <div className={styles.input}>
                {/* {formik.touched.logradouro && formik.errors.logradouro &&
                  <span className={styles.error}>{formik.errors.logradouro}</span>
                } */}
                <input
                  type="text"
                  value={formik.values.logradouro}
                  name="logradouro"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Logradouro*"
                  className={`${formik.touched.logradouro && formik.errors.logradouro ? styles.errorInput : ''}`}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-md-4 mt-3">
              <div className={styles.input}>
                {/* {formik.touched.numero && formik.errors.numero &&
                  <span className={styles.error}>{formik.errors.numero}</span>
                } */}
                <Cleave
                  options={{
                    numericOnly: true
                  }}
                  type="text"
                  value={formik.values.numero}
                  name="numero"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Número*"
                  className={`${formik.touched.numero && formik.errors.numero ? styles.errorInput : ''}`}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-md-3 mt-3">
              <div className={styles.input}>
                <input
                  type="text"
                  value={formik.values.complemento}
                  name="complemento"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Complemento"
                />
              </div>
            </div>
            <div className="col-12 col-md-3 mt-3">
              <div className={styles.input}>
                {/* {formik.touched.bairro && formik.errors.bairro &&
                  <span className={styles.error}>{formik.errors.bairro}</span>
                } */}
                <input
                  type="text"
                  value={formik.values.bairro}
                  name="bairro"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Bairro*"
                  className={`${formik.touched.bairro && formik.errors.bairro ? styles.errorInput : ''}`}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-md-3 mt-3">
              <div className={styles.input}>
                {/* {formik.touched.cidade && formik.errors.cidade &&
                  <span className={styles.error}>{formik.errors.cidade}</span>
                } */}
                <input
                  type="text"
                  value={formik.values.cidade}
                  name="cidade"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Cidade*"
                  className={`${formik.touched.cidade && formik.errors.cidade ? styles.errorInput : ''}`}
                  required
                />
              </div>
            </div>
            <div className="col-12 col-md-3 mt-3">
              <div className={styles.input}>
                {/* {formik.touched.estado && formik.errors.estado &&
                  <span className={styles.error}>{formik.errors.estado}</span>
                } */}
                <select
                  value={formik.values.estado}
                  name="estado"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className={`${formik.touched.estado && formik.errors.estado ? styles.errorInput : ''}`}
                  required
                >
                  <option value="" label="Estado*" />
                  {estados.map((estado) => (
                    <option key={estado.nome} value={estado.nome}>
                      {estado.nome}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="col-12">
              <span className={styles.requiredSpan}>* Preenchimento obrigatório</span>
            </div>
            <div className="col-12 mt-4">
              <div className="d-flex gap-2 align-items-center justify-content-center text-white">
                <div className={styles.input}>
                  <input
                    type="checkbox"
                    value={formik.values.acceptTerms?.toString()}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="acceptTerms"
                    required
                  />
                </div>
                <label>Eu li e concordo com os <a href="" className='text-white' onClick={e => {
                  e.preventDefault();
                  handleShow();
                }}>termos e condições</a></label>
              </div>

            </div>
            <div className="col-12 d-flex justify-content-center">
              <button type="submit">enviar</button>
            </div>
            <div className={`col-12 ${styles.footerMessage}`}>
              <p>BIC Kids – Criando o UAU!</p>
            </div>
          </div>
        </form>
      </div>

      <Image className={styles.BgImageGirafa} src={BgImageGirafa} alt="Panel 1" />
      <Image className={styles.BgImageOnca} src={BgImageOnca} alt="Panel 1" />

      <TermsModal
        show={show}
        handleClose={handleClose}
      />

      <RegistrationCompletedModal
        show={showRegistrationCompleted}
        handleClose={handleCloseRegistrationCompleted}
      />
    </div>
  )
}