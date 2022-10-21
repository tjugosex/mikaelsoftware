import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";



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
  

  return (
    <div id="menu">
      <div id="menu-items">
        <div class="menu-item">Hem</div>
        <a href="https://github.com/tjugosex/" class="menu-item" >Github</a>
        <div class="menu-item">Linkedin</div>
        <div class="menu-item">Kontakt</div>
      </div>
      <div id="menu-background-pattern"></div>
      <div id="menu-background-image"></div>
    </div>
  );
}

