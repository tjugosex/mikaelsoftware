import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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
} from "@chakra-ui/react";

export default function Home() {
  if (process.browser) {
    const menu = document.getElementById("menu");

    Array.from(document.getElementsByClassName("menu-item")).forEach(
      (item, index) => {
        item.onmouseover = () => {
          menu.dataset.activeIndex = index;
        };
      }
    );
  }

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div id="menu">
      <div id="menu-items">
        <div class="menu-item">Hem</div>
        <a href="https://github.com/tjugosex/" class="menu-item">
          Github
        </a>
        <div class="menu-item">Linkedin</div>
        <div class="menu-item" onClick={onOpen}>
          Kontakt
        </div>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Kontaktuppgifter</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <UnorderedList spacing={3}>
              <ListItem><Tag colorScheme="purple">Mail: hejhej@yeet.com</Tag></ListItem>
              <ListItem><Tag colorScheme="purple">Telefon: 99999999</Tag></ListItem>
              </UnorderedList>
            </ModalBody>

            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </div>
      <div id="menu-background-pattern"></div>
      <div id="menu-background-image"></div>
    </div>
  );
}
