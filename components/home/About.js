// import Image from "next/image";
import styles from "./About.module.css";
import Button from "./Button";
import useTranslation from "next-translate/useTranslation";

function About() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
        <div className={styles.image}>
          <img
            src="/images/home/about.png"
            alt="About"
            width={766}
            height={496}
          />
        </div>

        <div className={styles.paragraph}>
          <p className="paragraphfont">{"We built our company based on the values, standards and rules. Our customers and their needs mean everything to us. When we have to decide something, or when we reach some points, we only make decisions based on the happiness of our clients."}</p>
        </div>
      </div>
      <div className={styles.buttoncontainer}>
        <Button path="/about" label="Go to About" />
      </div>
    </div>
  );
}

export default About;
