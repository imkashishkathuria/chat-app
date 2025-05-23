import React, { useState } from 'react'
import assets from '../assets/assets'

const LoginPage = () => {
  const [currentState, setCurrentState] = useState("Sign up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [isSubmitted, setisSubmitted] = useState(false);

  const onSubmitHandler = (e) =>{
    e.preventDefault();

    if(currentState == "Sign up" && !isSubmitted){
      setisSubmitted(true);
      return;
    }
  }

  return (
    <div className='min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl'>
      

      <img src={assets.logo_big} alt="" className='w-30 sm:w-40 md:w-57' />

      <form onSubmit={onSubmitHandler} className="border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg">
      <h2 className='font-medium text-2xl flex justify-between items-center '>{currentState}
       {isSubmitted && (<img onClick={()=>setisSubmitted(false)} src={assets.arrow_icon} alt="" className='w-5 cursor-pointer'/>)}
      </h2>

      {currentState === "Sign up" && !isSubmitted && (
        <input onChange={(e)=>setFullName(e.target.value)} value={fullName} type='text' className='p-2 border border-gray-500 rounded-md focus:outline-none' placeholder='Full Name' autoComplete="off" required />
      )}

      {!isSubmitted && (
        <>
          <input onChange={(e)=>setEmail(e.target.value)} value={email} className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:indigo-500' type='email' placeholder='Email' autoComplete="off"/>

          <input onChange={(e)=>setPassword(e.target.value)} value={password} className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:indigo-500' type='password' placeholder='Password' autoComplete="off"/>
        </>
      )}

      {
        currentState === "Sign up" && isSubmitted  &&(
          <textarea onChange={(e)=>setBio(e.target.value)} value={bio} rows={4} className='p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 ' placeholder='provide a short bio....' required></textarea>
        )
      }

      <button type="submit" className='py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer'>
        {currentState === "Sign up" ? "Create Account" : "Login Now"}
      </button>

      <div className='flex items-center gap-2 text-sm text-gray-500'>
        <input type="checkbox" />
        <p>Agree to the terms of use & privacy policy.</p>

      </div>

      <div className='flex flex-col gap-2'>
        {currentState === "Sign up" ?(
          <p className="text-sm text-gray-600">Already have an account? <span className='font-medium text-violet-500 cursor-pointer' onClick={()=>{setCurrentState("Login in"); setisSubmitted(false)}}>
            Login here</span></p>
        ) : (
          <p className="text-sm text-gray-600">Create an account <span className='font-medium text-violet-500 cursor-pointer' onClick={()=>{setCurrentState("Sign up")}}>Click here</span></p>

        )}
      </div>
      </form>
    </div>
  )
}

export default LoginPage
