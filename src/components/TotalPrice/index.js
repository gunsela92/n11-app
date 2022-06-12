import React from "react";
import {ShippingPrice, ShippingTextWrapper, TotalPrice, TotalPriceText, TotalPriceWrapper, TruckIcon} from "./style";
import TruckImage from "../../assets/truck.svg";
import PropTypes from "prop-types";

const TotalPriceCalculator = ({baremPrices}) => {
  return (
    <TotalPriceWrapper>
      <TotalPriceText>
        <span>Toplam</span>
        <label>:</label>
      </TotalPriceText>
      <TotalPrice>
        {baremPrices} TL
        <br/>
        <ShippingTextWrapper>
          <TruckIcon src={TruckImage} />
          <ShippingPrice>
            Kargo ücreti:
            <label>Alıcı Öder</label>
          </ShippingPrice>
        </ShippingTextWrapper>
      </TotalPrice>
    </TotalPriceWrapper>
  );
};

TotalPriceCalculator.propTypes = {
  baremPrices: PropTypes.string,
}

export default TotalPriceCalculator;
