"use client";

import Link from "next/link";

import { useUser } from "../lib/UserContext"; // Adjust path as necessary

function Navbar() {
  
  return (
    <nav>
      <Link href="/"><h1 >Chatty</h1></Link>
      <div className="button-nav bar">
        <Link href="/userLogin"> <button>Sign In</button></Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
