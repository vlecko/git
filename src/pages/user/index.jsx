import * as React from "react";
import { connect } from "react-redux";

import { ReactComponent as SearchIcon } from "../../components/icons/search.svg";
import User from "./user";
import Repository from "./repository";
import EmptyRepository from "./repository/empty/index";
import NotFound from "./user/user_not_found/index";
import { getRepositories } from "../../resources/repositories/repositories.selectors";

import styles from "./styles.module.css";

function SearchUser({ user, repositories }) {
  if (user.query && !user.user.login) {
    return <NotFound />;
  }
  if (!user.query) {
    return (
      <div className={styles.blockContainer}>
        <div className={styles.blok}>
          <SearchIcon className={styles.search} />
        </div>
        <div className={styles.titleBlok}>
          <p className={styles.title}>Start with searching a GitHub user</p>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className={styles.container}>
        {user.user.login && <User user={user.user} />}
        {repositories.length === 0 && (
          <div className={styles.empty}>
            <EmptyRepository />
          </div>
        )}
        {repositories.length !== 0 && (
          <Repository repositories={repositories} user={user.user} />
        )}
      </div>
    </>
  );
}
export default connect((state) => ({
  repositories: getRepositories(state),
}))(SearchUser);
