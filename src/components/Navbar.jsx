import React from 'react';
import{Link} from "react-router-dom";

const Navbar = () => {   
  return (
    <div className=" flex justify-between bg-black text-white text-xl p-3 body-relative sticky w-full top-0 left-0  " >
    <p className=" cursor-pointer md:text-yellow-300">
    <Link to="/">Home</Link></p>
    <nav>
      <ul className="flex">    
     
        {/* <li className="mx-2 cursor-pointer"><Link to="/shop">Shop</Link></li> */}
        
        {/* <li className="mx-2 cursor-pointer"><Link to="/about">About </Link></li>           
        <li className="mx-2 cursor-pointer"><Link to="/cart">Cart</Link></li>  */}
        {/* <li className="mx-2 cursor-pointer"><Link to="/contact">Contact</Link></li>             */}
        <li className="mx-2 cursor-pointer"><Link to="/profile">Profile</Link></li>          
      </ul>           
    </nav> 
                       
                  
   </div>      
  )           
}

export default Navbar