import styled from "styled-components";

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root {
      margin: 0 10px;
      &:hover {
        text-decoration: underline;
      }
    }
    /* 左右箭头大小 */
    .css-g2z002-MuiSvgIcon-root-MuiPaginationItem-icon {
      font-size: 25px;
    }
    .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected {
      background-color: #222;
      color: #fff;
    }

    .desc {
      margin-top: 16px;
    }
  }
`;