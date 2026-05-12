import profile from "../assets/profile.png";

function Home() {
    return (
        <div className="flex flex-col items-center justify-center text-center mt-10">

            {/* 🖼️ Image */}
            <img
                src={profile}
                alt="profile"
                className="w-50 h-50 rounded-full object-cover border-4 border-[var(--accent)] shadow-md"
            />

            {/* 👨‍💻 Text */}
            <h1 className="text-4xl font-bold mt-6 text-[var(--text-h)]">
                Ahmed Yaser
            </h1>

            <p className="mt-3 text-[var(--text)] max-w-md">
                Front-End Developer specialized in React, building clean and scalable UI.
            </p>
        </div>
    );
}

export default Home;