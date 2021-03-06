import Link from "next/link";
import styles from "./ServiceHeroShared.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function ServiceHeroShared({ featuredServices }) {
  return (
    <div className={styles.container}>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        renderArrowPrev={(clickHandler, hasPrev, label) => {
          return (
            hasPrev && (
              <span className="arrow-left" onClick={clickHandler}>
                <span>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </span>
              </span>
            )
          );
        }}
        renderArrowNext={(clickHandler, hasNext, label) => {
          return (
            hasNext && (
              <span className="arrow-right" onClick={clickHandler}>
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </span> 
            )
          );
        }}
      >
        {featuredServices.map((featuredService) => (
          <div
            key={featuredService.id}
            style={{
              backgroundImage: `url(${featuredService.image})`,
            }}
            className={styles.slidercontainer}
          >
            <div className={styles.textcontainer}>
              <h2>{featuredService.title}</h2>
              <p className="paragraphfont">
                {featuredService.featuredDescription}
              </p>
              <Link href={`/services/${featuredService.id}`}>
                <a className={styles.btn}>Read More</a>
              </Link>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ServiceHeroShared;
