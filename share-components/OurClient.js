import React from 'react'
import styles from "./TechnologiesWeUse.module.css";


const OurClient = () => {
  return (
    <div className={styles.container}>
      <h1>Our Clients</h1>
      <div className={styles.technologiescontainer}>
        <div className={styles.image_ourClient}>
          <img
            src="/images/our-client/Daung Kyal Nyi logo.jpg"
            alt="HTML"
            // width={46}
            // height={61}
            width={'85%'}
          />
        </div>
        <div className={styles.image_ourClient}>
          <img
            src="/images/our-client/Glaxy icon.jpg"
            alt="CSS"
            // width={46}
            // height={61}
            width={'70%'}
          />
        </div>
        <div className={styles.image_ourClient}>
          <img
            src="/images/our-client/HP LOGO PNG.png"
            alt="SASS"
            // width={86}
            // height={100}
            width={'65%'}
          />
        </div>
        <div className={styles.image_ourClient}>
          <img
            src="/images/our-client/Joker.jpeg"
            alt="Javascript"
            // width={46}
            // height={61}
            width={'60%'}
            borderRadius={'50%'}
          />
        </div>
        <div className={styles.image_ourClient}>
          <img
            src="/images/our-client/Mahar Nine Logo .jpg"
            alt="Reactjs"
            // width={80}
            // height={100}
            width={'60%'}
          />
        </div>
        <div className={styles.image_ourClient}>
          <img
            src="/images/our-client/my mobile logo.png"
            alt="Nextjs"
            // width={80}
            // height={100}
            width={'60%'}
          />
        </div>
        <div className={styles.image_ourClient}>
          <img
            src="/images/our-client/NT Branded Collection.jpg"
            alt="Strapi"
            // width={80}
            // height={100}
            width={'60%'}
          />
        </div>
        <div className={styles.image_ourClient}>
          <img
            src="/images/our-client/oakaww.png"
            alt="Nodejs"
            // width={100}
            // height={80}
            width={'60%'}
          />
        </div>
        <div className={styles.image_ourClient}>
          <img
            src="/images/our-client/Organic Nail Shop.jpg"
            alt="Ruby"
            // width={100}
            // height={80}
            width={'60%'}
          />
        </div>
        <div className={styles.image_ourClient}>
          <img
           src="/images/our-client/Second Tap Root.jpg"
            alt="Ruby on Rails"
            // width={100}
            // height={80}
            width={'60%'}
          />
        </div>
        <div className={styles.image_ourClient}>
          <img
            src="/images/our-client/shwe.jpg"
            alt="Flutter"
            // width={100}
            // height={70}
            width={'60%'}
          />
        </div>
        <div className={styles.image_ourClient}>
          <img
            src="/images/our-client/The Icon.jpeg"
            alt="MySQL"
            // width={100}
            // height={70}
            width={'60%'}
          />
        </div>
        <div className={styles.image_ourClient}>
          <img
            src="/images/our-client/thuka.jpg"
            alt="Postgresql"
            // width={100}
            // height={70}
            width={'60%'}
          />
        </div>
        <div className={styles.image_ourClient}>
          <img
            src="/images/our-client/Top Power Group Logo.png"
            alt="Mongodb"
            // width={100}
            // height={70}
            width={'60%'}
          />
        </div>
        <div className={styles.image_ourClient}>
          <img
            src="/images/our-client/Yoon_s Collection.jpg"
            alt="Sqlite"
            // width={100}
            // height={70}
            width={'60%'}
          />
        </div>
        {/* <div className={styles.image_ourClient}>
          <img
            src="/images/technologies/graphql.svg"
            alt="Graphql"
            width={100}
            height={70}
          />
        </div> */}
      </div>
    </div>
  )
}

export default OurClient