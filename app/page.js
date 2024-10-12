// app/Enter.js
"use client";

import { useUser } from "../app/lib/UserContext"; // Adjust path as necessary
import SignIn from "../app/components/SignIn";
import SignUp from "../app/components/SignUp";
import ChatRoom from "../app/components/ChatRoom";

function Enter() {
  const { user } = useUser();

  return (
    <main>
      {!user ? (
        <>
          <SignIn />
          <SignUp />
        </>
      ) : (
        <ChatRoom />
      )}
    </main>
  );
}

export default Enter;
