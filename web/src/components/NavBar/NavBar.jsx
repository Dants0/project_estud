import React from 'react'
import { Link } from "react-router-dom";

import styles from './styles.module.scss'

const NavBar = () => {
    return (
        <header>
            <h1>EstudY</h1>
            <input type="search" placeholder='Pesquise um tema' />
            <nav>
                <ul>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/Estudos'>
                            Estudos
                        </Link>
                    </li>
                    <li>
                        <Link to='/Contact'>
                            Contato
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar