"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const res = await signIn("credentials", {
      redirect: false,
      username: formData.get("username"),
      password: formData.get("password"),
    });

    if (res?.error) {
      setError("Invalid username or password");
    } else {
      router.push("/admin");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-6 space-y-4">
      <h1 className="text-xl font-bold">Admin Login</h1>
      {error && <p className="text-red-600">{error}</p>}

      <input
        name="username"
        placeholder="Username"
        className="border p-2 w-full"
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        className="border p-2 w-full"
        required
      />

      <button type="submit" className="bg-black text-white px-4 py-2 w-full">
        Login
      </button>
    </form>
  );
}
