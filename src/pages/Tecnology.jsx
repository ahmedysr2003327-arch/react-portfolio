import { motion } from "framer-motion";

// 🔥 Icons
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiNextdotjs, SiTypescript, SiVite, SiFigma } from "react-icons/si";

// 🧠 Data
const techs = [
    {
        title: "React",
        desc: "Building interactive UI with reusable components and hooks",
        icon: FaReact,
        color: "text-blue-500",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
        title: "JavaScript",
        desc: "Core language for dynamic web applications and APIs",
        icon: FaJs,
        color: "text-yellow-500",
        bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
        borderColor: "border-yellow-200 dark:border-yellow-800",
    },
    {
        title: "TypeScript",
        desc: "Typed superset of JavaScript for better development experience",
        icon: SiTypescript,
        color: "text-blue-600",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
        title: "HTML",
        desc: "Structuring modern web pages with semantic markup",
        icon: FaHtml5,
        color: "text-orange-500",
        bgColor: "bg-orange-50 dark:bg-orange-900/20",
        borderColor: "border-orange-200 dark:border-orange-800",
    },
    {
        title: "CSS",
        desc: "Styling and creating responsive layouts",
        icon: FaCss3Alt,
        color: "text-blue-400",
        bgColor: "bg-blue-50 dark:bg-blue-900/20",
        borderColor: "border-blue-200 dark:border-blue-800",
    },
    {
        title: "Tailwind CSS",
        desc: "Utility-first CSS framework for rapid UI development",
        icon: SiTailwindcss,
        color: "text-cyan-500",
        bgColor: "bg-cyan-50 dark:bg-cyan-900/20",
        borderColor: "border-cyan-200 dark:border-cyan-800",
    },
    {
        title: "Next.js",
        desc: "React framework for production-ready applications",
        icon: SiNextdotjs,
        color: "text-slate-900 dark:text-slate-100",
        bgColor: "bg-slate-50 dark:bg-slate-900/20",
        borderColor: "border-slate-200 dark:border-slate-800",
    },
    {
        title: "Redux",
        desc: "State management for scalable React applications",
        icon: SiRedux,
        color: "text-purple-500",
        bgColor: "bg-purple-50 dark:bg-purple-900/20",
        borderColor: "border-purple-200 dark:border-purple-800",
    },
    {
        title: "Node.js",
        desc: "JavaScript runtime for server-side development",
        icon: FaNodeJs,
        color: "text-green-500",
        bgColor: "bg-green-50 dark:bg-green-900/20",
        borderColor: "border-green-200 dark:border-green-800",
    },
    {
        title: "Git",
        desc: "Version control system for collaborative development",
        icon: FaGitAlt,
        color: "text-orange-600",
        bgColor: "bg-orange-50 dark:bg-orange-900/20",
        borderColor: "border-orange-200 dark:border-orange-800",
    },
    {
        title: "Vite",
        desc: "Fast build tool and development server",
        icon: SiVite,
        color: "text-yellow-400",
        bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
        borderColor: "border-yellow-200 dark:border-yellow-800",
    },
    {
        title: "Figma",
        desc: "Design tool for UI/UX prototyping and collaboration",
        icon: SiFigma,
        color: "text-purple-400",
        bgColor: "bg-purple-50 dark:bg-purple-900/20",
        borderColor: "border-purple-200 dark:border-purple-800",
    },
];

// 🎯 Animation (Container)
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// 🎯 Animation (Card)
const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
    },
};

export default function Technology() {
    return (
        <section className="section-padding pt-24">
            <div className="container-max">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="mb-6">Technologies I Use</h1>
                    <div className="flex justify-center "><p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        A comprehensive toolkit of modern technologies and frameworks I use to build
                        exceptional digital experiences. Always learning and staying up-to-date with the latest trends.
                    </p></div>

                </motion.div>

                {/* Grid */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                >
                    {techs.map((tech, i) => {
                        const Icon = tech.icon;

                        return (
                            <motion.div
                                key={i}
                                variants={cardVariant}
                                whileHover={{
                                    scale: 1.05,
                                    y: -5,
                                }}
                                className={`group relative overflow-hidden rounded-2xl border bg-white dark:bg-slate-800 p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${tech.bgColor} ${tech.borderColor}`}
                            >
                                {/* Icon */}
                                <div className="flex items-center justify-center mb-4">
                                    <motion.div
                                        className={`p-3 rounded-xl ${tech.bgColor} ${tech.color} transition-transform duration-300 group-hover:scale-110`}
                                        whileHover={{ rotate: 5 }}
                                    >
                                        <Icon className="text-3xl" />
                                    </motion.div>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 text-center">
                                    {tech.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-slate-600 dark:text-slate-400 text-center leading-relaxed">
                                    {tech.desc}
                                </p>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Skills Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-20 text-center"
                >
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-8">
                        Skills Overview
                    </h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-800">
                            <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300 mb-2">
                                Frontend Development
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Creating responsive, accessible, and performant user interfaces with modern frameworks.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border border-green-200 dark:border-green-800">
                            <h3 className="text-xl font-semibold text-green-700 dark:text-green-300 mb-2">
                                UI/UX Design
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Designing intuitive user experiences with attention to detail and user-centered design.
                            </p>
                        </div>
                        <div className="p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 border border-orange-200 dark:border-orange-800">
                            <h3 className="text-xl font-semibold text-orange-700 dark:text-orange-300 mb-2">
                                Performance Optimization
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400">
                                Optimizing applications for speed, accessibility, and cross-browser compatibility.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}