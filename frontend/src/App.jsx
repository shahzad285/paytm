import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dashboard } from "./components/Dashboard"
import { SendMoney } from "./components/SendMoney"
import { SignIn } from "./components/SignIn"
import { SignUp } from "./components/SignUp"

function App() {

  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App
