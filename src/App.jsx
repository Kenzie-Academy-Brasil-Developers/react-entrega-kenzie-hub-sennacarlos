import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes"
import { Global } from "./styles/globalStyles"
import 'react-toastify/dist/ReactToastify.css';


function App() {
  

  return (
    <>
    <Global/>
    <ToastContainer position="top-right" autoClose={2000} theme="dark"/>
    <RoutesMain/>
    </>
  )
}

export default App
