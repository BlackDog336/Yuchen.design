"use client";

import React, { useCallback } from "react";
import { useSpotlight } from "./SpotlightTransition";

interface TransitionLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children: React.ReactNode;
  className?: string;
  /** Overlay color for the spotlight transition (default: "#fff") */
  spotlightColor?: string;
}

export default function TransitionLink({
  href,
  children,
  className,
  onClick,
  spotlightColor,
  ...rest
}: TransitionLinkProps) {
  const { start, isTransitioning } = useSpotlight();

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      if (isTransitioning) return;
      onClick?.(e);
      start(href, e.clientX, e.clientY, spotlightColor);
    },
    [href, start, isTransitioning, onClick, spotlightColor]
  );

  return (
    <a href={href} onClick={handleClick} className={className} {...rest}>
      {children}
    </a>
  );
}
