import Navbar from "@/components/Navbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar theme="dark" />
      <main className="flex-grow">{children}</main>
    </div>
  );
}
