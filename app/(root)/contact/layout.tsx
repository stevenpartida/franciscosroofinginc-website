import Navbar from "@/components/Navbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex flex-col bg-white ">
      <Navbar theme="dark" />
      <main className="flex-grow pt-26 ">{children}</main>
    </div>
  );
}
