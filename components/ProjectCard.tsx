import React from "react";
import { IconMapPinFilled, IconTrash, IconEdit } from "@tabler/icons-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";

type ProjectCardProps = {
  project: {
    id: string;
    image_url: string;
    material_type: string;
    project_location: string;
    project_type: string;
    project_year: number;
    service_type: string;
  };
  isAdmin?: boolean;
  onDeleted?: (id: string) => void;
};

function ProjectCard({ project, isAdmin, onDeleted }: ProjectCardProps) {
  const handleDelete = async () => {
    const res = await fetch(`/api/projects/${project.id}`, {
      method: "DELETE",
    });
    if (res.ok) onDeleted?.(project.id);
  };

  return (
    <div className="relative aspect-square w-full overflow-hidden group rounded-xl">
      <Image
        src={project.image_url}
        alt={project.project_location}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 50vw,(max-width: 1200px) 33vw,20vw"
      />

      {/* <div className="absolute inset-0 z-10 bg-black/25 transition-all duration-300 group-hover:bg-black/45" /> */}

      <div
        className="
    absolute inset-0 z-10
    transition-all duration-300
    bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.15)_55%,rgba(0,0,0,0.6)_100%)]
    group-hover:bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.45)_55%,rgba(0,0,0,0.80)_100%)]
  "
      />

      {/* label */}
      <div className="absolute top-0 w-full h-full left-0 z-30 p-3 text-white flex flex-col justify-between ">
        <div className="flex flex-row align-middle justify-between">
          <Badge
            variant="secondary"
            className="shadow-sm text-sm inline-flex items-center gap-1"
          >
            <IconMapPinFilled className="h-5 w-5" />
            <span className="font-medium drop-shadow">
              {project.project_location}
            </span>
          </Badge>
          {isAdmin && (
            <div className="absolute top-3 right-3 z-40 flex gap-2 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              {/* <Button variant="outline" size="icon" className="h-7 w-7">
                <IconEdit className="h-5 w-5 text-black" />
              </Button> */}

              <Button
                variant="outline"
                size="icon"
                className="h-7 w-7 "
                onClick={handleDelete}
              >
                <IconTrash className="h-5 w-5 text-black" />
              </Button>
            </div>
          )}
        </div>
        <div
          className="
    text-white opacity-100 translate-y-0
    md:opacity-0 md:translate-y-2 md:group-hover:opacity-100 md:group-hover:translate-y-0
  "
        >
          <div className="flex flex-col items-start font-semibold">
            <div className="text-sm mb-1">{project.service_type}</div>
            {/* <div className="h-px w-[30%] bg-white/80" /> */}
            <div className="text-xs font-medium text-white">
              {project.material_type}
            </div>
          </div>
          <div className="flex flex-row justify-between mt-2.5 items-center gap-4 text-sm font-medium text-white/90">
            <div className="capitalize">{project.project_type}</div>
            <div>{project.project_year}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
