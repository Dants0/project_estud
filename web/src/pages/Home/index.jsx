import React from 'react'
import SelectorDisplay from '../../components/SelectorDisplay/SelectorDisplay'
import ShowHome from '../../components/ShowHome/ShowHome'
import ShowQuestions from '../../components/ShowQuestions/ShowQuestions'

const Home = () => {
  return (
    <div className="main_container">
      <ShowHome/>
      <ShowQuestions/>
      <SelectorDisplay/>
    </div>
  )
}

export default Home