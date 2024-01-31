export function SendMoney() {
    return <>
        <div className="min-h-screen bg-custom-color flex justify-center items-center">
            <div className="rounded bg-slate-50 p-5 sm:w-2/3 md:w-1/2 lg:w-1/3">
                <div className="flex flex-col items-center justify-center w-5/6 text-center pl-3 pb-10">
                    <div className="text-xl font-bold mb-1">Send Money</div>
                </div>
                <div className="mb-1.5">
                    <label htmlFor="" className=" bg-green-500 rounded-full px-3 py-2"> A</label>
                    <label htmlFor="" className="ml-2 px-2 py-2"> Friend's Name</label>
                </div>
                <div className="flex flex-col justify-start text-xs  mb-3 text-slate-700">
                    <label className="font-bold mb-2" htmlFor="">Amount (in Rs)</label>
                    <input className="rounded border border-gray-100 p-1 mb-4" type="text" placeholder="Enter amount" />                    
                    <button className="rounded bg-green-500 text-slate-50 p-2 font-bold">Initiate Transfer</button>
                </div>
            </div>
        </div>
    </>
}