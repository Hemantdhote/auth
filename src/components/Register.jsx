import React from "react";

const Register = () => {
  return (
    <div>
      <div className=" h-screen w-full  flex items-center justify-center">
        <form className="flex flex-col gap-3">
          <h1 className="text-xl font-bold mb-2 text-green-700">
            Register User :
          </h1>
          <input
            className="px-2 py-1 bg-neutral-300 rounded-md outline-none w-60"
            type="text"
            placeholder="Enter your name"
          />
          <input
            className="px-2 py-1 bg-neutral-300 rounded-md outline-none w-60"
            type="text"
            placeholder="Enter your email"
          />
          <input
            className="px-2 py-1 bg-neutral-300 rounded-md outline-none w-60"
            type="password"
            placeholder="Enter the password"
          />
          <button className="px-2 py-1 bg-green-500 text-white rounded-md outline-none w-60">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
