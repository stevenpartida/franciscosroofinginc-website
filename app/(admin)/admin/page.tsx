// app/(admin)/admin/page.tsx
import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth";

export default async function AdminPage() {
  const session = await getAuthSession();

  if (!session) {
    redirect("/admin/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-2xl font-bold">This is the admin landing</h1>
    </div>
  );
}
