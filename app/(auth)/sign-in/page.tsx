"use client";

import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { Input } from "@/components/ui/input";

import { SignInSchema } from "@/lib/validation/project.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof SignInSchema>) {
    try {
      setLoading(true);

      const email = data.email;
      const password = data.password;

      const supabase = createClient();
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.log(error.message);
        return;
      }

      router.push("/admin");
    } catch (err) {
      console.log("Error", err);
    } finally {
      setLoading(false);
    }

    console.log(data.email);
  }

  return (
    <main className="min-h-screen bg-neutral-100 flex items-center justify-center">
      <header></header>
      <div className="flex justify-center w-full sm:max-w-md ">
        <Card className="w-full sm:max-w-md">
          <CardHeader className="text-center items-center">
            <CardTitle>
              <Link href="/" className="block w-fit mx-auto">
                <Image src="/logoBlack.png" alt="" width={120} height={120} />
              </Link>
            </CardTitle>
            <CardDescription>
              Sign in to access project controls
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form id="sign-in-form" onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup>
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>Email</FieldLabel>
                      <Input
                        {...field}
                        id="sign-in-form-email"
                        aria-invalid={fieldState.invalid}
                        placeholder="your@email.com"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                ></Controller>
                <Controller
                  name="password"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel>Password</FieldLabel>
                      <Input
                        {...field}
                        id="sign-in-form-password"
                        aria-invalid={fieldState.invalid}
                        placeholder="password"
                        autoComplete="off"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                ></Controller>
              </FieldGroup>
            </form>
          </CardContent>
          <CardFooter className="mb-4">
            <Field orientation="horizontal">
              <Button
                type="button"
                variant="outline"
                onClick={() => form.reset()}
              >
                Reset
              </Button>
              <Button type="submit" form="sign-in-form">
                Submit
              </Button>
            </Field>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
};

export default SignIn;
