"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { IconPlus } from "@tabler/icons-react";
import { IconPhoto } from "@tabler/icons-react";
import { uploadImage } from "@/lib/supabase/storage/client";
import { uploadData } from "@/lib/supabase/database/client";
import { projectSchema } from "@/lib/validation/project.schema";

type ProjectDialogProps = {
  onProjectCreated?: (project: any) => void;
};

const ProjectDialog = ({ onProjectCreated }: ProjectDialogProps) => {
  // Replaces html image imput with ref and creates preview url for selected image
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  // Form states for project type, image file, and errors
  const [projectType, setProjectType] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [open, setOpen] = useState(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);

    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const raw = Object.fromEntries(formData);

    const parsed = projectSchema.safeParse({
      ...raw,
      project_type: projectType,
    });

    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      setErrors({
        project_location: fieldErrors.project_location?.[0] ?? "",
        project_year: fieldErrors.project_year?.[0] ?? "",
        service_type: fieldErrors.service_type?.[0] ?? "",
        material_type: fieldErrors.material_type?.[0] ?? "",
        project_type: fieldErrors.project_type?.[0] ?? "",
      });
      return;
    }

    if (!imageFile) {
      setErrors((prev) => ({ ...prev, project_image: "Image is required" }));
      return;
    }

    setErrors({});

    const { imageUrl, error } = await uploadImage({
      file: imageFile,
      bucket: "project-images",
    });

    if (error) return console.error(error);

    const projectData = {
      ...parsed.data,
      image_url: imageUrl,
    };

    const { data: insertedProject, error: tableError } = await uploadData({
      table: "projects",
      data: projectData,
    });

    if (tableError) return console.error(tableError);

    console.log(insertedProject);

    onProjectCreated?.(insertedProject);
    resetForm();
    setOpen(false);
  };

  const formRef = useRef<HTMLFormElement>(null);

  const resetForm = () => {
    formRef.current?.reset();
    setProjectType("");
    setImageFile(null);
    setPreviewUrl(null);
    setErrors({});
    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="flex flex-row items-center gap-2 justify-center text-neutral-950"
          >
            <IconPlus></IconPlus>
            <span>New Project</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form ref={formRef} onSubmit={handleSubmit}>
            <DialogHeader>
              <DialogTitle>Add new project</DialogTitle>
            </DialogHeader>

            <div className="grid gap-4">
              <div>
                <Input
                  type="file"
                  ref={imageInputRef}
                  hidden
                  accept="image/*"
                  onChange={handleImageChange}
                ></Input>
                <Label
                  htmlFor="project_image"
                  className={errors.project_image ? "text-red-500" : ""}
                >
                  {errors.project_image || "Project Image"}
                </Label>
                <div
                  role="button"
                  onClick={() => imageInputRef.current?.click()}
                  className="w-full h-64 border border-dashed border-neutral-700 rounded-md flex items-center justify-center hover:bg-muted cursor-pointer overflow-hidden mt-2.5"
                >
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <IconPhoto className="w-20 h-20 text-neutral-700" />
                  )}
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="grid gap-3">
                  <Label
                    htmlFor="project_location"
                    className={errors.project_location ? "text-red-500" : ""}
                  >
                    {errors.project_location || "Project Location"}
                  </Label>
                  <Input
                    id="project_location"
                    name="project_location"
                    placeholder="Pasadena"
                  />
                </div>
                <div className="grid gap-3">
                  <Label
                    htmlFor="project_year"
                    className={errors.project_year ? "text-red-500" : ""}
                  >
                    {errors.project_year || "Project Year"}
                  </Label>
                  <Input
                    id="project_year"
                    name="project_year"
                    type="number"
                    placeholder="2026"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-2">
                <div className="grid gap-3">
                  <Label
                    htmlFor="service_type"
                    className={errors.service_type ? "text-red-500" : ""}
                  >
                    {errors.service_type || "Service Type"}
                  </Label>
                  <Input
                    id="service_type"
                    name="service_type"
                    placeholder="Roof Replacement"
                  />
                </div>
                <div className="grid gap-3">
                  <Label
                    htmlFor="material_type"
                    className={errors.material_type ? "text-red-500" : ""}
                  >
                    {errors.material_type || "Material Type"}
                  </Label>
                  <Input
                    id="material_type"
                    name="material_type"
                    placeholder="Clay Tile"
                  />
                </div>
              </div>
              <div className="grid gap-3">
                <Label
                  htmlFor="project-type"
                  className={errors.project_type ? "text-red-500" : ""}
                >
                  {errors.project_type || "Select Project Type"}
                </Label>
                <Select value={projectType} onValueChange={setProjectType}>
                  <SelectTrigger className="w-full border-neutral-950">
                    <SelectValue placeholder="Project Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter className="mt-2.5">
              <DialogClose asChild>
                <Button variant="outline" onClick={resetForm}>
                  Cancel
                </Button>
              </DialogClose>
              <Button type="submit">Upload Project</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </>
    </Dialog>
  );
};

export default ProjectDialog;
