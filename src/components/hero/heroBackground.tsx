export const HeroFilter = () => {
  return (
    <filter id="glass">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix
        in="blur"
        type="matrix"
        values="1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 0.3 0"
        result="glassColor"
      />
      <feComposite in="SourceGraphic" in2="glassColor" operator="over" />
    </filter>
  );
};

export const HeroBackground = ({clipPath} : {clipPath: string}) => {
  return (
    <rect
      width="500"
      height="250"
      clipPath={`url(#${clipPath})`}
      fill="rgba(200, 200, 220, 0.2)"
      filter="url(#glass)"
    />
  );
};