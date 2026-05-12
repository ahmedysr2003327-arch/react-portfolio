import { motion } from "framer-motion";

// 🔥 Icons
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiRedux, SiNextdotjs } from "react-icons/si";

// 🧠 Data
const techs = [
    {
        title: "React",
        desc: "Building interactive UI with reusable components",
        icon: FaReact,
    },
    {
        title: "JavaScript",
        desc: "Core language for dynamic web applications",
        icon: FaJs,
    },
    {
        title: "HTML",
        desc: "Structuring modern web pages",
        icon: FaHtml5,
    },
    {
        title: "CSS",
        desc: "Styling and responsive layouts",
        icon: FaCss3Alt,
    },
    {
        title: "Tailwind",
        desc: "Utility-first CSS framework",
        icon: SiTailwindcss,
    },
    {
        title: "Redux",
        desc: "State management for scalable apps",
        icon: SiRedux,
    },
    {
        title: "Next.js",
        desc: "React framework for production apps",
        icon: SiNextdotjs,
    },
];

// 🎯 Animation (Container)
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

// 🎯 Animation (Card)
const cardVariant = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export default function Technology() {
    return (
        <section className="mt-20 text-center px-4">

            {/* 🔥 Title */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-[var(--text-h)] mb-12 "
            >
                Technologies I Use 🚀
            </motion.h2>

            {/* 📦 Grid */}
            <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
                {techs.map((tech, i) => {
                    const Icon = tech.icon;

                    return (
                        <motion.div
                            key={i}
                            variants={cardVariant}
                            whileHover={{
                                scale: 1.07,
                                rotate: 1,
                            }}
                            className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg cursor-pointer flex flex-col items-center text-center transition"
                        >
                            {/* 🧩 Icon */}
                            <Icon className="text-4xl mb-4 text-[var(--accent)] transition duration-300 group-hover:scale-125" />

                            {/* 📌 Title */}
                            <h3 className="text-lg font-semibold text-white">
                                {tech.title}
                            </h3>

                            {/* 📝 Description */}
                            <p className="text-sm text-gray-300 mt-2">
                                {tech.desc}
                            </p>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}