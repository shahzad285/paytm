export function SignUp() {
  return <>
    <div className="min-h-screen bg-custom-color flex justify-center items-center">
      <div className="rounded bg-slate-50 p-4 ">
        <div className="flex flex-col items-center justify-center w-5/6 text-center pl-8 pb-3">
          <div className="text-2xl font-bold mb-1">Sign Up</div>
          <div className="text-gray-500  text-xs mb-4 font-bold">Enter your information to create an account</div>
        </div>
        <div className="flex flex-col justify-start text-xs  mb-3 text-slate-700">
          <label className="font-bold mb-2" htmlFor="">First Name</label>
          <input className="rounded border border-gray-500 p-1 mb-4" type="text" placeholder="John" />
          <label className="font-bold mb-2" htmlFor="">Last Name</label>
          <input className="rounded border border-gray-500 p-1 mb-4" type="text" placeholder="Doe" />
          <label className="font-bold mb-2" htmlFor="">Email</label>
          <input className="rounded border border-gray-500 p-1 mb-4" type="text" placeholder="Johndoe@example.com" />
          <label className="font-bold mb-2" htmlFor="">Password</label>
          <input className="rounded border border-gray-500 p-1 mb-4" type="password" />
          <button className="rounded bg-slate-900 text-slate-50 p-2 font-bold">Sign Up</button>
        </div>
        <div className="text-center text-slate-700">
          <label className="font-bold text-xs">Already have an account? <span className="underline">Login</span></label>
        </div>
      </div>
    </div>
  </>
}