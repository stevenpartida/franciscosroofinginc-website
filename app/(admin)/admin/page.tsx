// app/(admin)/admin/page.tsx
import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth";
import AdminClient from "./AdminClient";
export default async function AdminPage() {
  const session = await getAuthSession();

  if (!session) {
    redirect("/admin/login");
  }

  return <AdminClient />;
}
