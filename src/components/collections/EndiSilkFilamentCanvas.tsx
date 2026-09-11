"use client";

import React, { useEffect, useRef } from "react";

interface EndiSilkFilamentCanvasProps {
  className?: string;
}

export function EndiSilkFilamentCanvas({ className = "" }: EndiSilkFilamentCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: 0,
    y: 0,
    active: false,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let step = 0;

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);

    const threadCount = 28;

    const render = () => {
      const rect = container.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);
      step += 0.012;

      const mouse = mouseRef.current;

      // Draw flowing warp filaments with slub irregularities
      for (let i = 0; i < threadCount; i++) {
        ctx.beginPath();
        const progress = i / threadCount;
        // Tonal variation between Antique Brass (#B88E3E) and Terracotta (#A84A28)
        const isTerracotta = i % 7 === 0;
        const alpha = Math.sin(progress * Math.PI) * 0.35 + 0.08;

        if (isTerracotta) {
          ctx.strokeStyle = `rgba(168, 74, 40, ${alpha * 1.2})`;
          ctx.lineWidth = 1.4;
        } else {
          ctx.strokeStyle = `rgba(184, 142, 62, ${alpha})`;
          ctx.lineWidth = (i % 3 === 0) ? 1.2 : 0.8; // Slub yarn thickness variance
        }

        const yBase = (h / (threadCount + 1)) * (i + 1);

        for (let x = 0; x <= w; x += 12) {
          // Base delta breeze sinusoidal ripple
          const wave1 = Math.sin(x * 0.006 + step + i * 0.22) * 14;
          const wave2 = Math.cos(x * 0.012 - step * 0.7 + i * 0.15) * 6;

          // Slub irregularity noise
          const slub = Math.sin(x * 0.04 + i * 1.7) * 2;

          // Mouse cursor repulsion/attraction ripple
          let mouseDisplacement = 0;
          if (mouse.active) {
            const dx = x - mouse.x;
            const dy = yBase - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 140) {
              const force = (1 - dist / 140);
              mouseDisplacement = Math.sin(dist * 0.05 - step * 3) * force * 18;
            }
          }

          const y = yBase + wave1 + wave2 + slub + mouseDisplacement;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden bg-[#FAF7F2] border border-stone-200 rounded-[1px] ${className}`}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
