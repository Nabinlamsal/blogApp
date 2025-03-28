import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import './index.css'
import { login, logout } from './store/authSlice'
import authService from "./appwrite/auth"
import { Header, Footer } from './components'
function App() {
const [loading, setLoading] =useState(true) 
const dispatch =useDispatch()

useEffect(()=>{
  authService.getCurrentUser()
  .then((userData)=>{
    if(userData){
      dispatch(login({userData}))
    }
    else{
      dispatch(logout())
    }
  })
  .finally(()=>setLoading(false))
}, [])

//conditional rendering
return !loading ? (
  <div className='min-h-screen flex flex-wrap place-content-center text-center bg-gray-400'>
    <div className='w-full block'>
      <Header/>
      <main>
        TODO TASK{/* <Outlet/> */}
      </main>
      <Footer/>
    </div>
  </div>
): null
}

export default App
