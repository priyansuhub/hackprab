import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./section-card.module.css";

const SectionCard = () => {
  const navigate = useNavigate();
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

  const onFrameButtonClick = useCallback(() => {
    navigate("/frame-33");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/frame-34");
  }, [navigate]);

  return (
    <div className={styles.homepageInner}>
      <div className={styles.frameParent}>
        <div className={styles.c2dWrapper} data-animate-on-scroll>
          <div className={styles.c2d}>C2D</div>
        </div>
        <div className={styles.homeParent}>
          <div className={styles.home}>Home</div>
          <div className={styles.home}>about</div>
          <div className={styles.home}>Code-Base</div>
        </div>
        <div className={styles.frameGroup}>
          <button className={styles.loginWrapper} onClick={onFrameButtonClick}>
            <div className={styles.login}>Login</div>
          </button>
          <button
            className={styles.frameWrapper}
            onClick={onGroupButtonClick}
            data-animate-on-scroll
          >
            <div className={styles.signUpWrapper}>
              <div className={styles.signUp}>Sign-up</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionCard;
