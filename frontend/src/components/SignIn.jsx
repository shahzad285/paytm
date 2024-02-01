import axios from "axios"
import { useState } from "react"
export function SignIn() {
  const [email,setEmail] =useState("");
  const [password,setPassword] =useState("");
    return <>
      <div className="min-h-screen bg-custom-color flex justify-center items-center">
        <div className="rounded bg-slate-50 p-3 ">
          <div className="flex flex-col items-center justify-center w-5/6 text-center pl-8 pb-3">
            <div className="text-2xl font-bold mb-1">Sign In</div>
            <div className="text-gray-500  text-xs mb-4 font-bold">Enter your credentials to access your account</div>
          </div>
          <div className="flex flex-col justify-start text-xs  mb-3 text-slate-700">
            <label className="font-bold mb-2" htmlFor="">Email</label>
            <input className="rounded border border-gray-500 p-1 mb-4" type="text" placeholder="Johndoe@example.com" onChange={e => { setEmail(e.target.value) }}/>
            <label className="font-bold mb-2" htmlFor="">Password</label>
            <input className="rounded border border-gray-500 p-1 mb-4" type="password" onChange={e => { setPassword(e.target.value) }}/>
            <button className="rounded bg-slate-800 text-slate-50 p-2 font-bold" onClick={()=>{
            axios.post("http://localhost:3000/api/v1/user/signin",{
              username:email,
              password:password
            })
          }}>Sign In</button>
          </div>
          <div className="text-center text-slate-700">
            <label className="font-bold text-xs">Don't have an account? <span className="underline">Sign Up</span></label>
          </div>
        </div>
      </div>
    </>
  }