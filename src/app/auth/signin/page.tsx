"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { FaBoxOpen, FaGoogle, FaLock } from "react-icons/fa6";
import Button from "@/app/components/ui/Button";
import { MdEmail } from "react-icons/md";

export default function SignIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // simulate auth
    localStorage.setItem("logged_in", "true");
    router.replace("/dashboard");
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-[#F9FAFB] px-6 py-[163.5px]">
      {/* Logo */}
      <div className="bg-[#800020] py-4 px-5 rounded-full flex items-center justify-center">
        <FaBoxOpen size={30} className="text-white" />
      </div>

      {/* Header */}
      <h2 className="font-bold text-3xl text-[#111827] mt-4">Welcome Back</h2>
      <p className="text-[#4B5563] mt-2">
        Sign in to manage your store inventory
      </p>

      {/* FORM */}
      <form onSubmit={handleSignIn} className="w-full mt-8 flex flex-col gap-6">
        {/* Email */}
        <div className="flex flex-col gap-2 w-full relative">
          <label htmlFor="email" className="font-medium text-sm text-gray-700">
            Email Address
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <MdEmail />
            </span>
            <input
              type="email"
              id="email"
              required
              placeholder="you@company.com"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white 
                focus:outline-none focus:ring-2 focus:ring-[#800020]/40 focus:border-[#800020] 
                transition-all text-gray-700 placeholder:text-[#9CA3AF]"
            />
          </div>
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2 w-full relative">
          <label
            htmlFor="password"
            className="font-medium text-sm text-gray-700"
          >
            Password
          </label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <FaLock />
            </span>
            <input
              type="password"
              id="password"
              required
              placeholder="Enter your password"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg bg-white 
                focus:outline-none focus:ring-2 focus:ring-[#800020]/40 focus:border-[#800020] 
                transition-all text-gray-700 placeholder:text-[#9CA3AF]"
            />
          </div>
        </div>

        {/* Remember + Forgot Password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-[#4B5563]">
            <input type="checkbox" id="remember-me" />
            Remember me
          </label>

          <Link
            href="/auth/reset-password"
            className="text-[#800020] font-medium text-sm hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        {/* Sign In Button */}
        <Button type="submit" loading={loading} variant="primary">
          Sign In
        </Button>

        {/* Divider with lines */}
        <div className="flex items-center gap-4">
          <hr className="flex-1 border-t border-gray-300" />
          <span className="text-[#6B7280] text-sm">Or continue with</span>
          <hr className="flex-1 border-t border-gray-300" />
        </div>

        {/* Google Button */}
        <Button
          onClick={handleSignIn}
          loading={loading}
          variant="secondary"
          className="flex flex-row items-center justify-center gap-2"
        >
          <FaGoogle className="text-[#EF4444]" /> Continue with Google
        </Button>
      </form>

      {/* Sign Up Redirect */}
      <p className="mt-4 text-gray-600 text-sm">
        Don’t have an account?{" "}
        <Link
          href="/auth/signup"
          className="text-blue-600 hover:underline font-medium"
        >
          Sign Up
        </Link>
      </p>
    </section>
  );
}
