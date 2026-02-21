import { error } from "console";
import { createClient } from "../client";

type UploadImageProps = {
  file: File;
  bucket: string;
};

function getStorage() {
  const { storage } = createClient();
  return storage;
}

export async function uploadImage({ file, bucket }: UploadImageProps) {
  const fileName = file.name;
  const fileExtension = fileName.slice(fileName.lastIndexOf(".") + 1);
  const path = `projects/${crypto.randomUUID()}.${fileExtension}`;

  const storage = getStorage();

  const { data, error } = await storage.from(bucket).upload(path, file, {
    contentType: file.type,
    upsert: false,
  });

  if (error) {
    return { imageUrl: "", error: "Image upload failed" };
  }

  const imageUrl = `${process.env
    .NEXT_PUBLIC_SUPABASE_URL!}/storage/v1/object/public/${bucket}/${
    data?.path
  }`;

  return { imageUrl, error: "" };
}
