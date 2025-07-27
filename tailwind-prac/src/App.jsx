import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard'

function App() {
  
  return (
    <>

    <div className='grid grid-cols-3 '>
      <RevenueCard title={"amount pending"} orderCount={13} amount={4583}/>
      </div>
    </>
  )
}

export default App
