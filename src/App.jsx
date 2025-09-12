import React from 'react'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <div className='bg-white' >
      <Navbar/>
      <main className="max-w-7xl mx-auto min-h-screen  px-4">
        <Outlet/>
      </main>
    </div>
  )
}

export default App