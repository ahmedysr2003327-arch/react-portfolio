import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
    return (
        <motion.div
            className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 dark:border-slate-700 h-140 flex flex-col justify-between"
            whileHover={{ y: -8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            {/* Image Container */}
            <div className="relative overflow-hidden">
                <motion.img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Hover Actions */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-3">
                        <motion.a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-slate-900 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaExternalLinkAlt className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                            href="https://github.com/ahmedysr2003327-arch?tab=repositories"
                            target="_blank"
                            rel="noreferrer"
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white hover:text-slate-900 transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaGithub className="w-5 h-5" />
                        </motion.a>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300 line-clamp-1 " >
                    {project.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                    {project.body}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((item, index) => (
                        <motion.span
                            key={index}
                            className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-xs font-medium rounded-full border border-indigo-200 dark:border-indigo-800"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            {item}
                        </motion.span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 btn-primary text-center text-sm py-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        View Live
                    </motion.a>
                    <motion.a
                        href={`https://github.com/ahmedysr2003327-arch/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-600 dark:text-slate-400 hover:border-indigo-300 dark:hover:border-indigo-600 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaGithub className="w-4 h-4" />
                    </motion.a>
                </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    );
}