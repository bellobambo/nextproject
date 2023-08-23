import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '../../components/Button/Button'


export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src='https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80' fill={true} alt=''
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital storytellers</h1>
          <h2 className={styles.imgDesc}>HandCraft Award Winning Digital Experience </h2>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa error ipsum  <br />explicabo voluptatibus, laudantium deserunt quod quidem pariatur reprehenderit quaerat quosm <br /> <br /> beatae illo, magni sed ut commodi, cumque ducimus.</p>
        </div>

        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ipsa error ipsum  <br />explicabo voluptatibus, laudantium deserunt quod quidem pariatur reprehenderit quaerat quosm <br /> <br /> beatae illo, magni sed ut commodi, cumque ducimus.</p>
          <Button url='/contact' text='Contact'/>
        </div>
      </div>
    </div>
  )
}
