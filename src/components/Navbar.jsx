import { Link, NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)]">
            <Link to="/" className="text-xl font-bold text-[var(--text-h)]">
                Ahmed.dev
            </Link>

            <div className="flex gap-6">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-[var(--accent)] font-semibold"
                            : "text-[var(--text)] hover:text-[var(--accent)]"
                    }
                >
                    Home
                </NavLink>

                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        isActive
                            ? "text-[var(--accent)] font-semibold"
                            : "text-[var(--text)] hover:text-[var(--accent)]"
                    }
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/tecnology"
                    className={({ isActive }) =>
                        isActive
                            ? "text-[var(--accent)] font-semibold"
                            : "text-[var(--text)] hover:text-[var(--accent)]"
                    }
                >
                    Tecnology
                </NavLink>
                <NavLink
                    to="/connect"
                    className={({ isActive }) =>
                        isActive
                            ? "text-[var(--accent)] font-semibold"
                            : "text-[var(--text)] hover:text-[var(--accent)]"
                    }
                >
                    Connect me
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;