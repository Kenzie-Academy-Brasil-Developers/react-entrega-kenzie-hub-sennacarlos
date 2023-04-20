import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes"
import { Global } from "./styles/globalStyles"
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from "./providers/UserContext";


const App = () => {

  return (
    <>
    <Global/>
    <ToastContainer position="top-right" autoClose={2000} theme="dark"/>
    <UserProvider >
        <RoutesMain/>
    </UserProvider>
    </>
  )
}

export default App
