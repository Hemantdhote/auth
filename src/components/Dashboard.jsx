import React from 'react'
import { useEffect ,useState} from 'react';

const Dashboard = ({setcurrentPage}) => {

  const [user, setuser] = useState(null);

  useEffect(()=>{
    const storedUser=JSON.parse(localStorage.getItem("user"));
    if(storedUser){
      setuser(storedUser);
    }
    else{
      setcurrentPage("login")
    }
  },[setcurrentPage]);



  const handleLogout=()=>{
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    setcurrentPage("register");
  }

  return (
    <div>
       <div className='flex flex-col items-center justify-center h-screen w-full gap-2'>
        <h2 className='text-2xl font-bold text-green-700 uppercase'>HEY <span className='text-black'>{user?.name}</span> WELCOME</h2>
        <h4 className='text-md'>  {user?.email} </h4>
        <button onClick={handleLogout} className='px-8 py-2 text-white rounded-md bg-red-500 mt-4' >Logout</button>
      </div>
      
    </div>
  )
}

export default Dashboard
