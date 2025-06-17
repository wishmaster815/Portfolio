"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const GlowingCard = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePointerMove = (e: PointerEvent) => {
    if (!isMounted) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = document.body.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    document.body.style.setProperty("--mouse-x", `${x}px`);
    document.body.style.setProperty("--mouse-y", `${y}px`);
  };

  useEffect(() => {
    if (!isMounted) return;
    
    document.body.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
    };
  }, [isMounted]);

  if (!isMounted) {
    return (
      <div className={cn("relative group", className)}>
        {children}
      </div>
    );
  }

  return (
    <div className={cn("relative group", className)}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-gradient-xy" />
      <div className="relative">{children}</div>
    </div>
  );
};
