import * as React from "react";

import { ReactComponent as SocialIcon } from "../../../components/icons/social.svg";
import { ReactComponent as Visibility } from "../../../components/icons/visibility.svg";

import styles from "./styles.module.css";

export default function User({ user }) {
  function onClick(url) {
    window.open(url);
  }

  return (
    <>
      <div className={styles.container}>
        {user && (
          <>
            <div className={styles.img}>
              <img src={user.avatar_url} alt="prop" />
            </div>
            <div className={styles.block}>
              <div className={styles.name}>{user.name}</div>
              <div
                className={styles.login}
                onClick={() => onClick(user.html_url)}
              >
                {user.login}
              </div>
              <div className={styles.blockInfo}>
                <div className={styles.BlockFollowers}>
                  <SocialIcon className={styles.social} />
                  <div>{user.followers}</div>
                  <div className={styles.followers}>followers</div>
                </div>
                <div className={styles.blockFollowing}>
                  <Visibility className={styles.visibility} />
                  <div className={styles.following}>{user.following}</div>
                  <div>following</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
