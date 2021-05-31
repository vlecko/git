import * as React from "react";
import { connect } from "react-redux";

import Spinner from "../components/spinner";
import Header from "../layout/header";
import SearchUser from "./user";
import { getUser } from "../resources/user/user.selectors";
import { fetchRepositories } from "../resources/repositories/repositories.actions";

const GitHub = ({ user, fetchRepositories, loading }) => {
  React.useEffect(() => {
    fetchRepositories(user.user.repos_url, "1");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <>
      <Header />
      {!loading ? <SearchUser user={user} /> : <Spinner />}
    </>
  );
};

export default connect(
  (state) => ({
    user: getUser(state),
    loading: state.loading,
  }),
  {
    fetchRepositories,
  }
)(GitHub);
