import styled from "styled-components";

export const SliderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
  width: 100%;
  height: 100px;
`;

export const Arrows = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;
  min-width: 40px;
  border: 1px solid #cecece;
  background-color: #ffffff;
  cursor: pointer;
  user-select: none;
  
  &:hover {
    background-color: #eaeaea;
  }
  &:active {
    background-color: #eaeaea6e;
  }

  .right {
    transform: rotate(90deg);
    width: 24px;
  }

  .left {
    transform: rotate(-90deg);
    width: 24px;
  }
`;

export const Thumbnails = styled.div`
  flex-basis: 100%;
  display: flex;
  margin: 0 8px;
  overflow: hidden;

  img {
    border: 1px solid #cecece;
    margin-right: 8px;
    cursor: pointer;
    width: 100px;
    &.selected {
      border: 1px solid #464646;
    }
    &:hover {
      border: 1px solid #a1a0a0;
    }
  }
`;