import ButtonCard from "../components/button-card";
import UIContainer from "../components/u-i-container";
import Footer from "../components/footer";
import styles from "./frame-component1.module.css";

const FrameComponent1 = () => {
  return (
    <div className={styles.about}>
      <ButtonCard />
      <div className={styles.aboutInner}>
        <div className={styles.groupParent}>
          <UIContainer />
          <UIContainer />
        </div>
      </div>
      <Footer footerFrame15Width="unset" />
    </div>
  );
};

export default FrameComponent1;
