import styled from "styled-components";

export const RoomWrapper = styled.div`
  position: relative;
  padding: 30px 20px;
  margin-top: 128px;

  .title {
    font-size: 22px;
    color: #222;
    font-weight: bold;
    margin: 0 0 10px 10px
  }
  .room-list {
    display: flex;
    flex-wrap: wrap;
  }
  > .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255,255,255,0.8);
  }
`;