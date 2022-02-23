// import Image from "next/image";
import Button from "./Button";
import styles from "./CheckProducts.module.css";
import useTranslation from "next-translate/useTranslation";


function CheckProduct() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img
          src="/images/home/check-products.png"
          alt="Check Products"
          width={766}
          height={496}
        />
      </div>

      <h2>
        We just don’t offer products.
        <br /> We offer solutions.
        <br /> We focus on solving the pain in your works.
      </h2>

      <p className="paragraphfont">All of our products were developed by circling through the requirement analysing, building based upon the real world datas, testing under various test methods and situations, and finally when the products meet their best potential, we deliver them to the public.</p>
      <Button path="/products" label="Check Products" />
    </div>
  );
}

export default CheckProduct;
