import Header from "./components/Header"
import Footer from "./components/Fooder";
import { Outlet } from "react-router-dom";


const App = ()=> {

  return (
    <>
     <Header />
      <main>
        <Outlet />
      </main>
<Footer/>
    </>
  )
}

export default App
