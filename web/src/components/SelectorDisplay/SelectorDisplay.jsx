import React from 'react'
import { Link } from 'react-router-dom'


import styles from './styles.module.scss'

const SelectorDisplay = () => {
  return (
    <div className={styles.container}>
      <div className={styles.selector}>
        <div className={styles.title}>
          <h2>Selecione o tema</h2>
        </div>
        <div className={styles.content}>
          <Link to='/matematica/exercicios'>
            Matemática
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SelectorDisplay