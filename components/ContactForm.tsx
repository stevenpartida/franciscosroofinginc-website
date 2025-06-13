"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  address: z.string().min(5, "Address is required"),
  message: z.string().min(10, "Message must be at least 10 characters long"),
});

type ContactFormValues = z.infer<typeof formSchema>;

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-xl mx-auto grid grid-cols-1 grid-rows-6 gap-2 rounded-lg shadow-lg bg-blue-100"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 text-center">
              <FormControl>
                <Input
                  {...field}
                  className="h-9 px-3 py-1.5"
                  placeholder="Your Name"
                />
              </FormControl>
              <FormMessage className="mt-1 text-sm text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 text-center">
              <FormControl>
                <Input
                  {...field}
                  placeholder="Phone Number"
                  className="h-9 px-3 py-1.5"
                />
              </FormControl>
              <FormMessage className="mt-1 text-sm text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 text-center">
              <FormControl>
                <Input
                  type="tel"
                  {...field}
                  className="h-9 px-3 py-1.5"
                  placeholder="Address"
                />
              </FormControl>
              <FormMessage className="mt-1 text-sm text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 text-center">
              <FormControl>
                <Input
                  type="tel"
                  {...field}
                  className="h-9 px-3 py-1.5"
                  placeholder="Email"
                />
              </FormControl>
              <FormMessage className="mt-1 text-sm text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 text-center">
              <FormControl>
                <Textarea {...field} rows={5} placeholder="Message" />
              </FormControl>
              <FormMessage className="mt-1 text-sm text-red-600" />
            </FormItem>
          )}
        />

        <Button type="submit" className="" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </Button>

        {status === "sent" && (
          <p className="text-green-600">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-600">Something went wrong. Try again.</p>
        )}
      </form>
    </Form>
  );
}

export default ContactForm;
