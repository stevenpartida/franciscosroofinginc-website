import Image from "next/image";

interface Project {
  image_url: string;
  title: string;
  category: string;
  year: number;
}

export default function ProjectCard({ project }: { project: Project }) {
  console.log("Image URL:", project.image_url);
  return (
    <div className="border rounded p-4 shadow-sm w-[300px]">
      <Image
        src={project.image_url}
        alt={project.title}
        width={300}
        height={200}
        className="object-cover rounded"
      />
      <h3 className="font-semibold mt-2">{project.title}</h3>
      <p className="text-sm text-gray-600">
        {project.category} · {project.year}
      </p>
    </div>
  );
}
