import React from "react";
import ContactForm from "@/components/ContactForm";

export default function page() {
  return (
    <main className="px-4 lg:px-14">
      <section className="grid grid-cols-2 grid-rows-1 gap-4">
        <div className="bg-red-100">Company Conatact Info</div>
        <div className="bg-green-400">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
