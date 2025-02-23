import React,{useState} from "react";

const Login = ({setcurrentPage}) => {

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const loginHamdler=()=>{
    const storedUser=JSON.parse(localStorage.getItem("user"));
    if(!storedUser){
      alert("You are not registerd yet ! register yourself first");
      setcurrentPage("register");
    }

    if(email===storedUser.email && password===storedUser.password){
      alert("user login succesfully");
      localStorage.setItem("isLoggedIn","true");
      setcurrentPage("dashboard");
    }
    else{
      alert("invalid email or password");
      setcurrentPage("login")
    }

  }

  return (
    <div>
      <div>
        <div className=" h-screen w-full  flex items-center justify-center">
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-bold mb-2 text-green-700">
              Login User :
            </h1>
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
              placeholder="Enter your password"
            />
            <button onClick={loginHamdler} className="px-2 py-1 bg-green-500 text-white rounded-md outline-none w-60">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
