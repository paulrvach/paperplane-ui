import { useLayoutEffect, useEffect, useRef, type HTMLAttributes } from "react";
import gsap from "gsap";
import { cn } from "../utils";

type EaseString =
  | "none"
  | "power1"
  | "power1.in"
  | "power1.out"
  | "power1.inOut"
  | "power2"
  | "power2.in"
  | "power2.out"
  | "power2.inOut"
  | "power3"
  | "power3.in"
  | "power3.out"
  | "power3.inOut"
  | "power4"
  | "power4.in"
  | "power4.out"
  | "power4.inOut"
  | "back"
  | "back.in"
  | "back.out"
  | "back.inOut"
  | "bounce"
  | "bounce.in"
  | "bounce.out"
  | "bounce.inOut"
  | "circ"
  | "circ.in"
  | "circ.out"
  | "circ.inOut"
  | "elastic"
  | "elastic.in"
  | "elastic.out"
  | "elastic.inOut"
  | "expo"
  | "expo.in"
  | "expo.out"
  | "expo.inOut"
  | "sine"
  | "sine.in"
  | "sine.out"
  | "sine.inOut";

interface PageLoaderProps extends HTMLAttributes<HTMLDivElement> {
  resolution: number;
  delay?: number;
  stagger?: number;
  ease?: EaseString;
  trigger: boolean;
  direction?: "x" | "y";
  trajectory?: "default" | "reversed";
}

function PageTransition({
  resolution,
  delay = 0,
  stagger,
  ease = "none",
  trigger,
  children,
  className,
  direction = "y",
  trajectory = "default",
  ...props
}: PageLoaderProps): JSX.Element {
  const resArray = Array.from({ length: resolution }, () => "");
  const tl = useRef<GSAPTimeline | null>(null);
  const refs = useRef<HTMLDivElement[] | null[]>([]);
  const childRef = useRef(null);
  useLayoutEffect(() => {
    const gsapDirection: { x?: string; y?: string } = {};
    gsapDirection[direction] = trajectory === "default" ? "100%" : "-100%";

    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({ paused: true }).to(refs.current, {
        ...gsapDirection,
        stagger,
        ease,
        delay,
      });
    }, refs.current);

    return () => {
      ctx.revert();
    };
  }, [stagger, ease, delay, trajectory, direction]);

  useEffect(() => {
    trigger ? tl.current?.play() : tl.current?.reverse();
  }, [trigger]);

  return (
    <div
      className={cn(
        "w-full h-full flex justify-evenly overflow-hidden",
        direction === "x" ? "flex-col" : "flex-row"
      )}
      {...props}
    >
      {resArray.map((item, index) => (
        <div
          className={cn("w-full h-full bg-primary", className)}
          key={`item_${index + 1}`}
          ref={(ele): void => {
            refs.current[index] = ele;
          }}
        />
      ))}
      <div
        className="absolute p-4 text-center transform -translate-x-1/2 -translate-y-1/2  top-1/2 left-1/2"
        ref={childRef}
      >
        {children}
      </div>
    </div>
  );
}

export { PageTransition };
export type { PageLoaderProps };
