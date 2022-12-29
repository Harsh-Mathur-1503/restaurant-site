import styles from "../../styles/ProductList.module.css"
import React from 'react'
import ProductCard from "./ProductCard"

const ProductList = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>
            THE BEST FOOD IN TOWN
        </h1>
        <p className={styles.desc}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit harum nisi, cum, non tempore repellat accusamus labore veniam alias et error soluta nesciunt id. Saepe totam reiciendis impedit et.
        </p> 
        <div className={styles.wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </div>
    </div>
  )
}

export default ProductList