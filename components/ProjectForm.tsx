"use client";

import { image } from "framer-motion/client";
import { title } from "process";
import { useState } from "react";
import { set } from "react-hook-form";

export default function ProjectForm() {
  const [form, setForm] = useState({
    title: "",
    category: "residential",
    year: "",
    image: null as File | null,
  });
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.image) {
      setStatus("Please select an image.");
      return;
    }

    const formData = new FormData();
  }
}
