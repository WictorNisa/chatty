"use client";

import {auth} from '../lib/firebase'


function SignOutButton() {
    const signOut = async () =>{
        await auth.signOut();
    }
  return (
    <button onClick={signOut}>Sign out</button>
  )
}

export default SignOutButton