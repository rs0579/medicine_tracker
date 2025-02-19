import { Outlet, Route } from 'react-router-dom';
import {HeroUIProvider} from "@heroui/react";
import Navbar from './components/Navbar';

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

            
    </div>
    
  )
}

export default App
