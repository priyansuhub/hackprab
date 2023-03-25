import { useEffect } from "react";
import styles from "./u-i-container.module.css";

const UIContainer = () => {
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
    <div className={styles.groupParent} data-animate-on-scroll>
      <img className={styles.groupChild} alt="" src="/group-3@2x.png" />
      <div className={styles.uiUxFrontendbackend}>ui-ux, frontend,backend</div>
      <div className={styles.priyansuRath}>Priyansu Rath</div>
    </div>
  );
};

export default UIContainer;
