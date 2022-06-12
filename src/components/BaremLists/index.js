import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {
  PriceGrid,
  PriceGridItem,
  PricesArea,
  PricesWrapper,
  PriceTitles,
  QuantityArea, QuantityInput, QuantityInputText,
  QuantityTitles
} from "./style";
import {LabelColon} from "../ProductVariants/style";

const BaremList = ({ baremListData, changeQuantity, selectedQuantity, selectedProductInfo }) => {
  const [baremList, setBaremList] = useState([]);

  const onChangeQuantity = val => {
    const itemCount = parseInt(val.target.value);
    changeQuantity(itemCount);
  };

  useEffect(() => {
    if (baremListData) {
      const mappedBaremList = baremListData.map(item => {
        return {...item, selected: item.minimumQuantity <= selectedQuantity && selectedQuantity <= item.maximumQuantity}
      });
      setBaremList(mappedBaremList);
    }
  }, [baremListData, selectedQuantity])

  return (
    <PricesArea>
      <PricesWrapper>
        <PriceTitles>
          <span>Toptan Fiyat<br/>(Adet)</span>
          <LabelColon>:</LabelColon>
        </PriceTitles>
        <PriceGrid>
          {baremList?.map((item, index) => (
            <PriceGridItem key={index} selected={item.selected && selectedProductInfo?.id}>
              <span>{`${item.minimumQuantity} - ${item.maximumQuantity > 2000 ? "2000+" : item.maximumQuantity}`}</span><br/>
              <span>{`${item.price} TL`}</span>
            </PriceGridItem>
          ))}
        </PriceGrid>
      </PricesWrapper>
      <QuantityArea>
        <QuantityTitles>
          <span>Adet</span>
          <LabelColon>:</LabelColon>
        </QuantityTitles>
        <QuantityInput type="number" id="quantity" min="1" onChange={onChangeQuantity}/>
        <QuantityInputText className="input-text">Adet</QuantityInputText>
      </QuantityArea>
    </PricesArea>)
}

BaremList.propTypes = {
  baremListData: PropTypes.array.isRequired,
  selectedQuantity: PropTypes.number,
  changeQuantity: PropTypes.func.isRequired,
  selectedProductInfo: PropTypes.object
};

export default BaremList;
