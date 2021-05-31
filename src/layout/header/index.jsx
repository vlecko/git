import * as React from "react";
import { connect, useDispatch } from "react-redux";

import { fetchUser } from "../../resources/user/user.actions";
import { ReactComponent as LogoIcon } from "../../components/icons/gitLogo.svg";
import { ReactComponent as SearchIcon } from "../../components/icons/search.svg";

import styles from "./header.module.css";

function Header({ fetchUser }) {
  const [input, setInput] = React.useState("");

  const dispatch = useDispatch();

  const search = async (e) => {
    if (e.key === "Enter" && input) {
      fetchUser(input);
      if (input) {
        dispatch({ type: "SET_QUERY", input });
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <div className={styles.logo}>
          <LogoIcon />
        </div>
        <div className={styles.blokInput}>
          <SearchIcon className={styles.search} />
          <input
            onKeyPress={search}
            className={styles.input}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default connect(null, { fetchUser })(Header);
