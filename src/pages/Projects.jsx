import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { FaSearch } from "react-icons/fa";

const data = [
    {
        id: 1,
        title: "Modern Portfolio",
        body: "A stunning portfolio built with React and Tailwind CSS featuring smooth animations and responsive design.",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
        link: "https://ahmedyaser.vercel.app/",
        tech: ["React", "Tailwind", "Framer Motion"],
        category: "web",
    },

    {
        id: 2,
        title: "Blog App",
        body: "Responsive ecommerce application with cart functionality, payment integration, and modern UI.",
        image:
            "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
        link: "https://blog-main-z6cu.vercel.app/",
        tech: ["Redux", "API", "React"],
        category: "web",
    },

    {
        id: 3,
        title: "Student Management System",
        body: "Comprehensive dashboard with analytics, charts, and data visualization for educational management.",
        image:
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        link: "https://e3maralazhar.vercel.app/",
        tech: ["Charts", "Tailwind", "React"],
        category: "dashboard",
    },
];

const categories = ["all", "web", "dashboard", "mobile"];

export default function Projects() {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredProjects = useMemo(() => {
        return data.filter((project) => {
            const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) ||
                project.body.toLowerCase().includes(search.toLowerCase()) ||
                project.tech.some(tech => tech.toLowerCase().includes(search.toLowerCase()));
            const matchesCategory = selectedCategory === "all" || project.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [search, selectedCategory]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="projects" className="min-h-screen section-padding pt-24">
            <div className="container-max">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-2"
                >
                    <h1 className=" pb-4">My Projects</h1>
                    <div className="flex justify-center align-middle ">  <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A collection of modern frontend projects built using React and beautiful UI experiences.
                        Each project showcases different skills and technologies.
                    </p></div>
                </motion.div>

                {/* Filters */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12"
                >
                    {/* Category Filter */}
                    {/* <div className="flex flex-wrap justify-center gap-2 mb-6">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                    ? "bg-indigo-600 text-white shadow-lg"
                                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                                    }`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div> */}

                    {/* Search */}
                    <div className="max-w-md mx-auto relative">
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            type="text"
                            placeholder="Search projects..."
                            className="w-full pl-10 pr-4 py-3 rounded-full border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                        />
                    </div>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* No Results */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <p className="text-slate-500 dark:text-slate-400 text-lg">
                            No projects found matching your criteria.
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}