import React, {useRef} from "react";
import {ReactSVG} from "react-svg";
import ArrowIcon from "../../assets/arrow.svg";
import PropTypes from "prop-types";
import {Arrows, SliderContainer, Thumbnails} from "./style";

const ProductThumbnails = ({productImages, onImageChange}) => {
  const ref = useRef(null);
  const OFFSET = 130;

  const thumbnailScroll = (direction) => direction === "left" ? ref.current.scrollLeft -= OFFSET : ref.current.scrollLeft += OFFSET;

  return (
    <SliderContainer>
      <Arrows onClick={() => thumbnailScroll("left")}>
        <ReactSVG className="left" src={ArrowIcon}/>
      </Arrows>
      <Thumbnails ref={ref}>
        {productImages?.map((image, i) =>
          <img key={image} src={image} className={image.isSelected ? "selected" : ""}
            onClick={() => onImageChange(i)} alt="Product Thumbnail"/>)}
      </Thumbnails>
      <Arrows onClick={() => thumbnailScroll("right")}>
        <ReactSVG className="right" src={ArrowIcon}/>
      </Arrows>
    </SliderContainer>
  );
}

ProductThumbnails.propTypes = {
  productImages: PropTypes.array.isRequired,
  onImageChange: PropTypes.func.isRequired
}

export default ProductThumbnails;
