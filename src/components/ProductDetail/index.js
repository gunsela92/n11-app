import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import Favorites from "../Favorites";
import ProductVariants from "../ProductVariants/index";
import TotalPriceCalculator from "../TotalPrice";
import {PRODUCT_TYPE_ATTRIBUTES} from "../../config";
import {
  AddToCartButton,
  ButtonWrapper, PaymentOptionsText,
  ProductTitle
} from "./style";

const ProductDetail = ({selectedProductInfo, productData, onChangeAttributes}) => {
  const [colorOptions, setColorOptions] = useState([]);
  const [sizeAttributes, setSizeAttributes] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [baremPrices, setBaremPrices] = useState("0,00");
  const [cartButtonDisabled, setCartButtonDisabled] = useState(true);
  const {COLOR, SIZE} = PRODUCT_TYPE_ATTRIBUTES;

  const onSelectChange = (type, value) => {
    if (type === COLOR) {
      let availableSizes = [];
      let foundProducts = productData?.productVariants?.filter((variant) => {
        return variant?.attributes?.find((attribute) => attribute?.name === COLOR && attribute?.value === value);
      })
      if (foundProducts.length > 0) {
        availableSizes = foundProducts.flatMap((variant) => variant?.attributes?.find((attribute) => attribute?.name === SIZE)?.value);
      }
      const foundSizes = sizeAttributes.map(val => {
        return {value: val.value, disabled: availableSizes.findIndex(item => item === val.value) === -1}
      });
      setSizeAttributes(foundSizes);
    }
    onChangeAttributes({...selectedProductInfo, ...{[type]: value}}, type);
  };

  const formatMoney = (money) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
    }).formatToParts(money).map(p => p.type !== "literal" && p.type !== "currency" ? p.value : "").join("") // To remove money icon
  };

  useEffect(() => {
    if (selectedProductInfo?.id) {
      const selectedBarem = productData?.baremList?.find(barem => barem?.minimumQuantity <= selectedQuantity && selectedQuantity <= barem?.maximumQuantity);
      const calculatedPrice = selectedBarem ? (selectedBarem?.price * selectedQuantity).toFixed(2) : 0.00;
      setBaremPrices(formatMoney(calculatedPrice));
      setCartButtonDisabled(!selectedProductInfo[COLOR] || !selectedProductInfo[SIZE] || !selectedQuantity)
    } else {
      setBaremPrices(formatMoney(0.00));
      setCartButtonDisabled(true);
    }
  }, [selectedProductInfo, selectedQuantity]);

  const addToCart = () => {
    const foundBarem = productData.baremList.find(barem => barem.minimumQuantity <= selectedQuantity && selectedQuantity <= barem.maximumQuantity);
    const selectedProduct = {
      VariantId: selectedProductInfo?.id,
      Quantity: selectedQuantity,
      BaremInformation: foundBarem || "No matches found with selected quantity!"
    }
    console.log("Selected Product Info", selectedProduct);
  };

  useEffect(() => {
    if (productData) {
      setColorOptions(productData.selectableAttributes.find(item => item.name === COLOR)?.values);
      const availableSizeOptions = productData.selectableAttributes
        .find(item => item.name === SIZE)?.values?.map(item => {
          return {value: item, disabled: false}
        });
      setSizeAttributes(availableSizeOptions);
    }
  }, [productData]);

  return (
    <>
      <ProductTitle>
        {productData?.productTitle}
      </ProductTitle>
      <Favorites/>
      <ProductVariants productData={productData} colorOptions={colorOptions} sizeAttributes={sizeAttributes}
        onSelectChange={onSelectChange} selectedProductInfo={selectedProductInfo}
        changeQuantity={setSelectedQuantity} selectedQuantity={selectedQuantity}/>
      <TotalPriceCalculator baremPrices={baremPrices}/>
      <ButtonWrapper>
        <AddToCartButton disabled={cartButtonDisabled} onClick={addToCart}>SEPETE EKLE</AddToCartButton>
        <PaymentOptionsText>Ödeme Seçenekleri</PaymentOptionsText>
      </ButtonWrapper>
    </>
  );
}

ProductDetail.propTypes = {
  selectedProductInfo: PropTypes.object,
  productData: PropTypes.object.isRequired,
  onChangeAttributes: PropTypes.func.isRequired
}

export default ProductDetail;
