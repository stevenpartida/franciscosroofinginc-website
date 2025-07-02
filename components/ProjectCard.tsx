import Image from "next/image";

interface Project {
  image_url: string;
  title: string;
  category: string;
  year: number;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="w-full max-w-[300px] ">
      {/* Image (square, cropped) */}
      <div className="relative aspect-square w-full  overflow-hidden ">
        <Image
          src={project.image_url}
          alt={project.title}
          fill
          className="object-cover"
          sizes="300px"
        />
      </div>

      {/* Text */}
      <div className="mt-2">
        <h3 className="text-base font-manrope font-semibold leading-tight capitalize text-black">
          {project.title}
        </h3>
        <p className=" text-base font-manrope text-neutral-500 uppercase tracking-wide">
          {project.category}
        </p>
        <p className="mt-2 text-base text-black font-semibold font-manrope ">
          {project.year}
        </p>
      </div>
    </div>
  );
}
