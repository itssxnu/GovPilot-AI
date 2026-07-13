"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Bank, ArrowRight, Warning } from "@phosphor-icons/react";

export default function RegisterPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [nic, setNic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validate NIC format (Sri Lankan NICs are 10 characters ending in V/X, or 12 digits)
    const cleanNic = nic.trim().toUpperCase();
    const nicRegex = /^([0-9]{9}[vVxX]|[0-9]{12})$/;
    if (!nicRegex.test(cleanNic)) {
      setError("Please enter a valid Sri Lankan National Identity Card (NIC) number (e.g. 198428109283 or 842810928V).");
      setLoading(false);
      return;
    }

    try {
      // Send user details to register API route
      const regRes = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          nic,
          email,
          password,
        }),
      });

      const regData = await regRes.json();

      if (!regRes.ok) {
        setError(regData.error || "Registration failed. Please try again.");
        setLoading(false);
        return;
      }

      // Registration succeeded, sign in immediately
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Registration succeeded but sign in failed. Please try signing in manually.");
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setError("An error occurred during registration. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-dvh justify-center items-center px-4 py-8 bg-slate-50 font-sans relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(241,245,249,0.7),rgba(248,250,252,1))]" />
      
      {/* Form Container with extending coordinate grid lines */}
      <div className="relative w-full max-w-md my-8 z-10">
        
        {/* Extended Blueprint Dashed Lines */}
        <div className="absolute -top-12 -bottom-12 left-0 w-[1px] border-l border-dashed border-slate-200 pointer-events-none" />
        <div className="absolute -top-12 -bottom-12 right-0 w-[1px] border-r border-dashed border-slate-200 pointer-events-none" />
        <div className="absolute -left-12 -right-12 top-0 h-[1px] border-t border-dashed border-slate-200 pointer-events-none" />
        <div className="absolute -left-12 -right-12 bottom-0 h-[1px] border-b border-dashed border-slate-200 pointer-events-none" />

        {/* Content Box */}
        <div className="bg-white/80 backdrop-blur-md border border-slate-200 p-8 md:p-10 rounded-2xl shadow-xl space-y-6">
          
          {/* Logo Header */}
          <div className="text-center space-y-3">
            <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200 text-primary flex items-center justify-center mx-auto shadow-sm">
              <Bank className="w-6 h-6" weight="fill" />
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Register Citizen Account
            </h2>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              Sri Lankan Official Citizen Portal
            </p>
          </div>

          {/* Error Notification */}
          {error && (
            <div className="flex gap-2.5 p-4 rounded-xl border border-rose-200 bg-rose-50 text-rose-800 text-xs leading-relaxed">
              <Warning className="w-5 h-5 flex-shrink-0 text-rose-600" weight="fill" />
              <p className="font-semibold">{error}</p>
            </div>
          )}

          {/* Register Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label
                htmlFor="fullName"
                className="block text-xs font-bold text-slate-500 uppercase tracking-wider"
              >
                Full Name (as in NIC)
              </label>
              <input
                id="fullName"
                type="text"
                required
                disabled={loading}
                placeholder="K. L. Perera"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-950 placeholder-slate-450 focus:bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-base disabled:opacity-60"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="nic"
                className="block text-xs font-bold text-slate-500 uppercase tracking-wider"
              >
                NIC Number
              </label>
              <input
                id="nic"
                type="text"
                required
                disabled={loading}
                placeholder="e.g. 198428109283"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-955 placeholder-slate-450 focus:bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-base disabled:opacity-60"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="block text-xs font-bold text-slate-500 uppercase tracking-wider"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                disabled={loading}
                placeholder="name@domain.lk"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-955 placeholder-slate-450 focus:bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-base disabled:opacity-60"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="password"
                className="block text-xs font-bold text-slate-500 uppercase tracking-wider"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                required
                disabled={loading}
                placeholder="Min 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-11 px-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-955 placeholder-slate-450 focus:bg-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all text-base disabled:opacity-60"
              />
            </div>

            {/* Gradient Bevel Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 flex items-center justify-center gap-2 bg-gradient-to-b from-primary-light to-primary border border-primary-dark/45 text-white text-sm font-bold rounded-xl active-press-trigger transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] hover:from-primary hover:to-primary-dark disabled:opacity-40"
            >
              {loading ? "Registering..." : "Register"}
              {!loading && <ArrowRight className="w-4 h-4" weight="bold" />}
            </button>
          </form>

          {/* Footer Link */}
          <div className="text-center text-xs font-bold text-slate-500 uppercase tracking-wider">
            Already registered?{" "}
            <Link
              href="/login"
              className="text-primary hover:underline transition-all ml-1"
            >
              Sign In
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
