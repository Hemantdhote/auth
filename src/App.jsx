import React, {useState} from 'react'
import Register from './components/Register'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import { useEffect } from 'react'

const App = () => {

  const [currentPage, setcurrentPage] = useState("register");


  useEffect(()=>{
    const user=localStorage.getItem("user");
    if(user){
      setcurrentPage("login");
    }
  },[])



  return (
    <div>
      {currentPage==="register" && <Register setcurrentPage={setcurrentPage} />}
      {currentPage==="login" && <Login setcurrentPage={setcurrentPage} />}
      {currentPage==="dashboard" && <Dashboard setcurrentPage={setcurrentPage} />}

      
    </div>
  )
}

export default App
