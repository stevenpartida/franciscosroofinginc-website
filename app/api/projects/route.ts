import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "9");
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, error, count } = await supabase
    .from("Projects")
    .select("*", { count: "exact" }) // fetch row count for pagination
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) {
    return NextResponse.json(
      { message: "Failed to fetch projects", error: error.message },
      { status: 500 }
    );
  }

  return NextResponse.json({
    projects: data,
    page,
    pageSize: limit,
    total: count,
    totalPages: Math.ceil((count ?? 0) / limit),
  });
}
