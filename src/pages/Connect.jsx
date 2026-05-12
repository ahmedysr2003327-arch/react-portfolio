

import { motion } from "framer-motion";
import { FaPhoneAlt, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Connect() {
    const contacts = [
        {
            title: "Phone",
            value: "01007712634",
            icon: FaPhoneAlt,
            link: "tel:01007712634",
        },
        {
            title: "LinkedIn",
            value: "Ahmed Yaser",
            icon: FaLinkedin,
            link: "https://www.linkedin.com/in/ahmed-yaser-536a20256/",
        },
        {
            title: "Email",
            value: "ahmedysr777@gmail.com",
            icon: FaEnvelope,
            link: "mailto:ahmedysr777@gmail.com",
        },
    ];

    return (
        <section className="mt-20 text-center px-4">

            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="text-3xl font-bold text-[var(--text-h)] mb-4"
            >
                Let's Connect 🤝
            </motion.h2>

            <p className="text-[var(--text)] mb-20">
                Feel free to reach out for collaboration or opportunities.
            </p>

            {/* Cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">

                {contacts.map((item, i) => {
                    const Icon = item.icon;

                    return (
                        <motion.a
                            key={i}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.07 }}
                            className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg flex flex-col items-center text-center cursor-pointer"
                        >
                            {/* Icon */}
                            <Icon className="text-3xl text-[var(--accent)] mb-4 transition group-hover:scale-125" />

                            {/* Title */}
                            <h3 className="text-lg font-semibold text-white">
                                {item.title}
                            </h3>

                            {/* Value */}
                            <p className="text-sm text-gray-300 mt-2 break-all">
                                {item.value}
                            </p>
                        </motion.a>
                    );
                })}

            </div>
        </section>
    );
}