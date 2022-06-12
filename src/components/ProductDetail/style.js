import styled from "styled-components";

export const ProductTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 500;
  max-height: 55px;
  margin: 5px 0 20px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: calc(100% - 145px);
  justify-content: flex-end;
  align-items: center;
`;

export const AddToCartButton = styled.button`
  margin-top: 10px;
  cursor: pointer;
  background-color: #ffba0c;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  padding: 25px 70px;
  box-sizing: border-box;
  font-size: 18px;
  font-weight: 600;

  &:disabled {
    background-color: rgba(255, 169, 12, 0.55);
    cursor: no-drop;
  }
`;

export const PaymentOptionsText = styled.span`
  margin-left: 15px;
  font-size: 18px;
  color: #0580c7;
  cursor: pointer;
`;