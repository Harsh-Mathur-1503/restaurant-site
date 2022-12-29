import Image from 'next/image';
import React from 'react'
import styles from "../../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="" layout="fill" objectFit="cover" />
      </div>

      <div className={styles.item}>
      <div className={styles.card}>
        <h2 className={styles.motto}>
          Yupp , We are here in your city...
        </h2>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>
          FIND OUR BRANCHES
        </h1>
        <p className={styles.text}>
          1234 Q. Steve Rod 
          <br />Model Town
          <br />987 789 8978
        </p>
        <p className={styles.text}>
          1897 K. Laquie Street 
          <br />New Delhi
          <br />456 789 8978
        </p>
        <p className={styles.text}>
          1234 L. Roger Road
          <br />New York
          <br />345 789 8978
        </p>
      </div>
      <div className={styles.card}>
        <h1 className={styles.title}>
          WORKING HOURS
        </h1>
        <p className={styles.text}>
          MONDAY-FRIDAY
          <br />9.00 - 22.00
        </p>
        <p className={styles.text}>
          SATURDAY - SUNDAY
          <br />12.00 - 24.00
        </p>
      </div>
      </div>
    </div>
  )
}

export default Footer