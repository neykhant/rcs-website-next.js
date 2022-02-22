import { useRef, useState } from "react";
import { useRouter } from "next/router";
import styles from "./CheckoutForm.module.css";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import useTranslation from "next-translate/useTranslation";
import { ReCAPTCHA_KEY } from "../../util";

function CheckoutForm() {
  const { t } = useTranslation();

  const router = useRouter();
  const formRef = useRef();
  const recaptchaRef = useRef(null);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = await recaptchaRef.current.getValue();

    if (token) {
      emailjs
        .sendForm(
          "service_o3sygxg",
          "template_tywswjj",
          event.target,
          "user_3sqplwTbhCGngVXj6bvox"
        )
        .then((response) => {
          setMessage("Our team have received your order.");
          formRef.current.reset();
        })
        .catch((error) => {
          setMessage("Something was wrong.Please send again!");
        });
    } else {
      setMessage("Please select, I'm not robot");
    }
  };

  const handleAlert = () => {
    setMessage("");
  };


  return (
    <div className={styles.container}>
      
      <div className={styles.formcontainer}>
        <h2>Send us you’re interested in our product or service </h2>
        <p className="paragraphfont">
          We’ll get in touch you as soon as possible.
        </p>
        {message && (
          <div className={styles.alert}>
            {message}
            <FontAwesomeIcon
              icon={faTimes}
              className={styles.close}
              onClick={handleAlert}
            />
          </div>
        )}
        <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="order">Your Order Name</label>
            <input
              type="text"
              id="order"
              name="order"
              defaultValue={router.query.order}
              readOnly
              required
            />
          </div>
          <div>
            <label htmlFor="name">Your name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Your email address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Your phone number</label>
            <input
              type="phone"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <br />
          <div>
            <ReCAPTCHA ref={recaptchaRef} sitekey={ReCAPTCHA_KEY} />
          </div>
          <div className={styles.action}>
            <button>Order</button>
          </div>
        </form>
      </div>

      <div className={styles.textcontainer}>
        <h2>Checkout Sending</h2>
        <p className="paragraphfont">Checkout is to notify the RCS team of the product or service you are interested in purchasing. In the checkout form, You can notify the RCS team by entering name, phone number and email address correctly. The RCS team will notify you by phone as soon as possible after receiving your notice. After that, you can inquire about the details of the product or service you want to buy and the RCS team will also ask you about the price or product related to the product or service. Payment methods will be explained in detail. You can also contact the phone number 09 799501600.</p>
      </div>

    </div>
  );
}

export default CheckoutForm;
