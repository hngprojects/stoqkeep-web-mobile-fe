"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignUp() {
  const router = useRouter();

  const handleSignUp = () => {
    // Fake signup logic (later replace with API call)
    // After signup, redirect to signin
    router.replace("/auth/signin");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6">
      <h1 className="text-3xl font-bold mb-6">Sign Up</h1>

      <button
        onClick={handleSignUp}
        className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Create Account
      </button>

      <p className="mt-4 text-gray-600">
        Already have an account?{" "}
        <Link href="/auth/signin" className="text-blue-600 hover:underline">
          Sign In
        </Link>
      </p>
    </div>
  );
}