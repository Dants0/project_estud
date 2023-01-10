import React from 'react'
import Matemática from '../Exercises_Components/Matematica/Matemática'
import NavBar from '../NavBar/NavBar'
import SelectorDisplay from '../SelectorDisplay/SelectorDisplay'

import styles from './styles.module.scss'

const ShowQuestions = () => {
  return (
    <div className="show_questions_container">
        <NavBar/>
        <SelectorDisplay/>
        {/* <Matemática/> */}
    </div>
  )
}

export default ShowQuestions