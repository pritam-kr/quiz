import React from "react";

const CustomLoader = ({
  src,
  alt = "loader",
  width = 10,
  height = 10,
  className,
}) => {
  const Styling = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <img
      src={src}
      alt={alt}
      style={Styling}
      className={`${className ? className : ""}`}
    />
  );
};

export default CustomLoader;
