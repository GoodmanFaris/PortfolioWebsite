"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";


export default function AboutPage() {
    const [showText, setShowText] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setShowText(true), 800); 
    return () => clearTimeout(timeout);
  }, []);

    const skills = [
      { name: "Programming / OOP", level: 85 },
      { name: "Backend Development (FastAPI, APIs)", level: 90 },
      { name: "Frontend Development (React / Next.js)", level: 85 },
      { name: "Database Engineering (PostgreSQL)", level: 80 },
      { name: "Mobile App Development (React Native)", level: 80 },
      { name: "AI / Machine Learning", level: 75 },
      { name: "DevOps & Deployment", level: 80 },
    ];


    return (
      <div className="fixed inset-0 flex items-center justify-center pointer-events-auto bg-white ">
        <div className="w-[85%] sm:max-w-4xl mx-auto sm:px-6 lg:px-8 text-black h-[80vh] overflow-y-auto">
          <div className="flex items-center justify-between w-full px-2">
            <motion.h1
              initial={{ y: 10, opacity: 1 }}
              animate={{ y: showText ? 0 : 10 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-2xl sm:text-4xl font-bold"
              style={{ fontFamily: "'Press Start 2P', cursive, monospace" }}
            >
              About Me
            </motion.h1>

            <img
              src="/stickmen.gif"
              alt="gif"
              className="w-[38%] h-12 sm:w-[35%] sm:h-24"
            />
          </div>

          <hr className="my-4 border-black border-2" />
          {showText && (
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="mt-6 w-auto text-left text-sm sm:text-lg px-6"
            >
              My name is Faris Lindov, a Software Engineer with a Bachelor’s
              degree in Mathematics – Software Engineering from the Faculty of
              Natural Sciences and Mathematics, University of Sarajevo. I was
              born on July 7, 2003, in Sarajevo, Bosnia and Herzegovina, where I
              also completed my elementary and high school education, including
              the IT-focused Fifth Gymnasium. My journey into technology started
              early, but it was during my university years that I truly
              committed to building and understanding complex systems. I am
              deeply passionate about software engineering, artificial
              intelligence, and mathematics—fields where I enjoy building,
              experimenting, and exploring ideas at the edge of what’s possible.
              I especially enjoy turning abstract ideas into real-world products
              that people can use. Throughout my academic and personal projects,
              I have worked across the full stack, from designing backend
              systems and APIs to building modern frontend interfaces and mobile
              applications. I have hands-on experience with technologies such as
              Python, JavaScript, SQL, C++, Java, and Kotlin, and I enjoy
              working on projects that combine AI with real-world applications.
              I regularly participate in hackathons and have also contributed to
              organizing major mathematical competitions. These experiences have
              shaped how I think, collaborate, and solve problems under
              pressure. Outside of technology, I enjoy bodybuilding, reading,
              exploring AI research, and watching movies and TV shows. I’m
              naturally curious and constantly learning—whether it’s a new
              framework, a new idea, or a better way to build something. I speak
              Bosnian, English, and German. Always learning, always
              building—driven by curiosity, ambition, and the desire to create
              something meaningful.
            </motion.p>
          )}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="w-full">
                <p
                  className="font-semibold mb-1 text-xs"
                  style={{ fontFamily: "'Press Start 2P', cursive" }}
                >
                  {skill.name}
                </p>

                <div className="w-full h-6 border-4 border-black rounded-none bg-[#f0f0f0]">
                  <div
                    className="h-full bg-black rounded-none"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}