import { Outlet } from 'react-router-dom';
import {HeroUIProvider} from "@heroui/react";
import Navbar from './components/Navbar';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
import './index.css'
function App() {

  return (
    <div>
       <HeroUIProvider>
        <Navbar />
        <main className="container container-fluid mt-5">
          <Outlet />

        </main>
      </HeroUIProvider>
      {/* <Route path="/User" element={<Login />} />
      <Route path="/User" element={<Signup />} /> */}
            
    </div>
    
  )
}

export default App
