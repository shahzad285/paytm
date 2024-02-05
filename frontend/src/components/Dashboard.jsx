import axios from "axios";
import { useEffect, useState } from "react"
import { SendMoney } from "./SendMoney";

export function Dashboard() {
    const [users, setUsers] = useState([]);
    const [showModal,setShowModal]=useState(false);
   
    const handleOnClose=()=>{
        setShowModal(false);
    }

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get("http://localhost:3000/api/v1/user/bulk", { headers: { Authorization: `Bearer ${token}` } }).then(
            response => {
                setUsers(response.data.user);
            })

    }, [])

    return <>
        <div className="min-h-screen bg-slate-50 flex flex-col text-s">
            <div className="flex flex-nowrap justify-between mx-2 p-2">
                <label htmlFor="" className="py-2 font-extrabold shrink-0">Payments App</label>
                <div className="flex">
                    <label htmlFor="" className="py-2 shrink-0"> Hello, User</label>
                    <label htmlFor="" className="ml-2 bg-neutral-300 rounded-full px-3.5 py-2"> U</label>
                </div>
            </div>
            <div className="border-b"></div>
            <div className="mx-4 my-6">
                <div className="font-bold mb-4">Your Balance $5000</div>
                <div className="font-bold">Users</div>
                <div className="mt-2">
                    <input className="border text-xs p-2 rounded-md w-full" type="text" placeholder="Search users..." />
                </div>
                {users.map((item) => (
                    <div className="flex justify-between mt-6">

                        <div className="flex">
                            <label htmlFor="" className=" bg-neutral-300 rounded-full px-2 py-2"> U1</label>
                            <label htmlFor="" className="ml-3 py-2 font-bold"> {item.firstName + " " + item.lastName}</label>
                        </div>                    <button htmlFor="" className="text-xs bg-slate-900 rounded-md text-slate-100 px-5 py-1" onClick={() => setShowModal(true)}>Send Money</button>
                    </div>
                ))}

            </div>
        </div>
    <SendMoney onClose={handleOnClose} visible={showModal}/>
    </>
}
