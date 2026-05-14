import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    const navItems = [
        { to: "/", label: "Home" },
        { to: "/projects", label: "Projects" },
        { to: "/tecnology", label: "Technology" },
        { to: "/connect", label: "Connect" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 glass dark:glass-dark shadow-lg"
        >
            <div className="container-max px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
                    >
                        Ahmed.dev
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                className={({ isActive }) =>
                                    `relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${isActive
                                        ? "text-indigo-600 dark:text-indigo-400"
                                        : "text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {item.label}
                                        {isActive && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? (
                                <FaMoon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                            ) : (
                                <FaSun className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? (
                                <FaMoon className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                            ) : (
                                <FaSun className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <FaTimes className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                            ) : (
                                <FaBars className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden mt-4 pb-4 border-t border-slate-200 dark:border-slate-700 pt-4"
                    >
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.to}
                                    to={item.to}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-300 ${isActive
                                            ? "text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-900/20"
                                            : "text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-100 dark:hover:bg-slate-700"
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.nav>
    );
}

export default Navbar;