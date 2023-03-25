import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./c2-d-card.module.css";

const C2DCard = () => {
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

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.loginInner}>
      <div className={styles.frameParent}>
        <div
          className={styles.c2dWrapper}
          onClick={onFrameContainerClick}
          data-animate-on-scroll
        >
          <div className={styles.c2d}>C2D</div>
        </div>
        <div className={styles.homeParent}>
          <div className={styles.home}>Home</div>
          <div className={styles.home}>about</div>
          <div className={styles.home}>Code-Base</div>
        </div>
        <div className={styles.groupWrapper}>
          <button className={styles.frameWrapper} data-animate-on-scroll>
            <div className={styles.signUpWrapper}>
              <div className={styles.signUp}>Sign-up</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default C2DCard;
