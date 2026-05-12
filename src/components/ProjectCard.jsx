import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
    return (
        <motion.div
            whileHover={{
                y: -10,
                scale: 1.02,
            }}
            transition={{ duration: 0.3 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl"
        >
            {/* Image */}
            <div className="overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 z-10 p-6">
                <h2 className="mb-2 text-3xl font-bold text-white">
                    {project.title}
                </h2>

                <p className="mb-4 text-gray-300">
                    {project.body}
                </p>

                {/* Tech Stack */}
                <div className="mb-5 flex flex-wrap gap-2">
                    {project.tech.map((item, index) => (
                        <span
                            key={index}
                            className="rounded-full bg-white/10 px-3 py-1 text-xs text-white"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                {/* Button */}
                <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-black transition hover:scale-105"
                >
                    View Project
                    <ExternalLink size={18} />
                </a>
            </div>

            {/* Border Glow */}
            <div className="absolute inset-0 rounded-3xl border border-transparent transition duration-500 group-hover:border-cyan-400/40"></div>
        </motion.div>
    );
}