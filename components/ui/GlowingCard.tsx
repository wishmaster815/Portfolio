"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const GlowingCardContent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const handlePointerMove = (e: PointerEvent) => {
    if (typeof window === 'undefined') return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = document.body.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    document.body.style.setProperty("--mouse-x", `${x}px`);
    document.body.style.setProperty("--mouse-y", `${y}px`);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    document.body.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      if (typeof window === 'undefined') return;
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div className={cn("relative group", className)}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-gradient-xy" />
      <div className="relative">{children}</div>
    </div>
  );
};

// Export a dynamically imported version of the component
export const GlowingCard = dynamic(
  () => Promise.resolve(GlowingCardContent),
  {
    ssr: false,
  }
);
