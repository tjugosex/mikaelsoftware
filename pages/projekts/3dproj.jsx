import { render } from "react-dom";
import { Canvas, useThree } from "@react-three/fiber";
import Floor from "../../components/floor";
import Box from "../../components/box";
import LightBulb from "../../components/lightbulb";
import Controls from "../../components/orbitcontrols";
import { useState, Suspense } from "react";
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Tag,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  TagCloseButton,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Avatar,
  AvatarBadge,
  AvatarGroup,
} from "@chakra-ui/react";
import { OrbitControls } from "@react-three/drei";

export default function threedproj() {
  const [isFullscreen, setFullscreen] = useState(true);
  const deg2rad = (degrees) => degrees * (Math.PI / 180);

  return (
    <div
      style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
      overflow="hidden"
    >
      <motion.div
        style={{
          backgroundColor: "white",
          position: "absolute",
          top: "0",
          left: "0",
          height: "45%",
          width: "100vw",
          zIndex: "1000",
        }}
        transition={{ duration: 2, type: "tween" }}
        animate={
          isFullscreen
            ? {
                top: "0",
                left: "0",
                height: "45%",
                width: "100vw",
              }
            : {
                height: "0vh",
                width: "100vw",
              }
        }
      ></motion.div>
      <motion.div
        style={{
          backgroundColor: "white",
          position: "absolute",
          top: "0",
          left: "0",
          height: "100vh",
          width: "45%",
          zIndex: "1000",
        }}
        transition={{ duration: 2, type: "tween" }}
        animate={
          isFullscreen
            ? {
                top: "0",
                left: "0",
                height: "100vh",
                width: "45%",
              }
            : {
                left: "0",
                height: "100vh",
                width: "0vw",
              }
        }
      ></motion.div>

      <motion.div
        style={{
          backgroundColor: "white",
          position: "absolute",
          top: "0",
          right: "0",
          height: "100%",
          width: "45vw",
          zIndex: "1000",
          transform: "scaleX(-1)",
        }}
        transition={{ duration: 2, type: "tween" }}
        animate={
          isFullscreen
            ? {
                width: "45%",
              }
            : {
                width: "0%",
              }
        }
      ></motion.div>

      <motion.div
        style={{
          backgroundColor: "white",
          position: "absolute",
          bottom: "0",
          left: "0",
          height: "45%",
          width: "100%",
          zIndex: "1000",
          transform: "scaleX(-1)",
        }}
        transition={{ duration: 2, type: "tween" }}
        animate={
          isFullscreen
            ? {
                height: "45%",
              }
            : {
                height: "0%",
              }
        }
      ></motion.div>
      <motion.div overflow="hidden">
        <Canvas
          onClick={() => setFullscreen(false)}
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            overflow: "hidden",
          }}
          height="100%"
          width="100%"
          shadows={true}
          overflow="hidden"
          className="canvas"
          camera={
            isFullscreen
              ? {
                  position: [0,0,-10],
                }
              : {
                  position: [-6, 123, 321],
                }
          }
          id="canvasbg"
        >
         
          <ambientLight color={"white"} intensity={0.2} />
          <LightBulb position={[0, 3, 0]} />
          <Box position={[0, 3, 0]} rotateX={3} rotateY={0.2} />

          <Floor position={[0, 0, 0]} />
        </Canvas>
      </motion.div>
    </div>
  );
}