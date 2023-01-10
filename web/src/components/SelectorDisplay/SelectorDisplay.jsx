import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { Moon, Sun } from 'phosphor-react'
import axios from 'axios'

import styles from './styles.module.scss'
import { controller } from '../../assets/controllerApi'

const baseUrl = 'https://type.fit/api/quotes';
let data;
const numberQuotes = () => Math.floor(Math.random() * data.length) + 1;

const SelectorDisplay = () => {
  const [citacoes, setCitacoes] = useState({})

  useEffect(() =>{
    getCitacoes()
  },[])

  async function getCitacoes(){
    try{
      await axios.get(baseUrl).then(response=>{
        data = response.data
        console.log(data)
        console.log(controller.messageSuccess)
        setCitacoes(data[numberQuotes()])
      })
    }catch(err){
      console.log(`${err, controller.message}`)
    }
  }

  const changeBg = (state, action) => {
    switch(action.type){
      case 'Toggle':
        return {darkMode: !state.darkMode}
        default:
          return state
    }
    // const checkbox = document.querySelector('.checkbox')
    // checkbox.addEventListener('change', ()=>{
    //   document.body.classList.toggle('dark')
    // })
  }
 
  return (
    <div className={styles.container}>
      <div className={styles.content_left}>
        <h2>Gerador de Citações</h2>
        <p className='text'>{citacoes.text}</p>
        <p className='author'>{citacoes.author? citacoes.author: 'Desconhecido'}</p>
        <button onClick={getCitacoes} className={styles.btnQuote}>Nova Citação</button>
      </div>
      
      <div className={styles.selector}>
        <div className={styles.title}>
          <h2>Selecione o tema</h2>
        </div>
        <div className={styles.content}>
          <Link to='/matematica/exercicios'>
            Matemática
          </Link>
          <Link to='/portugues/exercicios'>
            Português
          </Link>
          <Link to='/programacao/exercicios'>
            Programação
          </Link>
          <Link to='/programacao/exercicios'>
            Programação
          </Link>
          <Link to='/programacao/exercicios'>
            Programação
          </Link>
          <Link to='/programacao/exercicios'>
            Programação
          </Link>
          <Link to='/programacao/exercicios'>
            Programação
          </Link>
        </div>
        <input type="checkbox" id='checkbox' className={styles.checkbox} onClick={changeBg}/>
        <label htmlFor="checkbox" className={styles.label}>
          <Moon size={20} color="#fcfcfc" weight="thin" />
          <Sun size={20} color="#bac700" weight="thin" />
          <span className={styles.ball}></span>
        </label>
      </div>
    </div>
  )
}

export default SelectorDisplay