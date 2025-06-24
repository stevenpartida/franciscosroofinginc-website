// app/(admin)/admin/page.tsx
import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth";
import { main } from "framer-motion/client";
import { Button } from "@/components/ui/button";

export default async function AdminPage() {
  const session = await getAuthSession();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <main className="flex flex-row min-h-screen w-full">
      <section className="basis-2/5 flex items-center justify-center bg-green-200">
        <div>Form</div>
      </section>
      <section className="basis-3/5 flex items-center justify-center bg-blue-300">
        <div>Grid</div>
      </section>
    </main>
  );
}
