"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import photo from "@/public/IMG_20230926_111543_842.jpg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const transition = { duration: 2.4, ease: [0.6, 0.01, -0.05, 0.9] };
  const firstNameWords = ["U", "p", "e", "k", "k", "a"];

  const firstName = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: -1,
      },
    },
  };

  const lastName = {
    initial: {
      y: 0,
    },
    animate: {
      y: 0,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.04,
        staggerDirection: 1,
      },
    },
  };

  const letter = {
    initial: {
      y: 400,
      transition: {
        duration: 0.5,
      },
    },
    animate: {
      y: 0,
      transition: { ...transition, duration: 1 },
    },
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-end items-center">
        <div className="h-[50vh] overflow-hidden">
          {firstNameWords.map((letter) => (
            <div className="overflow-hidden">
              <motion.p
                variants={firstName}
                initial="initial"
                animate="animate"
                className="inline-block"
              >
                {letter}
              </motion.p>
            </div>
          ))}
          {/* <motion.span
            className=" flex text-8xl font-bold text-gray-800"
            variants={firstName}
          >
            <motion.span variants={letter} className="inline-block">
              U
            </motion.span>
            <motion.span variants={letter} className="inline-block">
              p
            </motion.span>
            <motion.span variants={letter} className="inline-block">
              e
            </motion.span>
            <motion.span variants={letter} className="inline-block">
              k
            </motion.span>
            <motion.span variants={letter} className="inline-block">
              k
            </motion.span>
            <motion.span variants={letter} className="inline-block">
              a
            </motion.span>
          </motion.span> */}
          <motion.span
            className="text-8xl font-bold text-gray-800"
            variants={lastName}
          >
            <motion.span variants={letter}>C</motion.span>
            <motion.span variants={letter}>h</motion.span>
            <motion.span variants={letter}>a</motion.span>
            <motion.span variants={letter}>k</motion.span>
            <motion.span variants={letter}>m</motion.span>
            <motion.span variants={letter}>a</motion.span>
          </motion.span>
        </div>
      </div>
      {/* <div className="h-[50vh] flex justify-center items-end bg-white">
        <motion.div
          className="overflow-hidden w-[210px] sm:w-[270px]"
          initial={{ translateY: "-50%" }}
          animate={{ translateY: 0, width: "100%", height: "300px" }}
          transition={{ delay: 0.2, ...transition }}
        >
          <motion.img
            alt="person"
            src="/IMG_20230926_111543_842.jpg"
            className="object-center"
            initial={{ scale: 1 }}
            animate={{
              transition: { delay: 0.2, ...transition },
              translateY: "-30%",
            }}
          />
        </motion.div>
      </div> */}
    </div>
  );
}
