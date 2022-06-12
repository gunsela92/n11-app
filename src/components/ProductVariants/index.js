import React from "react";
import PropTypes from "prop-types";
import BaremList from "../BaremLists/index";
import {PRODUCT_TYPE_ATTRIBUTES} from "../../config";
import {GridItem, LabelColon, OptionsGrid, ProductVariant, VariantLabelWrapper, VariantWrapper} from "./style";

const ProductVariants = ({productData, colorOptions, sizeAttributes, onSelectChange, selectedProductInfo, changeQuantity, selectedQuantity}) => {
  const {COLOR, SIZE} = PRODUCT_TYPE_ATTRIBUTES;

  return (
    <ProductVariant>
      <VariantWrapper>
        <VariantLabelWrapper>
          <label>{COLOR}</label>
          <LabelColon>:</LabelColon>
        </VariantLabelWrapper>
        <OptionsGrid>
          {colorOptions?.map((value, i) => (
            <GridItem key={i} selected={selectedProductInfo?.Renk === value}
              onClick={() => onSelectChange(COLOR, value)}>
              {value}
            </GridItem>
          ))}
        </OptionsGrid>
      </VariantWrapper>
      <VariantWrapper>
        <VariantLabelWrapper>
          <label>{SIZE}</label>
          <LabelColon>:</LabelColon>
        </VariantLabelWrapper>
        <OptionsGrid>
          {sizeAttributes?.map((size, i) => (
            <GridItem key={i} selected={!size?.isDisabled && selectedProductInfo?.Beden === size?.value} disabled={size?.isDisabled}
              onClick={() => selectedProductInfo?.Renk && !size?.isDisabled && onSelectChange(SIZE, size?.value)}>
              {size?.value}
            </GridItem>
          ))}
        </OptionsGrid>
      </VariantWrapper>
      <BaremList baremListData={productData.baremList} changeQuantity={changeQuantity} selectedQuantity={selectedQuantity} selectedProductInfo={selectedProductInfo}/>
    </ProductVariant>
  );
};

ProductVariants.propTypes = {
  productData: PropTypes.object.isRequired,
  colorOptions: PropTypes.array.isRequired,
  sizeAttributes: PropTypes.array.isRequired,
  onSelectChange: PropTypes.func.isRequired,
  selectedProductInfo: PropTypes.object,
  changeQuantity: PropTypes.func.isRequired,
  selectedQuantity: PropTypes.number
};

export default ProductVariants;
