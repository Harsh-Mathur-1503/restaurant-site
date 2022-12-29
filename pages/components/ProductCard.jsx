import Image from 'next/image';
import React from 'react';
import styles from "../../styles/ProductCard.module.css";
const ProductCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" width="200" height="200" alt="" />
      <h1 className={styles.title}>
        FIORI DI ZUCA
      </h1>
      <span className={styles.price}>
        399 Rs.
      </span>
      <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eos.
      </p>

    </div>
  )
}

export default ProductCard