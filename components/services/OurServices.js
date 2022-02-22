import styles from "./OurServices.module.css";
import Link from "next/link";
// import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

function OurServices() {
  const { t } = useTranslation();


  return (
    <div className={styles.container}>
      <h1>Our Services</h1>
      <div className={styles.cardcontainer}>
        {/* Website Service */}
        <div className={styles.card}>
          <div className={styles.imagecontainer}>
            <img
              src="/images/services/website/website-service.jpg"
              alt="Website Service"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />

          </div>
          <h4>Website</h4>
          <p>In the website service, you can choose the package that suits your business.</p>
          <ul>
            <li>Basic Website Packages</li>
            <li>Standard Website Packages</li>
            <li>First Class Website Packages</li>
            <li>E-Commerce</li>
          </ul>
          <Link href="/services/website">
            <a className={styles.btn}>Read More</a>
          </Link>
        </div>

        {/* Web App */}
        <div className={styles.card}>
          <div className={styles.imagecontainer}>
            <img
              src="/images/services/web-application/web-application-1.jpg"
              alt="Website Application"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
          <h4>Web Application</h4>
          <p>This is an app that allows you to customize and customize your business to get things done faster and up-to-date in the workplace.</p>
          <ul>
            <li>Fully Responsive Web App</li>
            <li>Creative Design</li>
            <li>User Friendly</li>
          </ul>
          <Link href="/services/web-application">
            <a className={styles.btn}>Read More</a>
          </Link>
        </div>

        {/* Android Application */}
        <div className={styles.card}>
          <div className={styles.imagecontainer}>
            <img
              src="/images/services/android-application/android-application.jpg"
              alt="Website Application"
              layout="fill"
              objectFit="cover"
              className={styles.image}
            />
          </div>
          <h4>Android Application</h4>
          <ul>
            <li>Everyone with a mobile phone can download the app.</li>
            <li>Everyone who uses a mobile app loves it.</li>
            <li>If you want your business to be user-friendly, you need a mobile app.</li>
          </ul>
          <Link href="/services/android-application">
            <a className={styles.btn}>Read More</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurServices;
