import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Route,Routes } from 'react-router-dom'
import Results from './components/Results/Results'
import { ResultContextProvider } from './Contexts/ResultContextProvider'
const App = () => {
  const [darkTheme,setDarkTheme]=useState(false)
  return (
  <div className={darkTheme? 'dark' : '' }>
    
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
       <ResultContextProvider>

       <Routes>
      <Route path='/' element={<Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />}/>
     <Route path='/search' element={<><Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} /><Results/></>}/> 
     <Route path='/search' element={<Results/>}/> 
     <Route path='/search' element={<Results/>}/> 
     <Route path='/search' element={<Results/>}/> 
      {/* <Route path={['/images','/news','/videos']} element={<Results/>}/>  */}
      </Routes>
      <Results/>
       <Footer/>
       </ResultContextProvider>
      </div>
  </div>
    
  )
}

export default App
