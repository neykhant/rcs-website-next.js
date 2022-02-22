// import Image from "next/image";
import styles from "./WebAppServiceDetail.module.css";
import useTranslation from "next-translate/useTranslation";
import CheckoutBtn from "../../share-components/CheckoutBtn";

function WebAppServiceDetail() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h1>Web Application</h1>

      <div className={styles.detailcard}>
        <div className={styles.textcontainer}>
          <p>
            <b>{"Unlike a website, a web application is much wider and has more features."}</b>{" "}
            {"For example, Facebook and Twitter are web apps. It is important for a web app to be responsive and to have a beautiful design to attract your customers. Ease of use of a web app and Attractive design have a huge impact on your brand image."}
          </p>
          <p>
            <b>{t("webAppServiceDetail:web-app-hightlight-2")}</b>{" "}
            {t("webAppServiceDetail:web-app-description-1")}
          </p>
          <p>
            <b>{t("webAppServiceDetail:web-app-hightlight-3")}</b>{" "}
            {t("webAppServiceDetail:web-app-description-1")}
          </p>

          <CheckoutBtn path="Web App Service" />
        </div>
        <img
          src="/images/services/web-application/web-application-1.jpg"
          alt="Web Application"
          width={400}
          height={300}
          className={styles.image}
        />
      </div>
    </div>
  );
}

export default WebAppServiceDetail;
