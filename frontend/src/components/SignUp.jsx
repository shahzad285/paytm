export function SignUp() {
  return <>
    <div className="min-h-screen bg-custom-color flex justify-center items-center">
      <div className="rounded bg-slate-50 p-4 ">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold items-center">Sign Up</div>
          <div className="text-gray-500  text-xs">Enter your information to create an account</div>
        </div>
        <div className="flex flex-col justify-start text-xs">
          <label className="font-bold" htmlFor="">First Name</label>
          <input className="rounded border border-gray-500 p-1 my-2" type="text" placeholder="John" />
          <label className="font-bold" htmlFor="">Last Name</label>
          <input className="rounded border border-gray-500 p-1 my-2" type="text" placeholder="Doe" />
          <label className="font-bold" htmlFor="">Email</label>
          <input className="rounded border border-gray-500 p-1 my-2" type="text" placeholder="Johndoe@example.com" />
          <label className="font-bold" htmlFor="">Password</label>
          <input className="rounded border border-gray-500 p-1 my-2" type="password" />
          <button className="rounded bg-slate-900 text-slate-50 p-1">Sign Up</button>
        </div>

        <label className="font-bold  text-xs">Already have an account? Login</label>

      </div>
    </div>
  </>
}