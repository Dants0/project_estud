import React from 'react'
import NavBar from '../NavBar/NavBar';
import SelectorDisplay from '../SelectorDisplay/SelectorDisplay';


import styles from './styles.module.scss'

const ShowHome = () => {
  return (
    <div className="show_container_component">
        <NavBar/>
        <SelectorDisplay/>
    </div>
  )
}

export default ShowHome