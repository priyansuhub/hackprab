import SectionCard from "../components/section-card";
import Footer from "../components/footer";
import styles from "./frame-component2.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.homepage}>
      <SectionCard />
      <div className={styles.homepageInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.documentGennyParent}>
              <div className={styles.documentGenny}>
                <p className={styles.document}>document</p>
                <p className={styles.document}>genny_@@</p>
              </div>
              <div className={styles.withVisualizations}>
                With Visualizations
              </div>
            </div>
            <button className={styles.startWrapper}>
              <div className={styles.start}>Start</div>
            </button>
          </div>
          <div className={styles.pngwing1Wrapper}>
            <img
              className={styles.pngwing1Icon}
              alt=""
              src="/pngwing-1@2x.png"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FrameComponent2;
