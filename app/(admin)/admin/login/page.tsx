"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { main } from "framer-motion/client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    <main className="flex items-center justify-center min-h-screen bg-white">
      <form
        onSubmit={handleSubmit}
        className="max-w-sm mx-auto p-6  shadow-lg rounded-lg"
      >
        <div>
          <h1 className="text-xl font-bold uppercase text-center">
            Admin Login
          </h1>
          <Image
            src="/logoBlack.png"
            alt="Logo"
            width={100}
            height={100}
            className="mx-auto mb-4"
          ></Image>
          <p className="text-sm text-accent-foreground text-center mb-4">
            Login in to gain admin controls
          </p>
        </div>

        <div className="space-y-4">
          <input
            name="username"
            placeholder="Username"
            className="border rounded-md border-black p-2 w-full"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="border rounded-md border-black p-2 w-full"
            required
          />

          <button
            type="submit"
            className="bg-black rounded-md text-white px-4 py-2 w-full"
          >
            Login
          </button>
        </div>
        {error && <p className="text-red-600 text-center mt-4">{error}</p>}
      </form>
    </main>
  );
}
