import React from 'react'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import Banner from './Components/Banner'
import RowPost from './Components/RowPost'
import { trending, actions, originals, documentaries, romance, horror, comedy } from './url'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <RowPost title='Netflix Originals' url={originals} />
      <RowPost title='Action' isSmall url={actions} />
      <RowPost title='Trendding' url={trending} />

      <RowPost title='Documentaries' isSmall url={documentaries} />
      <RowPost title='Romance' isSmall url={romance} />
      <RowPost title='Horror' isSmall url={horror} />
      <RowPost title='Comedy' isSmall url={comedy} />
      <RowPost title='Romance' isSmall url={romance} />
    </>
  )
}

export default App
