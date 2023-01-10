import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'


import styles from './styles.module.scss'

const baseUrl = 'https://type.fit/api/quotes';
let data;
const numberQuotes = () => Math.floor(Math.random() * data.length) + 1;

const controller = {
  messageError: 'A chamada não foi feita com sucesso',
  messageSuccess: 'A requisição foi feita com sucesso'
}

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
        </div>
      </div>
    </div>
  )
}

export default SelectorDisplay