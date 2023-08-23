"use client"

import React from 'react'
// import styles from './page.module.css'
import styles from './footer.module.css'
import Image from 'next/image'

export default function Footer() {

  console.log('hello')

  return (
    <div className={styles.container}>
      <div>©2023 Bambo. All rights reserved.</div>
      <div className={styles.socials}>
        <Image src='/1.png' width={15} className={styles.icon} height={15} alt='Facbook'/>
        <Image src='/2.png' width={15} className={styles.icon} height={15} alt='Instagram'/>
        <Image src='/3.png' width={15} className={styles.icon} height={15} alt='Bambo'/>
        <Image src='/4.png' width={15} className={styles.icon} height={15} alt='Bambo'/>
      </div>
    </div>
  )
}
