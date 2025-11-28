
export default function Contact() {
    return (
        <div className="fixed inset-0 flex items-center justify-center pointer-events-auto bg-white">
        <div
            className="sm:w-[30%] w-[90%] h-[30%] bg-white/80 backdrop-blur-md rounded-md p-4 flex flex-col justify-center items-start gap-2"
            style={{ fontFamily: "'Press Start 2P', cursive, monospace" }}
        >
            <div className="flex items-center gap-2 text-sm text-black">
            <img src="/GitHub.png" alt="GitHub" className="w-4 h-4" />
            GitHub: <a href="https://github.com/GoodmanFaris" className="hover:underline" target="_blank" rel="noopener noreferrer">GoodmanFaris</a>
            </div>

            <div className="flex items-center gap-2 text-sm text-black">
            <img src="/Instagram.png" alt="Instagram" className="w-4 h-4" />
            Instagram: <a href="https://instagram.com/linda.exe_" className="hover:underline" target="_blank" rel="noopener noreferrer">@linda.exe_</a>
            </div>

            <div className="flex items-center gap-2 text-sm text-black">
            <img src="/X.png" alt="X" className="w-4 h-4" />
            X: <a href="https://www.facebook.com/faris.lindov.9" className="hover:underline" target="_blank" rel="noopener noreferrer">@Faris Lindov</a>
            </div>

            <div className="flex items-center gap-2 text-sm text-black">
            <img src="/gmail.png" alt="Email" className="w-4 h-4" />
            Email: <a href="mailto:flindov001@gmail.com" className="hover:underline" target="_blank">flindov001@gmail.com</a>
            </div>

            <div className="flex items-center gap-2 text-sm text-black">
            <img src="/LinkedIn.png" alt="LinkedIn" className="w-4 h-4" />
            Linkedin: <a href="https://www.linkedin.com/in/faris-lindov-43625b34a" className="hover:underline" target="_blank" rel="noopener noreferrer">Faris Lindov</a>
            </div>
        </div>
        </div>

    );
}