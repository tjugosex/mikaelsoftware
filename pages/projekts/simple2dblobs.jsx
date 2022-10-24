import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
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
    <div style={{ backgroundColor: "rgb(20, 20, 20)", overflow:"hidden" }} id="menu">
      <div id="menu-items">
        <div class="menu-item"><Link href="/">Hem</Link>
          
        </div>
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
              <List spacing={3}>
                <ListItem>
                <Avatar bg='teal.500' />
                </ListItem>
                <ListItem>
                  <Tag colorScheme="purple">Mail: hejhej@yeet.com</Tag>
                </ListItem>
                <ListItem>
                  <Tag colorScheme="purple">Telefon: 99999999</Tag>
                </ListItem>
              </List>
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
