
import { Routes, Route  } from "react-router-dom";
import './App.scss'
import Home from "./pages/Home";
import SendedEmail from "./pages/SendedEmail";

function App() {


  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sended" element={<SendedEmail/>} />
      </Routes>

  )
}

export default App
