---
name: tactile-3d-craft-engine
description: >-
  Implement museum-grade, lightweight, high-performance 3D animations and interactive
  3D craft objects for Janani Craft. Covers interactive 3D canvas renderers
  (Terracotta plaque, Dhamrai Kansha brass vessel), Dhaka Muslin cloth wave simulations,
  3D parallax perspective cards, and Nakshi Kantha animated thread stitching.
---

# Tactile 3D Craft Engine — Museum-Grade Heritage Interactions

Use this skill when implementing 3D elements, interactive dimensional canvases, or spatial animations for Janani Craft.

---

## 1. Core Principles & Minimalist Geometry

1. **Cultural Authenticity**: 3D objects are not generic geometric primitives; they represent living Bengali craft artifacts:
   - **Pora Mati (Terracotta)**: Earth-baked clay pots, relief tiles, and tactile unglazed matte finishes.
   - **Kansha & Pitoli (Bell Metal & Brass)**: Radiant hand-cast metallic vessels with warm golden specularity.
   - **Dhaka Muslin (Woven Air)**: Sheer, diaphanous textile physics that ripple softly in response to cursor movements.
2. **Minimalist Framing Constraints**:
   - Every 3D viewport, canvas, and card must obey `rounded-none` or `rounded-[1px]` / `rounded-[2px]`.
   - Framing must use crisp hairline borders: `border border-[#E5DFD5]` (light) or `border-[#2E2A25]` (dark).
   - Zero heavy drop-shadows: `shadow-none`.
3. **Calm, Museum-Grade Motion**:
   - Avoid fast, chaotic, or bouncy physics. Motion must be slow, dignified, and tactile.
   - All interactive loops must run at 60fps using `requestAnimationFrame`, damping / lerp for silky smooth easing, and cleanup on unmount.

---

## 2. Interactive 3D Craft Patterns

### Pattern A: 3D Parallax Museum Tilt Card (`Card3D`)
A luxury editorial card with genuine 3D perspective depth, multi-plane Z-layering, and dynamic specular sheen:

```tsx
"use client";

import React, { useRef, useState } from "react";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export function Card3D({ children, className = "" }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate rotation (-8 to +8 degrees)
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    setRotate({ x: rotateX, y: rotateY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15,
    });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: "1000px" }}
      className="inline-block w-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transformStyle: "preserve-3d",
          transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className={`relative bg-[#FAF7F2] border border-[#E5DFD5] rounded-[1px] overflow-hidden ${className}`}
      >
        {/* Dynamic Glare Specular Highlight */}
        <div
          className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
          style={{
            opacity: glare.opacity,
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 60%)`,
          }}
        />
        {/* Inner Content with Z-Depth */}
        <div style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
          {children}
        </div>
      </div>
    </div>
  );
}
```

---

### Pattern B: Interactive 3D Muslin "Woven Air" Cloth Wave Canvas
Lightweight canvas simulating diaphanous woven threads waving in the delta breeze with interactive cursor ripple:

```tsx
"use client";

import React, { useEffect, useRef } from "react";

export function MuslinClothCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);

    let step = 0;
    const lines = 24;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      step += 0.015;

      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      ctx.lineWidth = 1;

      // Draw sheer floating thread curves
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        const progress = i / lines;
        const alpha = Math.sin(progress * Math.PI) * 0.25 + 0.05;
        
        // Earthen brass / unbleached muslin thread color
        ctx.strokeStyle = `rgba(184, 142, 62, ${alpha})`;

        const yOffset = (h / lines) * i;

        for (let x = 0; x <= w; x += 15) {
          const wave1 = Math.sin(x * 0.005 + step + i * 0.2) * 18;
          const wave2 = Math.cos(x * 0.01 - step * 0.8 + i * 0.1) * 8;
          const y = yOffset + wave1 + wave2;

          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className={`relative w-full h-full overflow-hidden border border-[#E5DFD5] rounded-[1px] bg-[#FAF7F2] ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}
```

---

### Pattern C: 3D Rotating Terracotta / Brass Artifact Viewer
A 3D artifact carousel or model viewport that renders with clay-baked and brass-burnished lighting, enabling users to orbit and inspect artisanal details 360 degrees.
