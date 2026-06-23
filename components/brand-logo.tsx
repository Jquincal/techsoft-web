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
      src="/brand/techsoft-logo.jpg"
      alt="TechSoft Solutions"
      width={6500}
      height={2875}
      priority={priority}
      className={className}
    />
  );
}
