"use client";

import { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectDialog from "@/components/ProjectDialog";
import { getProjects } from "@/lib/supabase/database/client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Admin() {
  const [projects, setProjects] = useState<any[]>([]);

  const router = useRouter();

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/sign-in");
  };

  useEffect(() => {
    getProjects().then(setProjects);
  }, []);
  return (
    <main className="min-h-screen">
      <header className=" p-4 flex flex-row items-center justify-between ">
        <div>
          <Link href="/">
            <Image src="/logoBlack.png" alt="" width={64} height={64} />
          </Link>
        </div>

        <div className="flex flex-row gap-2">
          <ProjectDialog
            onProjectCreated={(project) => {
              setProjects((prev) => [project, ...prev]);
            }}
          />
          <Button variant="outline" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      </header>
      <section
        className="
    grid
    grid-cols-2
    sm:grid-cols-3
    md:grid-cols-4
    lg:grid-cols-5
    gap-3
    p-4
  "
      >
        {projects.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            isAdmin
            onDeleted={(id) =>
              setProjects((prev) => prev.filter((p) => p.id !== id))
            }
          />
        ))}
      </section>
    </main>
  );
}
