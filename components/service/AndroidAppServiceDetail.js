// import Image from "next/image";
import styles from "./AndroidAppServiceDetail.module.css";
import useTranslation from "next-translate/useTranslation";
import CheckoutBtn from "../../share-components/CheckoutBtn";

function AndroidAppServiceDetail() {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <h1>Android Application</h1>
      <div className={styles.detailcard}>
        <div className={styles.textcontainer}>
          <p>
            <b>The biggest advantage of a mobile app is that it delivers quickly to the user.</b>{" "}
            Consumers love it because it can be used anywhere and anytime. That is why there are so many users.
          </p>
          <p>Many businesses these days focus on advertising and marketing. Personal mobile apps are being developed to show that the business is more robust.</p>
          <p>RCS create Good performance, Smartly designed and powerful mobile apps.</p>


          <CheckoutBtn path="Android App Service" />
        </div>
        <img
          src="/images/services/android-application/android-application.jpg"
          alt="Android Application"
          width={400}
          height={300}
          className={styles.image}
        />
      </div>
    </div>
  );
}

export default AndroidAppServiceDetail;
