import { useEffect } from "react";
import C2DCard from "../components/c2-d-card";
import Footer from "../components/footer";
import styles from "./frame-component.module.css";

const FrameComponent = () => {
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
    <div className={styles.login}>
      <C2DCard />
      <div className={styles.loginInner}>
        <div className={styles.frameParent}>
          <div className={styles.pngwing2Wrapper} data-animate-on-scroll>
            <img
              className={styles.pngwing2Icon}
              alt=""
              src="/pngwing-2@2x.png"
            />
          </div>
          <div className={styles.frameGroup} data-animate-on-scroll>
            <div className={styles.groupParent}>
              <input
                className={styles.frameChild}
                type="text"
                placeholder="Username"
              />
              <input
                className={styles.frameChild}
                type="text"
                placeholder="PASSWORD"
              />
              <div className={styles.dontHaveAnd}>
                Dont have and account SIGN-UP
              </div>
            </div>
            <div className={styles.submitWrapper}>
              <div className={styles.dontHaveAnd}>Submit</div>
            </div>
          </div>
        </div>
      </div>
      <Footer footerFrame15Width="unset" />
    </div>
  );
};

export default FrameComponent;
