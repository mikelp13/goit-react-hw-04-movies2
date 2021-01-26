import styled from "styled-components";

export const MovieContainer = styled.div`
  margin-top: 20px;
  display: flex;

  .moviePoster {
    margin-right: 30px;
    margin-bottom: 30px;
  }

  .movieRelease {
    margin-bottom: 20px;
  }
  .movieRate {
    margin-bottom: 20px;
  }

  .movieRateItem {
    padding: 0 2px;
    font-weight: 700;
    background-color: yellow;
    border: 1px solid #000;
    border-radius: 3px;
  }

  .movieInfoTitle {
    margin-bottom: 10px;
  }
  .movieInfo {
    margin-bottom: 20px;
  }
`;
