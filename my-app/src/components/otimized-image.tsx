import { useState } from "react";

type OptimizedImageProps = {
  src: string;
  alt: string;
} & React.ImgHTMLAttributes<HTMLImageElement>;

export default function OptimizedImage({
  src,
  alt,
  className,
  ...props
}: OptimizedImageProps) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageError(true);
  };
  return (
    <img
      src={imageError ? "/fallback.png" : src}
      className={`${className} ${imageLoaded ? "" : "animate-loading-skeleton"}`}
      loading="lazy"
      onLoad={handleImageLoad}
      onError={handleImageError}
      alt={alt}
      {...props}
    />
  );
}
