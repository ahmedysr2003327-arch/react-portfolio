import Navbar from "./Navbar";

function Layout({ children }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
        </div>
    );
}

export default Layout;