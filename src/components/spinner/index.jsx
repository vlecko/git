import React from "react";

import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

const override = css`
  width: 80px;
  height: 80px;
  display: block;
  margin: 0 auto;
  border-color: #808080;
  margin-top: 200px;
`;

function Spinner() {
  return (
    <div className="sweet-loading">
      <ClipLoader css={override} size={100} />
    </div>
  );
}

export default Spinner;
