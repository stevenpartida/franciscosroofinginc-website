import Navbar from "@/components/Navbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col bg-white ">
      <main className="flex-grow ">{children}</main>
    </div>
  );
}
