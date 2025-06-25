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

  try {
    // Prepare filename and path
    const fileExt = file.name.split(".").pop();
    const fileName = `${Date.now()}.${fileExt}`;
    const filePath = `projects/${fileName}`;

    // Upload image to Supabase Storage
    const { error: uploadError } = await supabase.storage
      .from("franciscos-roofing-project")
      .upload(filePath, file, {
        cacheControl: "3600",
        upsert: false,
      });

    if (uploadError) {
      console.error("Upload error:", uploadError.message);
      return NextResponse.json(
        { message: "Upload failed", detail: uploadError.message },
        { status: 500 }
      );
    }

    // Get public URL
    const {
      data: { publicUrl },
    } = supabase.storage
      .from("franciscos-roofing-project")
      .getPublicUrl(filePath);

    // Insert project into database
    const { error: dbError } = await supabase.from("Projects").insert({
      title,
      category,
      year: parseInt(year),
      image_url: publicUrl,
    });

    if (dbError) {
      console.error("DB insert error:", dbError.message);
      return NextResponse.json(
        { message: "DB insert failed", detail: dbError.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "Success", image_url: publicUrl });
  } catch (err) {
    console.error("Unexpected error:", err);
    return NextResponse.json(
      {
        message: "Server error",
        detail: err instanceof Error ? err.message : err,
      },
      { status: 500 }
    );
  }
}
