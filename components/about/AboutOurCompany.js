import styles from "./AboutOurCompany.module.css";
import useTranslation from "next-translate/useTranslation";

function AboutOurCompany() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h1>About Our Company</h1>
      <div className={[styles.textcontainer, "paragraphfont"].join(" ")}>
        <p>{"RCS is a company of Myanmar IT professionals who provide reliable websites, web applications, and Android applications for businesses across Myanmar at a reasonable price."}</p>
        <p>{"RCS also has pre-built software."}</p>
        <p>{"The RCS was formed in 11-10-2021."}</p>
      </div>
    </div>
  );
}


export default AboutOurCompany;
