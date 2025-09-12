interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  width = 287,
  height = 48,
  className = "",
}) => {
  return (
    <img
      width={width}
      height={height}
      src={className.includes("dark") ? "/NeighborVariantLogo.svg" : "/NeighborDefaultLogo.svg"}
      className={className}
      alt="Neighbors Wealth Management Logo"
      title="Neighbors Wealth Management Logo"
    />
  );
};
