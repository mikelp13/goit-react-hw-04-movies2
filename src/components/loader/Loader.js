import React from "react";
import { css } from "@emotion/core";
import HashLoader from "react-spinners/HashLoader";

const override = css`
  display: block;
  margin: 0 auto;
  margin-top:50px
`;

const Loader = () => {
  return <HashLoader color="#828c84" loading="true" css={override} size={100} />;
};

export default Loader;
