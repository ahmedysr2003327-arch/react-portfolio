import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import profile from "../assets/profile.png";
import { FaChevronDown, FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiFireworkRocket } from "react-icons/gi";

function Home() {
    const [displayText, setDisplayText] = useState("");
    const fullText = "Frontend Developer";
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + fullText[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };

    // const socialLinks = [
    //     {
    //         icon: Code2,
    //         href: "https://github.com/ahmedysr2003327-arch",
    //         label: "GitHub",
    //     },
    //     {
    //         icon: Linkedin,
    //         href: "https://www.linkedin.com/in/ahmed-yaser-536a20256/",
    //         label: "LinkedIn",
    //     },
    //     {
    //         icon: Mail,
    //         href: "mailto:ahmedysr777@gmail.com",
    //         label: "Email",
    //     },
    // ];

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-24">
            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Profile Image */}
                    <motion.div variants={itemVariants} className="mb-8">
                        <div className="relative inline-block">
                            <motion.img
                                src={profile}
                                alt="Ahmed Yaser"
                                className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-2xl"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            />

                            <motion.div
                                className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 opacity-30 blur-md"
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}
                            />
                        </div>
                    </motion.div>

                    {/* Name */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
                    >
                        Ahmed Yaser
                    </motion.h1>

                    {/* Role */}
                    <motion.div variants={itemVariants} className="mb-6">
                        <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-300">
                            {displayText}
                            <span className="animate-pulse text-indigo-500">|</span>
                        </h2>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-400 mb-10"
                    >
                        Passionate Frontend Developer specializing in React.js,
                        crafting modern, responsive, and interactive user experiences
                        with clean UI and smooth animations.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-4 justify-center pt-3"
                    >
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link to="/projects">
                                <div className="px-8 py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-lg hover:shadow-indigo-500/40 transition-all duration-300 flex items-center justify-center gap-2">
                                    <GiFireworkRocket className="w-5 h-5" />
                                    View My Work
                                </div>
                            </Link>
                        </motion.div>

                        <motion.a
                            href="https://drive.google.com/file/d/1pxpHpJKH6re6U4w8q-E7mtOeii8HcJyq/view?usp=sharing"
                            download
                            className="px-8 py-4 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 backdrop-blur-md text-slate-700 dark:text-slate-300 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaDownload className="w-5 h-5" />
                            Download CV
                        </motion.a>
                    </motion.div>

                    {/* Social Icons */}
                    {/* <motion.div
                        variants={itemVariants}
                        className="flex justify-center gap-6"
                    >
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group p-4 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-md border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500 transition-all duration-300"
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                            >
                                <social.icon className="w-6 h-6 text-slate-700 dark:text-slate-300 group-hover:text-indigo-500 transition-colors duration-300" />
                            </motion.a>
                        ))}
                    </motion.div> */}

                    {/* Scroll Indicator */}
                    {/* <motion.div
                        className="absolute bottom-5 left-1/2 -translate-x-1/2"
                        animate={{ y: [0, 10, 0] }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                        }}
                    >
                        <FaChevronDown className="w-7 h-7 text-slate-400" />
                    </motion.div> */}
                </motion.div>
            </div>
        </section>
    );
}

export default Home;