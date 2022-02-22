// import Image from "next/image";
import Button from "./Button";
import styles from "./CheckServices.module.css";
import useTranslation from "next-translate/useTranslation";

function CheckServices() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
        <div className={styles.image}>
          <img
            src="/images/home/check-services.png"
            alt="Check Services"
            width={766}
            height={496}
          />
        </div>

        <h2>
          {"We believe in collaboration."}
          <br /> {"By working together, we can achieve so many things."}
        </h2>


        <p className="paragraphfont">{"We offer a lot of services. We can make any kind of website for your needs. We can develop web applications to solve complex tasks and to achieve specific functionalities for your works. We can develop android applications if you need an android app for your business."}</p>
        <Button path="/services" label="Check Services" />
      </div>
    </div>
  );
}

export default CheckServices;
