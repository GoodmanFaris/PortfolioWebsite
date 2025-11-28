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
    { name: "Database Engineering", level: 65 },
    { name: "Mobile App Development", level: 65 },
    { name: "Machine Learning", level: 70 },
    { name: "Web Development", level: 80 }];


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

            <hr className="my-4 border-black border-2"/>
            {showText && (
            <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="mt-6 w-auto text-left text-sm sm:text-lg px-6">
                    My name is Faris Lindov, born on July 7, 2003, in Sarajevo, Bosnia and Herzegovina. I went to Ćamil Sijarić Elementary School and later the Fifth Gymnasium (IT). Today, I’m finishing my studies at the Faculty of Natural Sciences and Mathematics, focusing on mathematics and computer science. I started university in 2022 and have been pushing hard ever since. I’m deeply passionate about mathematics, software engineering, and artificial intelligence—fields where I love building, experimenting, and exploring ideas that sit at the edge of what’s possible. Outside tech, I enjoy bodybuilding, reading, AI research, and watching movies and TV shows.
                    
                    I regularly participate in hackathons and have even taken part in organizing major mathematical competitions—experiences that shaped how I think, collaborate, and solve problems under pressure. I work with a wide range of programming languages, strongest in C++, Python, SQL, Java, Kotlin, C#, C, HTML, and JavaScript. I also speak Bosnian, English, and German. Always learning, always building—driven by curiosity, ambition, and the desire to create something meaningful.
                </motion.p>
            )}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                    <div key={index} className="w-full">
                    <p className="font-semibold mb-1 text-xs" style = {{ fontFamily: "'Press Start 2P', cursive" }}>{skill.name}</p>

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