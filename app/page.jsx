"use client";
import { useEffect, useState } from "react";

let mx = 0;
let my = 0;

let angleDeg = 0;
let distance = 0;

function getRadiusZone(distance) {
  if (distance < 100) return "C";   
  if (distance < 250) return "R1";  
  if (distance < 400) return "R2";  
  return "R3";                       
}

function getDirection(angleDeg) {
  if (angleDeg >= 337.5 || angleDeg < 22.5) return "E";
  if (angleDeg < 67.5) return "NE";
  if (angleDeg < 112.5) return "N";
  if (angleDeg < 157.5) return "NW";
  if (angleDeg < 202.5) return "W";
  if (angleDeg < 247.5) return "SW";
  if (angleDeg < 292.5) return "S";
  return "SE";
}

function getImageKey() {
  const radius = getRadiusZone(distance);

  if (radius === "C") return "C";

  const dir = getDirection(angleDeg);
  return `${dir}-${radius}`;

  
}





export default function Home() {

  useEffect(() => {
  const handleMove = (e) => {
    mx = e.clientX;
    my = e.clientY;

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    const dx = mx - cx;
    const dy = cy - my;

    distance = Math.sqrt(dx*dx + dy*dy);

    let angle = (Math.atan2(dy, dx) * 180) / Math.PI;
    if (angle < 0) angle += 360;
    angleDeg = angle;
  };

  const handleTouch = (e) => {
    const touch = e.touches[0];
    mx = touch.clientX;
    my = touch.clientY;

    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    const dx = mx - cx;
    const dy = cy - touch.clientY;

    distance = Math.sqrt(dx*dx + dy*dy);

    let angle = (Math.atan2(dy, dx) * 180) / Math.PI;
    if (angle < 0) angle += 360;
    angleDeg = angle;
  };

  window.addEventListener("mousemove", handleMove);
  window.addEventListener("touchmove", handleTouch);

  return () => {
    window.removeEventListener("mousemove", handleMove);
    window.removeEventListener("touchmove", handleTouch);
  };
  }, []);

  const [imgSrc, setImgSrc] = useState("/C.png");

  useEffect(() => {
    const loop = () => {
      const key = getImageKey(); 
      setImgSrc(`/${key}.png`);
      requestAnimationFrame(loop);
    };
    loop();
  }, []);

  return (
    <div className="relative w-screen h-screen bg-white overflow-hidden">

        <div className="w-full h-full flex items-center justify-center sm:pt-60">
          <img
            src={imgSrc}
            className="w-[95%] sm:w-[65%] h-auto object-cover"
          />
        </div>


        <div className="pt-50 sm:pt-0 absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <h1 className="text-black text-[5rem] sm:text-[6rem] font-extrabold tracking-widest select-none text-center">
            <span className="hidden sm:inline">FARIS LINDOV</span>
            <span className="inline sm:hidden">
              <span className="block">FARIS</span>
              <span className="block">LINDOV</span>
            </span>
          </h1>


          <div className="pt-20 sm:mt-2 sm:pt-0 w-[54%] flex flex-col sm:flex-row justify-between items-center pointer-events-auto gap-2 sm:gap-0">

            <span
              className="text-black text-xl font-bold select-none"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              student @ PMF
            </span>

            <a
              href="/CV.pdf"
              download
              className="text-black text-xl font-bold select-none hover:underline"
              style={{ fontFamily: "'Press Start 2P', cursive" }}
            >
              download my CV
            </a>
          </div>

        </div>
      </div>




  );
}
