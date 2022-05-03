// import Image from "next/image";
import styles from "./OurTeam.module.css";

function OurTeam() {
  return (
    <div className={styles.container}>
      <h1>Our Team Members</h1>
      <div className={styles.membercontainer}>
        <div className={styles.member}>
          <img
            src="/images/about/phyu-hnin-wai.png"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Phyu Hnin Wai</h3>
          <h3>Director</h3>
        </div>
        <div className={styles.member}>
          <img
            src="/images/our_images/Chang Myat Thu.png"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Chan Myat Thu</h3>
          <h3>General Manager</h3>
        </div>
        {/* <div className={styles.member}>
          <img
            src="/images/about/soe-zayar.jpg"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Soe Zayar</h3>
          <h3>Senior Web and Android Developer</h3>
        </div> */}

        {/* <div className={styles.member}>
          <img
            src="/images/about/zin-wai-moe.jpg"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Zin Wai Moe</h3>
          <h3>General Manager</h3>
        </div> */}

        <div className={styles.member}>
          <img
            src="/images/our_images/Kaung San Hein.png"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Kaung San Hein</h3>
          <h3> Web and Android Developer</h3>
        </div>
        {/* <div className={styles.member}>
          <img
            src="/images/our_images/Lin Min Htet.png"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Lin Min Htet</h3>
          <h3> Web and Android Developer</h3>
        </div> */}
        
        <div className={styles.member}>
          <img
            src="/images/our_images/hein2.jpg"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Khant Maw Hein</h3>
          <h3> Web and Android Developer</h3>
        </div>
        <div className={styles.member}>
          <img
            src="/images/our_images/Kayzin Maung.png"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Kay Zin Maung</h3>
          <h3> Web and Android Developer</h3>
        </div>
        <div className={styles.member}>
          <img
            src="/images/our_images/Sai Kaung Htet Naing.png"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Sain Kaung Htet Naing</h3>
          <h3>Graphic Designer</h3>
        </div>
        <div className={styles.member}>
          <img
            src="/images/our_images/Nang Thuzar Win.png"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Nan Thuzar Win</h3>
          <h3>Marketing Coordinator</h3>
        </div>
        <div className={styles.member}>
          <img
            src="/images/our_images/BO BO.png"
            alt="Profile"
            width={225}
            height={225}
            className={styles.image}
          />
          <h3>Bo Bo Han Htet</h3>
          <h3>Marketing Staff</h3>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
