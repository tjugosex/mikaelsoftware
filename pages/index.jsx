import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
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
  Box,
  RangeSliderThumb,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Box bg="rgb(248, 248, 248)" height="100%" width="100%" alignContent="center">
      <Box height="700px" width="500px"bg="rgb(248, 248, 248)" alignSelf="center" margin="50" border="3px" borderRadius="2px" borderColor="cyan" position="absolute"   >
      <Accordion >
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                2dblobs
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Button>
              <a href="/projekts/simple2dblobs">
                Enkel kontaktsida med 2d-animering i bakgrunden.
              </a>
            </Button>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                3dproj
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
          <Button>
              <a href="/projekts/3dproj">
                Lite 3d.
              </a>
            </Button>
          </AccordionPanel>
        </AccordionItem>
        
      </Accordion>
      </Box>
    </Box>
  );
}
