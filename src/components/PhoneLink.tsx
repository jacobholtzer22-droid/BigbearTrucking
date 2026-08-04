import { siteConfig } from "@/site.config";
import { Phone } from "lucide-react";

interface PhoneLinkProps {
  className?: string;
  showIcon?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-xl md:text-2xl",
  xl: "text-3xl md:text-4xl lg:text-5xl",
};

const iconSizes = {
  sm: 14,
  md: 16,
  lg: 20,
  xl: 28,
};

export function PhoneLink({
  className = "",
  showIcon = true,
  size = "md",
}: PhoneLinkProps) {
  return (
    <a
      href={`tel:${siteConfig.phoneE164}`}
      data-cta="call"
      className={`inline-flex items-center gap-2 font-display font-bold transition-opacity duration-200 hover:opacity-80 ${sizeClasses[size]} ${className}`}
    >
      {showIcon && (
        <Phone
          size={iconSizes[size]}
          className="flex-shrink-0"
          aria-hidden="true"
        />
      )}
      <span>{siteConfig.phoneDisplay}</span>
    </a>
  );
}
