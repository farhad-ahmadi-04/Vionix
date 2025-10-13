interface HeroImageType {
  clipPath: string;
  image: string;
  width?: number;
  height?: number;
}

export const HeroImage = ({ clipPath, image, width = 500, height = 400 }: HeroImageType) => {
  return (
    <image
      href={image}
      width={width}
      height={height}
      clipPath={`url(#${clipPath})`}
    />
  );
};
