import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  priority?: boolean;
}

export function BrandLogo({
  className = "h-auto w-[88px] sm:w-[108px]",
  priority = false,
}: BrandLogoProps) {
  return (
    <Image
      src="/brand/techsoft-logo.svg"
      alt="TechSoft Solutions"
      width={2000}
      height={2000}
      priority={priority}
      unoptimized
      className={className}
    />
  );
}
