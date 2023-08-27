import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {

  return (
    <div className={styles.container}>
      <div>©2023 Bambo. All rights reserved.</div>
      <div className={styles.socials}>
        <Image src='/1.png' width={15} className={styles.icon} height={15} alt='Facebook' />
        <Image src='/2.png' width={15} className={styles.icon} height={15} alt='Instagram' />
        <Image src='/3.png' width={15} className={styles.icon} height={15} alt='Bambo' />
        <Image src='/4.png' width={15} className={styles.icon} height={15} alt='Bambo' />
      </div>
    </div>
  );
};

export default Footer;
