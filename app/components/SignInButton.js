"use client";

import { auth } from "../lib/firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function SignInButton() {
    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
        } catch (error) {
          if (error.code === 'auth/popup-closed-by-user') {
            console.error("The pop-up was closed before signing in. Please try again.");
          } else {
            console.error("Error signing in with Google:", error);
          }
        }
      };
  return <button onClick={signInWithGoogle}>
    Sign in with google
  </button>;
}

export default SignInButton;
