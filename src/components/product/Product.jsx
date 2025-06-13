import { HeartIcon } from "lucide-react";
import React from "react";
import styles from "@/styles/Product.module.css";
import Image from "next/image";
function Product({ product }) {
  return (
    <div className={styles.container}>
      {/* out of stock */}
      {product.id === 2 && (
        <div className={styles.outOfStock}>
          <span>Out of Stock</span>
        </div>
      )}
      {/* new product */}
      {product.id === 1 && (
        <div className={styles.badge}>
          <span>New Product</span>
        </div>
      )}
      <Image
        src={product.image}
        alt={product.category}
        width={300}
        height={399}
      />
      <div className={styles.info}>
        <h4>{product.title.slice(0, 20)}...</h4>
        <div>
          <p>
            <span>Sign in</span> or Create an account to see pricing
          </p>
          <HeartIcon
            className={`${product.id === 3 ? styles.wishlist : styles.normal}`}
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
