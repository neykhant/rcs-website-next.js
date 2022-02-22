// import Image from "next/image";
import styles from "./Speech.module.css";
import useTranslation from "next-translate/useTranslation";

function Speech() {
  const { t } = useTranslation();


  return (
    <div className={styles.container}>
      <h1>{"CEO's Greetings"}</h1>
      <div className={styles.card}>
        <img
          src="/images/about/chit-hsu-wai.jpeg"
          alt="CEO Profile"
          width={225}
          height={225}
          className={styles.image}
        />

        <div className={[styles.textcontainer, "paragraphfont"].join(" ")}>
          <p>{"Real Code Solutions is a software company founded this year. In this age of technology, small and medium-sized enterprises also need to be able to operate quickly and up-to-date. You need to save time, money and manpower."}</p>
          <p>{"The goal of RCS is to grow our own self-employment, which is slowly growing in our country and access to essential technology for small and medium enterprises."}</p>
          <p>{"For this reason, affordable software, creating websites, easy-to-understand manuals for our customers to use e-commerce sites, software training and services are provided for those who want to discuss."}</p>
          <p>{"We believe that the success of our clients through the use of software in our business is the result of our success."}</p>
          <p>{"We invite you to work with us for our clients' business."}</p>
        </div>
      </div>
    </div>
  );
}

export default Speech;
