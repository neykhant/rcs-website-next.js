import { useState, useEffect } from "react";
import Link from "next/link";
// import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.css";
import { useRouter } from "next/router";

function Footer() {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);

  const handleIsActive = () => setIsActive(!isActive);

  return (
    <div className={styles.container}>
      <div className={styles.contactcontainer}>
        <div className={styles.addresscontainer}>
          <h4>RCS</h4>
          <p>
            {/* No.24, 1st Floor, Kant Kaw Street, Between 22nd x 23rd Streets,
            Between 88th x 89th Streets, Aung Myay Thar Zan Township, Mandalay */}
            05011 No.24, 2F,Kant 87D St, Between 22 x 23 Sts, Aung Myay Thar Zan
            Tsp, Mandalay，Myanmar
          </p>
        </div>
        <div className={styles.socialcontainer}>
          <p>
            <FontAwesomeIcon icon={faPhoneAlt} size="lg" /> +959 799501600
          </p>
          <p>
            <Link href="https://mail.google.com">
              <a target="_blank">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />{" "}
                office@rcs-mm.com
              </a>
            </Link>
          </p>
          <p>
            <Link href="https://www.facebook.com/RealCodeSolutions">
              <a target="_blank">
                <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
              </a>
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.aboutcontainer}>
        <div className={styles.support}>
          <h4>Support</h4>
          <p>
            <Link href="/help">
              <a>Help</a>
            </Link>
          </p>
          <p>
            <Link href="/contact-us">
              <a>Contact Us</a>
            </Link>
          </p>
        </div>
        <div className={styles.team}>
          <h4>Team</h4>
          <p>
            <Link href="/about">
              <a>Members</a>
            </Link>
          </p>
          {/* <p>
            <Link href="/news">
              <a>News</a>
            </Link>
          </p>
          <p>
            <Link href="/blogs">
              <a>Blogs</a>
            </Link>
          </p> */}
        </div>
        <div className={styles.terms}>
          <h4>Terms & Policies</h4>
          <p>
            <Link href="/terms-and-conditions">
              <a>Terms of Uses</a>
            </Link>
          </p>
          <p>
            <Link href="/privacy-policy">
              <a>Privacy Policy</a>
            </Link>
          </p>
        </div>
      </div>
      <p className={styles.copyright}>
        &copy; 2021 Real Code Solution. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
