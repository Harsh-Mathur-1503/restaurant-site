import Image from 'next/image';
import React from 'react';
import styles from "../styles/cart.module.css";
const cart = () => {
  return (
    <>
       <div className={styles.container}>
        <div className={styles.left}>
        <table className={styles.table}>
                <tbody>
                <tr className={styles.trTitle}>
                    <th>Products</th>
                    <th>Name</th>
                    <th>Extras</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src="/img/pizza.png" alt="" layout="fill" objectFit="cover" />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>
                                CORALZO
                            </span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Double Ingredient , Extra Veggies
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>
                                199
                            </span>
                        </td>
                        <td>
                            <span className={styles.quantity}>
                                2
                            </span>
                        </td>
                        <td>
                            <span className={styles.total}>
                               Rs. 459
                            </span>
                        </td>
                    </tr>
                    <tr className={styles.tr}>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src="/img/pizza.png" alt="" layout="fill" objectFit="cover" />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>
                                CORALZO
                            </span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Double Ingredient , Extra Veggies
                            </span>
                        </td>
                        <td>
                            <span className={styles.price}>
                                199
                            </span>
                        </td>
                        <td>
                            <span className={styles.quantity}>
                                2
                            </span>
                        </td>
                        <td>
                            <span className={styles.total}>
                               Rs. 459
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div className={styles.right}>
        <div className={styles.wrapper}>
                <h2>
                    CART TOTAL
                </h2>
                <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>Rs. 429
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Delivery:</b>Rs. 30
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>Rs. 459
          </div>
          <button className={styles.button}>
            CHECKOUT NOW 
          </button>
            </div>
        </div>

       </div>
    </>
  )
}

export default cart