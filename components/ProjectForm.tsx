"use client";

import { useState, useRef } from "react";
import { CloudUpload } from "lucide-react"; // Optional: install lucide-react

export default function ProjectForm() {
  const [form, setForm] = useState({
    title: "",
    category: "residential",
    year: "",
    image: null as File | null,
  });
  const [status, setStatus] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFileDrop(e: React.DragEvent) {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setForm((prev) => ({ ...prev, image: file }));
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setForm((prev) => ({ ...prev, image: file }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.image) {
      setStatus("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("category", form.category);
    formData.append("year", form.year);
    formData.append("image", form.image);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      setStatus("Project uploaded successfully!");
      setForm({ title: "", category: "residential", year: "", image: null });
    } else {
      const error = await res.json();
      setStatus(`Error: ${error.message || "Upload failed"}`);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 max-w-md mx-auto">
      {/* Dropzone */}
      <div
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleFileDrop}
        className="border-2 border-dashed border-blue-400 rounded-md p-8 text-center cursor-pointer bg-blue-50 hover:bg-blue-100 transition"
      >
        <CloudUpload className="mx-auto text-blue-500 mb-2" size={32} />
        <p>
          Drag & Drop your files or{" "}
          <span className="text-blue-600 underline">Browse</span>
        </p>
        {form.image && (
          <p className="mt-2 text-sm text-gray-600">{form.image.name}</p>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />

      <input
        type="text"
        placeholder="Title"
        className="w-full border p-2"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
        required
      />

      <select
        className="w-full border p-2"
        value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      >
        <option value="residential">Residential</option>
        <option value="commercial">Commercial</option>
      </select>

      <input
        type="number"
        placeholder="Year (e.g., 2025)"
        className="w-full border p-2"
        value={form.year}
        onChange={(e) => setForm({ ...form, year: e.target.value })}
        required
      />

      <button type="submit" className="bg-black text-white px-4 py-2 w-full">
        Upload Project
      </button>

      {status && <p className="text-center mt-2">{status}</p>}
    </form>
  );
}
