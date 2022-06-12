import React, {useEffect, useState} from "react";
import ProductImages from "./components/ProductImageBox/index";
import ProductDetail from "./components/ProductDetail/index";
import productData from "./product-data.json";
import {PRODUCT_TYPE_ATTRIBUTES} from "./config";
import {AppContainer, MainWrapper, ProductInfoWrapper} from "./ThemeProvider";

const App = () => {
  const [products, setProducts] = useState({});
  const [selectedProductInfo, setSelectedProductInfo] = useState({});
  const {COLOR, SIZE} = PRODUCT_TYPE_ATTRIBUTES;

  useEffect(() => {
    setProducts(productData);
  }, []);

  const onChangeAttributes = (productInfo, type) => {
    if (type === "Renk") {
      delete productInfo[SIZE];
      delete productInfo.id;
      setSelectedProductInfo(productInfo);
    } else {
      getSizeId(productInfo.Renk, productInfo.Beden)
    }
  };

  const getSizeId = (color, size) => {
    let foundProducts = productData?.productVariants?.filter((variant) => {
      return variant?.attributes?.find((attribute) => attribute?.name === COLOR && attribute?.value === color);
    });
    if (foundProducts?.length > 0) {
      const sizes = foundProducts.filter((product) => product.attributes.find((attribute) => attribute.name === SIZE && attribute?.value === size))?.[0];
      if (sizes) {
        setSelectedProductInfo({Renk: color, Beden: size, id: sizes.id});
      }
    }
  }

  return (
    <AppContainer>
      <MainWrapper>
        <ProductImages productVariants={products?.productVariants} selectedProductInfo={selectedProductInfo}/>
      </MainWrapper>
      <ProductInfoWrapper>
        {productData &&
        <ProductDetail productData={productData} selectedProductInfo={selectedProductInfo}
          onChangeAttributes={onChangeAttributes}/>
        }
      </ProductInfoWrapper>
    </AppContainer>
  );
}

export default App;
