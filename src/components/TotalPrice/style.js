import styled from "styled-components";
import {ReactSVG} from "react-svg";

export const TotalPriceWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 16px;
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: 600;
`;

export const TotalPriceText = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 95px;
  margin-top: 5px;
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 20px;
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

export const ShippingTextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const ShippingPrice = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 300;
  margin-left: 10px;
  
  & label {
    color: ${({ theme }) => theme.colors.linkColor};
    cursor: pointer;
    margin-left: 5px;
  }
`;

export const TruckIcon = styled(ReactSVG)`
  width: 24px;
  height: 24px;
  display: inline-block;
  position: relative;
  bottom: 5px;
`;