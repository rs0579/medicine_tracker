import { Link } from 'react-router-dom';
import { Button } from "@heroui/react";

const Navbar = () => {

  return (
    <section className="top">
      <header className="bg-primary text-light mb-4 py-3 flex-row align-center">
        <div
          className="container flex-row justify-space-between-lg justify-center align-center"
        >
         <Link to="/" className="m-0"><h1 className="m-0">MedTrack</h1></Link>
          <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg font-semibold" radius="full">
            <Link to="/login" className="m-0">Login</Link> 
          </Button>
          
          <Button className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg font-semibold " radius="full">
            <Link to="/signup" className="m-0" >Signup</Link>
          </Button>
        </div>
      </header>
    </section>
  )
}

export default Navbar;
