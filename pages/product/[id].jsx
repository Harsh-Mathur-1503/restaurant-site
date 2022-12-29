import Image from 'next/image';
import React, { useState } from 'react';
import styles from "../../styles/Product.module.css";

const Product = () => {

    const [size , setSize] = useState(0);
    const pizza ={
        id:1,
        img:"/img/pizza.png",
        name:"CAMPAGNOLA",
        price:[199,319,459],
        desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda fugiat quam, molestias est dolore eligendi? Error ea dolores vero, animi dolorum sequi? Culpa voluptas temporibus eligendi dolorem alias eius vitae! ve uhenfiuehv ojeojfe joifj "
    };
    return (
    <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.imgContainer}>
                <Image src={pizza.img} layout="fill" alt="" objectFit="contain" />
            </div>
        </div>
        <div className={styles.right}>
            <h1 className={styles.title}>
                {pizza.name}
            </h1>
            <span className={styles.price}>Rs. {pizza.price[size]}</span>
            <p className={styles.desc}>{pizza.desc}</p>
            <h3 className={styles.choose}>
                Choose Your Size
            </h3>
            <div className={styles.sizes} >
                <div className={styles.size}onClick={()=>setSize(0)}>
                <Image src="/img/size.png" alt="" layout="fill" />
                <span className={styles.number}>Small</span>
                </div>
                <div className={styles.size}onClick={()=>setSize(1)}>
                <Image src="/img/size.png" alt="" layout="fill" />
                <span className={styles.number}>Medium</span>
                </div>
                <div className={styles.size}onClick={()=>setSize(2)}>
                <Image src="/img/size.png" alt="" layout="fill" />
                <span className={styles.number}>Large</span>
                </div>
            </div>
            <h3 className={styles.choose}>
                Choose additional ingredients
            </h3>
            <div className={styles.ingredients}>
                <div className={styles.option}>
                    <input type="checkbox" id="double" name="double" className="checkbox" />
                    <label className={styles.label} htmlFor="double">Double Ingredients</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" id="cheese" name="cheese" className="checkbox" />
                    <label className={styles.label} htmlFor="cheese">Extra Cheese</label>
                </div>
                <div className={styles.option}>
                    <input type="checkbox" id="veggie" name="veggie" className="checkbox" />
                    <label className={styles.label} htmlFor="veggie">Extra Veggies</label>
                </div>
            </div>
            <div className={styles.add}>
                <input type="number" defaultValue={1} className={styles.quantity} />
                <button className={styles.button}>
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
  )
}

export default Product