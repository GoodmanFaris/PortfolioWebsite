"use client";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Personal Finance AI Tracker",
      desc: "Personal finance dashboard with AI-powered insights and predictions.",
      img: "/p1.png",
      link: ""
    },
    {
      title: "InfoStudent",
      desc: "Student job marketplace with chat, rating system, scheduling.(Group project)",
      img: "/p1.png",
      link: "https://github.com/DinoFazlic/InfoStudent"
    },
    {
      title: "Gric",
      desc: "Play on Too Good To Go food waste app with integrated AI.",
      img: "/p2.png",
      link: ""
    },
    {
      title: "2048",
      desc: "Game 2048 implementation using Java.",
      img: "/p3.png",
      link: "https://github.com/GoodmanFaris/2048"
    },
    {
      title: "Insight BIH",
      desc: "Implementation of IDDEEA API, information and statistics about Bosnia and Herzegovina, Android app.",
      img: "/p4.jpg",
      link: "https://github.com/GoodmanFaris/IDDEEAFarisLindov"
    },
    {
      title: "Live Model Viewer",
      desc: "3D model viewer with live camera feed background using Three.js.",
      img: "/p6.webp",
      link: "https://livemodelviewdemov-rjc0c01uz-faris-projects-3a20e575.vercel.app/"
    },
    {
      title: "F1 APP",
      desc: "Implementation of F1 API, information about all F1 seasons and races, Android app.",
      img: "/p5.jpg",
      link: "https://github.com/GoodmanFaris/F1-App-Android-Studio"
    },
    {
      title: "Heart Disease Prediction",
      desc: "Machine learning model to predict heart disease risk.",
      img: "/p6.webp",
      link: "https://github.com/GoodmanFaris/Heart-Disease-Machine-Learning"
    },
  ];

  return (
    <div className="min-h-screen w-full bg-white pt-20 pb-20 text-black">
      <div className="max-w-4xl mx-auto px-6 space-y-10">
        
        {projects.map((p, i) => (
          <a key={i} href={p.link} target="_blank" className="block group relative">

            <div
              className={`
                relative w-full border-4 border-black shadow-[6px_6px_0_0_black]
                p-6 grid grid-cols-1 sm:grid-cols-2 gap-6
                ${i % 2 === 1 ? "sm:flex-row-reverse" : ""}
                bg-white text-black
              `}
            >
              {i === 0 && (
                <div className="absolute inset-0 bg-white/70 z-20 flex items-center justify-center">
                  <img
                    src="/UnderConstruction.png"   
                    alt="Under construction"
                    className="w-40 sm:w-56 opacity-100"
                  />
                </div>
              )}


              <img
                src={p.img}
                alt={p.title}
                className="w-full h-48 object-cover border-2 border-white z-10"
              />

              <div className="flex flex-col justify-center z-10">
                <h2 className="text-2xl font-bold mb-3">{p.title}</h2>
                <p className="opacity-80">{p.desc}</p>
              </div>
            </div>

          </a>
        ))}

      </div>
    </div>
  );
}
