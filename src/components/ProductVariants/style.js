import styled from "styled-components";

export const OptionsGrid = styled.div`
  display:grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  width: 100%;
  align-items: center;
`;

export const GridItem = styled.div`
  border: ${({ selected }) => selected ? "3px solid #646464" : "1px solid rgba(225, 225, 225, 0.51)"};
  border-radius: 3px;
  padding: 15px 25px;
  text-align: center;
  cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"};
  font-weight: ${({ selected }) => selected ? "600" : "500"};
  opacity: ${({ disabled }) => disabled ? "0.5" : "1"};
`;

export const VariantWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  padding: 0 16px;
`;

export const VariantLabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 110px;
  margin-right: 10px;
  font-size: 16px;
  font-weight: 500;
`;

export const ProductVariant = styled.div`
  margin-top: 10px;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const LabelColon = styled.label`
  text-align: right;
`;