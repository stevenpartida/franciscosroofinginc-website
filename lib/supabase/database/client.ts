import { createClient } from "../client";

type UploadDataArgs<T> = {
  table: string;
  data: T;
};

const supabase = createClient();

export async function uploadData<T>({ table, data }: UploadDataArgs<T>) {
  const { data: insertedData, error } = await supabase
    .from(table)
    .insert(data)
    .select()
    .single();

  if (error) {
    console.error("DB insert error:", error);
    return { data: null, error };
  }

  return { data: insertedData, error: null };
}

export async function getProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error("Fetch project error: ", error);
    return [];
  }

  return data ?? [];
}

export async function getProjectsByYear() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("project_year", {
      ascending: false,
    });

  if (error) {
    console.error("Fetch project error: ", error);
    return [];
  }

  return data ?? [];
}
