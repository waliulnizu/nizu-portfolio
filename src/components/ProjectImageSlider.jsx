"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const AUTO_SLIDE_MS = 3500;

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default function ProjectImageSlider({ images, title }) {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);
  const total = images.length;
  const hasMultiple = total > 1;

  const goTo = useCallback(
    (index) => {
      setCurrent(((index % total) + total) % total);
    },
    [total]
  );

  const startAutoplay = useCallback(() => {
    if (!hasMultiple) return;

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, AUTO_SLIDE_MS);
  }, [hasMultiple, total]);

  useEffect(() => {
    startAutoplay();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startAutoplay]);

  const handleManualChange = (index) => {
    goTo(index);
    startAutoplay();
  };

  return (
    <div className="group relative aspect-video bg-secondary/50 overflow-hidden p-4">
      <div className="relative w-full h-full min-h-[200px] rounded-2xl overflow-hidden border border-border/50 bg-zinc-900">
        {images.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className={cn(
              "absolute inset-0 transition-opacity duration-500 ease-in-out",
              index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={image.src}
              alt={image.alt ?? `${title} screenshot ${index + 1}`}
              className="h-full w-full object-cover object-top"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={() => handleManualChange(current - 1)}
              aria-label={`Previous ${title} screenshot`}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => handleManualChange(current + 1)}
              aria-label={`Next ${title} screenshot`}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-9 h-9 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center hover:bg-emerald-500 transition-all duration-300 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleManualChange(index)}
                  aria-label={`Show ${title} screenshot ${index + 1}`}
                  aria-current={index === current ? "true" : undefined}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === current ? "bg-emerald-500 w-5" : "bg-white/40 hover:bg-white/70"
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
