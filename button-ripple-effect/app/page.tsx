"use client"; 

import Head from 'next/head';
import { useEffect } from 'react';
import styles from './styles/Home.module.css'; // Update the path to match the new structure

export default function Home() {
  useEffect(() => {
    const buttonEl = document.querySelector(`.${styles.button}`);

    const handleMouseOver = (event) => {
      const x = event.pageX - buttonEl.offsetLeft;
      const y = event.pageY - buttonEl.offsetTop;

      buttonEl.style.setProperty("--xPos", `${x}px`);
      buttonEl.style.setProperty("--yPos", `${y}px`);
    };

    buttonEl.addEventListener('mouseover', handleMouseOver);

    return () => {
      buttonEl.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Button Ripple Effect</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <a href="#" className={styles.button}><span>Button</span></a>
    </div>
  );
}
