import React, {useEffect, useState} from "react";
import ProductThumbnails from "../Thumbnails/index";
import PropTypes from "prop-types";
import {ProductImage} from "./style";

const ProductImages = ({productVariants, selectedProductInfo}) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [productImages, setProductImages] = useState([]);

  useEffect(() => {
    if (productVariants) {
      let selectedProductImages = productVariants.flatMap(item => item?.images);
      if (!selectedProductInfo?.Renk && !selectedProductInfo?.Beden) {
        setProductImages([...new Set(selectedProductImages)]);
      } else if (selectedProductInfo.Renk && !selectedProductInfo.Beden) {
        selectedProductImages = productVariants.flatMap(el => el).filter(item => item?.attributes?.find(attribute => attribute?.name === "Renk" && attribute?.value === selectedProductInfo.Renk))[0]?.images;
      } else {
        selectedProductImages = productVariants.filter((item) => item?.id === selectedProductInfo?.id)[0]?.images
      }
      setProductImages([...new Set(selectedProductImages)]);
      setSelectedImage(0);
    }
  }, [selectedProductInfo, productVariants]);

  const onImageChange = imageIndex => {
    setSelectedImage(imageIndex);
  }

  return (
    <>
      <ProductImage src={productImages[selectedImage]} alt="ProductImage"/>
      <ProductThumbnails productImages={productImages} onImageChange={(imageIndex) => onImageChange(imageIndex)}/>
    </>
  );
}

ProductImages.propTypes = {
  productVariants: PropTypes.array,
  selectedProductInfo: PropTypes.object,
}

ProductImages.defaultProps = {
  productVariants: [],
  selectedProductInfo: {},
}

export default ProductImages;
