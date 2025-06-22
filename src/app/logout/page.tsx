"use client";

import { useEffect } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter(); // ✅ Initialize router

  useEffect(() => {
    signOut({ redirect: false }).then(() => {
      router.push("/"); // ✅ Redirects to homepage after logout
    });
  }, [router]); // add router to dependencies

  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-xl">Logging out...</p>
    </div>
  );
}
