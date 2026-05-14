

import { motion } from "framer-motion";
import { FaPhoneAlt, FaLinkedin, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaMobileAlt } from "react-icons/fa";

export default function Connect() {
    const contacts = [
        {
            title: "Email",
            value: "ahmedysr777@gmail.com",
            icon: FaEnvelope,
            link: "mailto:ahmedysr777@gmail.com",
            color: "text-red-500",
            bgColor: "bg-red-50 dark:bg-red-900/20",
            borderColor: "border-red-200 dark:border-red-800",
        },
        {
            title: "LinkedIn",
            value: "Ahmed Yaser",
            icon: FaLinkedin,
            link: "https://www.linkedin.com/in/ahmed-yaser-front-end/",
            color: "text-blue-600",
            bgColor: "bg-blue-50 dark:bg-blue-900/20",
            borderColor: "border-blue-200 dark:border-blue-800",
        },
        {
            title: "Phone",
            value: "+20 01007712634",
            icon: FaMobileAlt,
            link: "tel:+2001007712634",
            color: "text-green-500",
            bgColor: "bg-green-50 dark:bg-green-900/20",
            borderColor: "border-green-200 dark:border-green-800",
        },
        {
            title: "WhatsApp",
            value: "01007712634",
            icon: FaWhatsapp,
            link: "https://wa.me/201007712634",
            color: "text-green-500",
            bgColor: "bg-green-50 dark:bg-green-900/20",
            borderColor: "border-green-200 dark:border-green-800",
        },

    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

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
                    <h1 className="mb-6">Let's Connect</h1>
                    <div className="flex justify-center"><p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        I'm always open to discussing new opportunities, interesting projects,
                        or just having a chat about technology. Feel free to reach out!
                    </p></div>

                </motion.div>

                {/* Contact Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16"
                >
                    {contacts.map((item, i) => {
                        const Icon = item.icon;

                        return (
                            <motion.a
                                key={i}
                                href={item.link}
                                target={item.link.startsWith('http') ? "_blank" : undefined}
                                rel={item.link.startsWith('http') ? "noopener noreferrer" : undefined}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    y: -5,
                                }}
                                className={`group relative overflow-hidden rounded-2xl border bg-white dark:bg-slate-800 p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${item.bgColor} ${item.borderColor} ${item.link === '#' ? 'pointer-events-none' : 'cursor-pointer'}`}
                            >
                                {/* Icon */}
                                <div className="flex items-center justify-center mb-4">
                                    <motion.div
                                        className={`p-3 rounded-xl ${item.bgColor} ${item.color} transition-transform duration-300 group-hover:scale-110`}
                                        whileHover={{ rotate: 5 }}
                                    >
                                        <Icon className="text-2xl" />
                                    </motion.div>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2 text-center">
                                    {item.title}
                                </h3>

                                {/* Value */}
                                <p className="text-sm text-slate-600 dark:text-slate-400 text-center break-all">
                                    {item.value}
                                </p>

                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                            </motion.a>
                        );
                    })}
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-2xl mx-auto"
                >
                    {/* <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-8">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6 text-center">
                            Send a Message
                        </h2>
                        <form className="space-y-6">
                            <div className="grid gap-6 md:grid-cols-2">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                        placeholder="your.email@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                                    placeholder="What's this about?"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 placeholder-slate-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 resize-none"
                                    placeholder="Tell me about your project or just say hello!"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full btn-primary"
                            >
                                Send Message
                            </button>
                        </form>
                    </div> */}
                </motion.div>
            </div>
        </section>
    );
}