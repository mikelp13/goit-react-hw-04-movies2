import styled from "styled-components";

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  .movieListItem {
    margin-right: 30px;
    margin-bottom: 30px;
    background-color: #1e2625;
    width: calc((100% - 120px) / 4);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    transition: transform 250ms ease-in-out;

    &:nth-child(4n) {
      margin-right: 0;
    }

    &:nth-last-child(-n + 4) {
      margin-bottom: 0;
    }

    &:hover,
    &:focus {
      transform: scale(1.05);
    }
  }
  .movieListLink {
    font-size: 18px;
    color: #fff;
    text-decoration: none;
  }

  .movieListImage {
    max-width: 100%;
    height: auto;
  }

  .movieListTitle {
    padding: 10px;
  }
`;
export default List;
