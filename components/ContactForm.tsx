"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@headlessui/react";
import { Textarea } from "@headlessui/react";
import { Button } from "./ui/button";
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
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
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
      first_name: "",
      last_name: "",
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
        className="max-w-xl mx-auto grid grid-cols-2 grid-rows-5 gap-4 "
      >
        <FormField
          control={form.control}
          name="first_name"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel className="text-sm -mb-3">First Name</FormLabel>
              <FormControl className="border rounded-md">
                <Input {...field} className="h-9 px-3" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm -mb-3">Last Name</FormLabel>
              <FormControl className="border rounded-md">
                <Input type="email" {...field} className="h-9 px-3 py-1.5" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm -mb-3">Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" {...field} className="h-9 px-3 py-1.5" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm -mb-3">Email</FormLabel>
              <FormControl>
                <Input type="tel" {...field} className="h-9 px-3 py-1.5" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel className="text-sm -mb-3">Address</FormLabel>
              <FormControl>
                <Input {...field} className="h-9 px-3 py-1.5" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="col-span-2 row-start-4">
              <FormLabel className="text-sm -mb-3">Message</FormLabel>
              <FormControl>
                <Textarea {...field} rows={5} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="col-span-2 row-start-5"
          disabled={status === "sending"}
        >
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
