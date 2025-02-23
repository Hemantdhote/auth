import React,{useState} from "react";
import Login from "./Login";

const Register = ({setcurrentPage}) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");


  const registerHandler=()=>{
    const user={name,email,password};
    console.log(user);
    localStorage.setItem("user",JSON.stringify(user));
    alert("user register successfully ! please log in")
    setcurrentPage("login")
  }

  return (
    <div>
      <div className=" h-screen w-full  flex items-center justify-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-xl font-bold mb-2 text-green-700">
            Register User :
          </h1>
          <input

          value={name}
          onInput={(e)=>setname(e.target.value)} 
          className="px-2 py-1 bg-neutral-300 rounded-md outline-none w-60"
            type="text"
            placeholder="Enter your name"
          />
          <input

          value={email}
          onInput={(e)=>setemail(e.target.value)} 
          className="px-2 py-1 bg-neutral-300 rounded-md outline-none w-60"
            type="text"
            placeholder="Enter your email"
          />
          <input

          value={password}
          onInput={(e)=>setpassword(e.target.value)} 
          className="px-2 py-1 bg-neutral-300 rounded-md outline-none w-60"
            type="password"
            placeholder="Enter the password"
          />
          <button onClick={registerHandler} className="px-2 py-1 bg-green-500 text-white rounded-md outline-none w-60">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
