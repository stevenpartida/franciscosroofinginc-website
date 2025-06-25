// app/(admin)/admin/AdminClient.tsx
"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AdminClient() {
  return (
    <main className="flex flex-row min-h-screen w-full">
      <section className="basis-2/5 flex flex-col bg-green-200">
        <div className="bg-pink-50 flex flex-row items-center justify-between p-4">
          <Link href="/">
            <Image
              src="/logoBlack.png"
              alt="Logo"
              width={64}
              height={64}
              className=""
            />
          </Link>

          <Button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="cursor-pointer bg-red-500 text-white hover:bg-red-600 transition-colors duration-200"
          >
            Sign Out
          </Button>
        </div>
      </section>
      <section className="basis-3/5 flex items-center justify-center bg-blue-300">
        <div>Grid</div>
      </section>
    </main>
  );
}
