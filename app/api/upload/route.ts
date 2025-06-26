// app/api/upload/route.ts
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  const formData = await req.formData();
  const title = formData.get("title") as string;
  const category = formData.get("category") as string;
  const year = formData.get("year") as string;
  const file = formData.get("image") as File | null;

  if (!title || !category || !year || !file) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `projects/${fileName}`; // ✅ folder inside your bucket

  // ✅ Upload file to Supabase Storage
  const { error: uploadError } = await supabase.storage
    .from("franciscos-roofing-project") // your bucket name
    .upload(filePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (uploadError) {
    console.error("Upload error:", uploadError.message);
    return NextResponse.json({ message: "Upload failed" }, { status: 500 });
  }

  // ✅ Generate public URL correctly
  const { publicUrl } = supabase.storage
    .from("franciscos-roofing-project")
    .getPublicUrl(filePath).data;

  console.log("🖼️ Public image URL:", publicUrl);

  if (!publicUrl) {
    return NextResponse.json(
      { message: "Could not generate image URL" },
      { status: 500 }
    );
  }

  // ✅ Insert project record into your database
  const { error: dbError } = await supabase.from("Projects").insert({
    title,
    category,
    year: parseInt(year),
    image_url: publicUrl,
  });

  if (dbError) {
    console.error("DB insert error:", dbError.message);
    return NextResponse.json({ message: "DB insert failed" }, { status: 500 });
  }

  return NextResponse.json({ message: "Success", imageUrl: publicUrl });
}
