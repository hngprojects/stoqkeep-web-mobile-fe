"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("logged_in");

    if (isLoggedIn) {
      router.replace("/dashboard");
    } else {
      router.replace("/auth/signin");
    }
  }, [router]);

  return <div className="p-10 text-center">Loading...</div>;
}