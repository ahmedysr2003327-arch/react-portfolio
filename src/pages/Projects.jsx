import { useMemo, useState } from "react";
import ProjectCard from "../components/ProjectCard";

const data = [
    {
        id: 1,
        title: "Modern Portfolio",
        body: "A stunning portfolio built with React and Tailwind CSS.",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
        link: "https://protfolioj.vercel.app/   ",
        tech: ["React", "Tailwind", "Framer Motion"],
    },

    {
        id: 2,
        title: "Blog App",
        body: "Responsive ecommerce application with cart and payment.",
        image:
            "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
        link: "https://example.com",
        tech: ["Redux", "API", "React"],
    },

    {
        id: 3,
        title: "System student management",
        body: "Task management dashboard with analytics and charts.",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        link: "https://e3maralazhar.vercel.app/",
        tech: ["Charts", "Tailwind", "React"],
    },
    {
        id: 3,
        title: "System student management",
        body: "Task management dashboard with analytics and charts.",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        link: "https://e3maralazhar.vercel.app/",
        tech: ["Charts", "Tailwind", "React"],
    },
];

export default function Projects() {
    const [search, setSearch] = useState("");

    const filteredProjects = useMemo(() => {
        return data.filter((p) =>
            p.title.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    return (
        <section className="min-h-screen bg-[#16171d] px-6 py-10 text-white">
            {/* Title */}
            <div className="mb-16 text-center">
                <h1 className="mb-5 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-5xl font-extrabold text-transparent">
                    My Projects
                </h1>

                <p className="mx-auto text-center w-full text-lg text-gray-400">
                    A collection of modern frontend projects built using React
                    and beautiful UI experiences.
                </p>
            </div>

            {/* Search */}
            <div className="mx-auto mb-14 max-w-2xl">
                <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search projects..."
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none focus:border-cyan-400"
                />
            </div>

            {/* Grid */}
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                    />
                ))}
            </div>
        </section>
    );
}