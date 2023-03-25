import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer";
import styles from "./frame-component3.module.css";

const FrameComponent3 = () => {
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
    <div className={styles.signup}>
      <div className={styles.signupInner}>
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
          <div className={styles.frameWrapper}>
            <div className={styles.loginWrapper}>
              <div className={styles.home}>Login</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.signupChild}>
        <div className={styles.frameGroup}>
          <div
            className={styles.pngtreeflowerContinuousOneWrapper}
            data-animate-on-scroll
          >
            <img
              className={styles.pngtreeflowerContinuousOne}
              alt=""
              src="/pngtreeflower-continuous-one-line-art-4011135-2@2x.png"
            />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.groupParent}>
              <input
                className={styles.frameChild}
                type="text"
                placeholder="USERNAME"
              />
              <input
                className={styles.frameChild}
                type="text"
                placeholder="PASSWORD"
              />
              <input
                className={styles.frameChild}
                type="text"
                placeholder="EMAIL"
              />
              <div className={styles.home}>Already have an account? log-in</div>
            </div>
            <div className={styles.submitWrapper}>
              <div className={styles.home}>Submit</div>
            </div>
          </div>
        </div>
      </div>
      <Footer footerFrame15Width="unset" />
    </div>
  );
};

export default FrameComponent3;
