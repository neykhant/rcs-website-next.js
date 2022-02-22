// import Image from "next/image";
import styles from "./ProductDetailCard.module.css";
import useTranslation from "next-translate/useTranslation";
import CheckoutBtn from "../../share-components/CheckoutBtn";

function ProductDetailCard({
  image,
  name,
  about,
  featuresIncluded,
  servicesIncluded,
  featuresSoftware,
  requiredEquipments,
  benefits,
  note,
}) {
  const { t } = useTranslation();


  return (
    <div className={styles.detailcard}>
      <div className={styles.descriptioncontainer}>
        <h4>About the software</h4>
        <p>about</p>
        <h4>Features included</h4>
        <ul>
          {featuresIncluded.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <h4>Services included</h4>
        <ul>
          {servicesIncluded.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <h4>Features of RCS software</h4>
        <ul>
          {featuresSoftware.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <h4>Required machinery and equipment</h4>
        <ul>
          {requiredEquipments.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <h4>Benefits of using the software</h4>
        <ul>
          {benefits.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <p>{note}</p>
        <CheckoutBtn path={name} />
      </div>
      <div className={styles.imagecontainer}>
        <img
          src={image}
          alt={name}
          width={500}
          height={400}
          className={styles.image}
        />
      </div>
    </div>
  );
}

export default ProductDetailCard;
