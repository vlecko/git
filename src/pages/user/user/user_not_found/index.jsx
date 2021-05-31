import * as React from "react";

import { ReactComponent as Ellipse } from "../../../../components/icons/ellipse.svg";
import styles from "../../styles.module.css";

export default function NotFound() {
  return (
    <>
      <div className={styles.blockContainer}>
        <div className={styles.blok}>
          <Ellipse className={styles.search} />
        </div>
        <div className={styles.titleBlok}>
          <p className={styles.title}>User not found</p>
        </div>
      </div>
    </>
  );
}
