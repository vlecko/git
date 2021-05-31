import * as React from "react";
import { ReactComponent as UnionIcon } from "../../../../components/icons/union.svg";

import styles from "./styles.module.css";

export default function EmptyRepository() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <UnionIcon />
      </div>
      <div className={styles.title}>Repository list is empty</div>
    </div>
  );
}
