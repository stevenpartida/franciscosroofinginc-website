import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";

export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!,
    {
      cookies: {
        getAll: () => req.cookies.getAll(),
        setAll: () => {},
      },
    },
  );

  // optional: auth check
  const { data: userData } = await supabase.auth.getUser();
  if (!userData.user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  // get image path
  const { data: project } = await supabase
    .from("projects")
    .select("image_url")
    .eq("id", id)
    .single();

  if (!project?.image_url) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  const bucket = "project-images";
  const pathname = new URL(project.image_url).pathname;
  const prefix = `/storage/v1/object/public/${bucket}/`;
  const objectPath = pathname.slice(prefix.length);

  // delete image
  await supabase.storage.from(bucket).remove([objectPath]);

  // delete row
  await supabase.from("projects").delete().eq("id", id);

  return NextResponse.json({ ok: true });
}
