import { useMemo, useEffect } from "react";
import styles from "./footer.module.css";

const Footer = ({ footerFrame15Width }) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: footerFrame15Width,
    };
  }, [footerFrame15Width]);

  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className={styles.homepageInner} style={frameDivStyle}>
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent} data-animate-on-scroll>
          <div className={styles.groupChild} />
          <div className={styles.groupItem} />
          <div className={styles.groupInner} />
        </div>
        <div className={styles.div}>
          私たちは何があっても決してあきらめません
        </div>
        <div className={styles.rectangleGroup} data-animate-on-scroll>
          <div className={styles.rectangleDiv} />
          <div className={styles.groupChild1} />
          <div className={styles.groupChild2} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
