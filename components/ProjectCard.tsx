import Image from "next/image";

interface Project {
  image_url: string;
  title: string;
  category: string;
  year: number;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="w-full max-w-[400px]">
      {/* Image (square, cropped) */}
      <div className="relative aspect-square overflow-hidden ">
        <Image
          src={project.image_url}
          alt={project.title}
          fill
          className="object-cover"
          sizes="400px"
        />
      </div>

      {/* Text */}
      <div className="mt-3">
        <h3 className="text-lg font-manrope font-medium leading-tight capitalize text-black">
          {project.title}
        </h3>
        <p className="text-lg font-manrope text-neutral-500 uppercase tracking-wide">
          {project.category}
        </p>
        <p className="text-lg text-black font-manrope ">{project.year}</p>
      </div>
    </div>
  );
}
