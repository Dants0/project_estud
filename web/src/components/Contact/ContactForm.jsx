import React, { useState } from 'react'
import NavBar from '../NavBar/NavBar'
import axios from 'axios'

import { User, Envelope, GithubLogo } from 'phosphor-react'
import styles from './styles.module.scss'
import { controller } from '../../assets/controllerApi'

const baseUrl = 'http://localhost:8080/contact'

const ContactForm = () => {
  const [contactInfo, setContactInfo] = useState();

  const handleChangeValues = (value) => {
    setContactInfo(prevValue=>({
      ...prevValue,[value.target.name]:value.target.value
    }))
  }

  console.log(contactInfo)

  const HandleSubmitForm = () => {
    if(contactInfo==undefined){
      window.alert(controller.messageError)
    }else{
      axios.post(baseUrl,{
        name: contactInfo.name,
        email: contactInfo.email,
        profile: contactInfo.profile,
        ideias: contactInfo.ideias,
      }).then(result => {
        console.log(result)
      }).catch(err => {
        console.log(err)
      })
    }
  }

  return (
    <>
    <NavBar />
    
    <div className={styles.container}>
      <div className={styles.contentForm}>
        <label htmlFor="">
        <User size={32} color="#1d1d1b" weight="light" />
        <input name="name" id="name" type="text" placeholder="Nome" onChange={handleChangeValues} />
        </label>

        <label htmlFor="">
        <Envelope size={32} color="#1d1d1b" weight="light" />
        <input name="email" id="email" type="email" placeholder="Email" onChange={handleChangeValues} />
        </label>

        <label htmlFor="">
        <GithubLogo size={32} color="#1d1d1b" weight="light" />
        <input name="profile" id="profile" type="text" placeholder="Link Github" onChange={handleChangeValues} />
        </label>

        <label htmlFor="">Ideias para adicionar</label>
        <textarea name="ideias" id="ideias" cols="30" rows="25" placeholder='Ideias' onChange={handleChangeValues}></textarea>


        <button value="Enviar" className={styles.sendFormButton} onClick={() => HandleSubmitForm()}>Enviar</button>
      </div>
    </div>
    </>
  )
}

export default ContactForm