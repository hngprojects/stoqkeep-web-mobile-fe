"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function SignIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {
    setLoading(true);
    localStorage.setItem("logged_in", "true");
    router.replace("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Sign In</h1>

      <button
        onClick={handleSignIn}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>

      <p className="mt-4 text-gray-600">
        Don’t have an account?{" "}
        <Link href="/auth/signup" className="text-blue-600 hover:underline">
          Sign Up
        </Link>
      </p>
    </div>
  );
}