import * as React from "react";
import { connect } from "react-redux";
import moment from "moment";
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";

import Spinner from "../../../components/spinner";
import { fetchRepositories } from "../../../resources/repositories/repositories.actions";
import styles from "./styles.module.css";

function Repository({ fetchRepositories, repositories, user }) {
  const [loading, setLoading] = React.useState(false);
  function onClick(url) {
    window.open(url);
  }

  const itemRender = (current, type, element) => {
    if (type === "page") {
      return <a href={`#${current}`}>{current}</a>;
    }
    return element;
  };
  
  const onChange = async (page) => {
    try {
      setLoading(true);
      await fetchRepositories(user.repos_url, page);
      setLoading(false);
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {repositories && (
        <div className={styles.title}>
          {repositories.length === 1 ? "Repository" : "Repositories"}(
          {user.public_repos})
        </div>
      )}
      {!loading ? (
        <div>
          {(repositories || []).map((rep) => {
            return (
              <div key={rep.id} className={styles.block}>
                <div
                  onClick={() => onClick(rep.html_url)}
                  className={styles.name}
                >
                  {rep.name}
                </div>
                <div className={styles.data}>
                  {moment(rep.updated_at).format("MMMM Do YYYY")}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={styles.loading}>
          <Spinner />
        </div>
      )}
      <Pagination
        style={{
          marginBottom: "30px",
          display: "flex",
          listStyleType: "none",
          justifyContent: "space-around",
          cursor: "pointer",
        }}
        showTotal={(total, range) =>
          `${range[0]} - ${range[1]} of ${total} items`
        }
        total={user.public_repos}
        itemRender={itemRender}
        onChange={onChange}
      />
    </div>
  );
}
export default connect(null, {
  fetchRepositories,
})(Repository);
