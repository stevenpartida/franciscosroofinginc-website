import React from "react";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export default function page() {
  return (
    <main className="px-4 py-6 lg:px-14">
      <section className="flex flex-col gap-y-12 lg:grid lg:grid-cols-2 lg:grid-rows-1 gap-4">
        <div className="px-2 lg:p-12">
          <ContactInfo />
        </div>
        <div className="scroll-px-2 lg:p-12">
          <ContactForm />
        </div>
      </section>
    </main>
  );
}
