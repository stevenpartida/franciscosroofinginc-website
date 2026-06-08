"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { useRef, useState } from "react";

const MIN_SUBMIT_MS = 2000;

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
    "idle",
  );
  const mountedAt = useRef<number>(Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);

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
    const honeypot = honeypotRef.current?.value ?? "";
    const elapsed = Date.now() - mountedAt.current;

    if (honeypot || elapsed < MIN_SUBMIT_MS) {
      setStatus("sent");
      form.reset();
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/85c51058f403b7616452cb7fa3b2a762",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...data,
            _subject: "New Roofing Contact Submission!",
            _template: "box",
            _captcha: "false",
            _honey: honeypot,
            _replyto: data.email,
          }),
        },
      );

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };
  return (
    <Form {...form}>
      <motion.form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-md mx-auto grid grid-cols-2  gap-4 "
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      >
        <input
          ref={honeypotRef}
          type="text"
          name="_honey"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="absolute left-[-9999px] h-0 w-0 opacity-0"
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 text-center">
              <Label
                htmlFor="name"
                className="w-full font-roboto text-sm my-2 "
              >
                Full Name
              </Label>
              <FormControl className="bg-white">
                <Input
                  {...field}
                  className="h-9 px-3 py-5"
                  placeholder="ex. John Doe"
                />
              </FormControl>
              <FormMessage className="my-1 text-sm text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 text-center">
              <Label
                htmlFor="phone"
                className="w-full font-roboto text-sm my-2"
              >
                Phone Number
              </Label>
              <FormControl>
                <Input
                  {...field}
                  placeholder="(555) 000-0000"
                  className="h-9 px-3 py-5"
                />
              </FormControl>
              <FormMessage className="my-1 text-sm text-red-600" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-1 col-span-2 text-center">
              <Label
                htmlFor="address"
                className="w-full font-roboto text-sm mb-2"
              >
                Address
              </Label>
              <FormControl>
                <Input
                  {...field}
                  className="h-9 px-3 py-5"
                  placeholder="123 Main St, City, State, Zip"
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
            <FormItem className="flex flex-col gap-1 col-span-2 text-center">
              <Label
                htmlFor="email"
                className="w-full font-roboto text-sm mb-2"
              >
                Email
              </Label>
              <FormControl>
                <Input
                  type="email"
                  {...field}
                  className="h-9 px-3 py-5"
                  placeholder="you@email.com"
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
            <FormItem className="flex flex-col gap-1 col-span-2  text-center">
              <Label
                htmlFor="message"
                className="w-full font-roboto text-sm mb-2"
              >
                Message
              </Label>
              <FormControl>
                <Textarea
                  {...field}
                  rows={4}
                  className="w-full min-h-[150px] resize-none sm:resize-y rounded-md p-2 "
                  placeholder="How can we help you?"
                />
              </FormControl>
              <FormMessage className="mt-1 text-sm text-red-600" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="col-span-2 row-start-5 py-5 hover:cursor-pointer bg-black"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </Button>

        {status === "sent" && (
          <p className="text-green-600 text-center">
            Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center">
            Something went wrong. Try again.
          </p>
        )}
      </motion.form>
    </Form>
  );
}

export default ContactForm;
