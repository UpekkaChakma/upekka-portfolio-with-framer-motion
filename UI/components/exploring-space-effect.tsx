import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";

interface TextZoomInProps {
  title: string;
  scrollYProgress: MotionValue<number>;
  start: number;
  topStartValue: string;
  topEndValue: string;
  leftStartValue: string;
  leftEndValue: string;
}

const ExploringSpaceEffect = ({
  title,
  scrollYProgress,
  start,
  topStartValue,
  topEndValue,
  leftStartValue,
  leftEndValue,
}: TextZoomInProps) => {
  const opacityDuration = 0.2;
  const translateAnimationDuration = 0.2;

  let leftEndValue2;
  if (Number(leftStartValue.split("%")[0]) < 50) {
    leftEndValue2 =
      (Number(leftStartValue.split("%")[0]) * 0.25).toString() + "%";
  } else {
    leftEndValue2 =
      (Number(leftStartValue.split("%")[0]) / 0.75).toString() + "%";
  }
  const top = useTransform(
    scrollYProgress,
    [start, start + translateAnimationDuration],
    [topStartValue, topEndValue]
  );
  const left = useTransform(
    scrollYProgress,
    [start, start + translateAnimationDuration],
    [leftStartValue, leftEndValue2]
  );
  const scale = useTransform(
    scrollYProgress,
    [start, start + translateAnimationDuration],
    ["50%", "500%"]
  );
  const opacity = useTransform(
    scrollYProgress,
    [start, start + opacityDuration],
    ["0%", "100%"]
  );
  return (
    <motion.div style={{ top, left, scale, opacity }} className="absolute">
      <h1 className="text-3xl text-white">{title}</h1>
    </motion.div>
  );
};

export default ExploringSpaceEffect;
