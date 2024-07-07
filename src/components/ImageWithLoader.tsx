import React, { CSSProperties, useRef } from "react";
import LoadingSpinner from "./LoadingSpinner";

const ImageWithLoader: React.FC<{ src: string, alt: string, isLoading: boolean, setIsLoading: (argument: boolean) => void, style: CSSProperties }> = ({ src, alt, isLoading, setIsLoading, style }) => {
  const counter = useRef(0);
  const urls = [src];

  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= urls.length) {
      setIsLoading(false);
    }
  }

  return (
    <>
      <img
        onLoad={imageLoaded}
        src={src}
        className="card-img"
        alt={alt}
        width="340px"
        height="250px"
        style={{
          display: isLoading ? "none" : "block",
          width: "100%",
          height: "250px",
          ...style
        }} 
      />
      <LoadingSpinner isLoading={isLoading} height={"250px"} width={"340px"} />
    </>

  )
};

export default ImageWithLoader;
