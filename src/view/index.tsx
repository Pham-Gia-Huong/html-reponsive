import React from 'react'
import Header from './Header'
import SectionFeature from './SectionFeature'
import SectionMeals from './SectionMeals'
import SectionSteps from './SectionSteps'
import './index.scss'
import './grid.scss'
const App = () => {
  return (
    <div className="app-container">
      <Header/>
      <SectionFeature/>
      <SectionMeals />
      <SectionSteps/>
    </div>
  )
}

export default App