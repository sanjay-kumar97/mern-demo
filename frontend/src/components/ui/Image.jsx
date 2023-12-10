import React, { useState } from "react";

const Image = (props) => {
  const { src, alt, fallbackSrc, ...rest } = props;

  const [imgSrc, setImgSrc] = useState(src);

  const handleError = (e) => {
    e.stopPropagation();
    setImgSrc(fallbackSrc);
  };

  return <img src={imgSrc} onError={handleError} alt={alt} {...rest} />;
};

export default Image;
