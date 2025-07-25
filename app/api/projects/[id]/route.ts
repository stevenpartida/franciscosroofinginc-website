import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Record<string, string> }
) {
  const projectId = params.id;

  // 1. Get project to retrieve image_url
  const { data: project, error: fetchError } = await supabase
    .from("Projects")
    .select("image_url")
    .eq("id", projectId)
    .single();

  if (fetchError || !project) {
    return NextResponse.json(
      { message: "Project not found", error: fetchError?.message },
      { status: 404 }
    );
  }

  // 2. Extract object path
  const match = project.image_url.match(
    /\/storage\/v1\/object\/public\/franciscos-roofing-project\/(.+)$/
  );
  const objectPath = match?.[1]; // e.g. "projects/filename.jpg"

  if (!objectPath) {
    return NextResponse.json(
      { message: "Invalid image path" },
      { status: 400 }
    );
  }

  // 3. Delete image from storage
  const { error: storageError } = await supabase.storage
    .from("franciscos-roofing-project")
    .remove([objectPath]);

  if (storageError) {
    console.error("Storage delete error:", storageError.message);
    // Still proceed to delete DB row
  }

  // 4. Delete project row
  const { error: dbError } = await supabase
    .from("Projects")
    .delete()
    .eq("id", projectId);

  if (dbError) {
    return NextResponse.json(
      { message: "Failed to delete project", error: dbError.message },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Project deleted successfully" },
    { status: 200 }
  );
}
