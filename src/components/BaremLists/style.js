import styled from "styled-components";

export const PriceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0;
  width: 100%;
  font-size: 16px;
`;

export const PriceGridItem = styled.div`
  padding: 5px 30px 5px 15px;
  
  background: ${({ selected }) => selected ? "rgba(245, 227, 117, 0.32)" : "transparent"};
  font-weight: ${({ selected }) => selected ? "500" : "400"};
  
  &:not(:last-child) {
    border-color: rgba(225, 225, 225, 0.51);
    border-width: 0 2px 0 0;
    border-style: solid;
  }
`;

export const QuantityArea = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const QuantityTitles = styled.div`
  display: flex;
  max-width: 100px;
  width: 100%;
  justify-content: space-between;
  margin-right: 10px;
`;

export const PricesArea = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(246, 246, 246, 0.79);
  margin-top: 20px;
  padding: 16px 10px;
`;

export const PricesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const PriceTitles = styled.div`
  max-width: 100px;
  display: flex;
  justify-content: space-between;
  margin-right: 10px;
  width: 100%;
`;

export const QuantityInput = styled.input`
  text-align: center;
  padding: 10px;
  border-radius: 3px;
  outline: none;
  border: 1px solid #bebebe;
  box-shadow: none;
  font-size: 16px;
  width: 70px;
  margin-left: 10px;
`;

export const QuantityInputText = styled.span`
  margin-left: 10px;
`;