import axios from "axios"
import { useState } from "react";
export function SignUp() {
  const [firstName, setFirstName] =useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return <>
    <div className="min-h-screen bg-custom-color flex justify-center items-center">
      <div className="rounded bg-slate-50 p-4 ">
        <div className="flex flex-col items-center justify-center w-5/6 text-center pl-8 pb-3">
          <div className="text-2xl font-bold mb-1">Sign Up</div>
          <div className="text-gray-500  text-xs mb-4 font-bold">Enter your information to create an account</div>
        </div>
        <div className="flex flex-col justify-start text-xs  mb-3 text-slate-700">
          <label className="font-bold mb-2" htmlFor="">First Name</label>
          <input className="rounded border border-gray-500 p-1 mb-4" type="text" placeholder="John" onChange={e => { setFirstName(e.target.value) }} />
          <label className="font-bold mb-2" htmlFor="">Last Name</label>
          <input className="rounded border border-gray-500 p-1 mb-4" type="text" placeholder="Doe" onChange={e => { setLastName(e.target.value) }} />
          <label className="font-bold mb-2" htmlFor="">Email</label>
          <input className="rounded border border-gray-500 p-1 mb-4" type="text" placeholder="Johndoe@example.com"  onChange={e => { setUserName(e.target.value) }} />
          <label className="font-bold mb-2" htmlFor="">Password</label>
          <input className="rounded border border-gray-500 p-1 mb-4" type="password"  onChange={e => { setPassword(e.target.value) }} />
          <button className="rounded bg-slate-900 text-slate-50 p-2 font-bold" onClick={async ()=>{
            const response=await axios.post("http://localhost:3000/api/v1/user/signup",{
              username:userName,
              password:password,
              firstname:firstName,
              lastname:lastName
            })
            localStorage.setItem("token",response.data.token);
          }}>Sign Up</button>
        </div>
        <div className="text-center text-slate-700">
          <label className="font-bold text-xs">Already have an account? <a className="underline" href="./signin">Login</a></label>
        </div>
      </div>
    </div>
  </>
}