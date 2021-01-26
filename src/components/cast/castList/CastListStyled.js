import styled from "styled-components";

const CastListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  .castListItem {
    margin-right: 10px;
    margin-bottom: 10px;

    width: calc((100% - 80px) / 8);
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16);
    transition: transform 250ms ease-in-out;

    &:nth-child(8n) {
      margin-right: 0;
    }
  }
 
  .castListImg {
    max-width: 100%;
    height: auto;
  }
  .castListInfo {
    padding: 5px;
  }
  .castListTitle {
    font-weight: 500;
    text-align: center;
  }
  .castListDescr {
    font-size: 14px;
    text-align: center;
  }
`;
export default CastListStyled;
