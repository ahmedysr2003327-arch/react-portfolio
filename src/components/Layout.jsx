import Navbar from "./Navbar";

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="p-6 flex-1">{children}</main>
        </>
    );
}

export default Layout;