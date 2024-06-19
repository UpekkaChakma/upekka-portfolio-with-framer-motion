import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import ExploringSpaceEffect from "@/UI/components/exploring-space-effect";

const Intro = () => {
  const texts = [
    {
      title: "Zoom",
      start: 0,
      topStartValue: "75%",
      topEndValue: "103%",
      leftStartValue: "67%",
      leftEndValue: "90%",
    },
    {
      title: "Apple",
      start: 0.8,
      topStartValue: "33%",
      topEndValue: "-13%",
      leftStartValue: "33%",
      leftEndValue: "10%",
    },
    {
      title: "Candy",
      start: 0.1,
      topStartValue: "50%",
      topEndValue: "104%",
      leftStartValue: "25%",
      leftEndValue: "5%",
    },
    {
      title: "Mobile",
      start: 0.12,
      topStartValue: "25%",
      topEndValue: "-17%",
      leftStartValue: "67%",
      leftEndValue: "86%",
    },
    {
      title: "Upekka",
      start: 0.2,
      topStartValue: "53%",
      topEndValue: "105%",
      leftStartValue: "40%",
      leftEndValue: "32%",
    },

    {
      title: "Samsung",
      start: 0.23,
      topStartValue: "23%",
      topEndValue: "-17%",
      leftStartValue: "50%",
      leftEndValue: "59%",
    },
    {
      title: "ios",
      start: 0.22,
      topStartValue: "75%",
      topEndValue: "107%",
      leftStartValue: "50%",
      leftEndValue: "28%",
    },
    {
      title: "Abobo",
      start: 0.21,
      topStartValue: "25%",
      topEndValue: "-17%",
      leftStartValue: "15%",
      leftEndValue: "28%",
    },
    {
      title: "Programmer",
      start: 0.28,
      topStartValue: "67%",
      topEndValue: "107%",
      leftStartValue: "70%",
      leftEndValue: "28%",
    },
    {
      title: "Computer",
      start: 0.31,
      topStartValue: "33%",
      topEndValue: "117%",
      leftStartValue: "27%",
      leftEndValue: "28%",
    },
    {
      title: "Golang",
      start: 0.33,
      topStartValue: "54%",
      topEndValue: "117%",
      leftStartValue: "67%",
      leftEndValue: "28%",
    },
  ];

  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const opacityDuration = 0.2;
  const top = useTransform(scrollYProgress, [0, 1], ["75%", "103%"]);
  const left = useTransform(scrollYProgress, [0, 1], ["67%", "80%"]);
  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "160%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="relative w-full h-[300vh]" ref={container}>
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {texts.map((text) => (
          <ExploringSpaceEffect
            scrollYProgress={scrollYProgress}
            key={text.title}
            {...text}
          />
        ))}
      </div>
    </div>
  );
};

export default Intro;
