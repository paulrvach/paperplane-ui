import { useState, useRef, type HTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Button } from "@radix-ui/themes";
import clsx from "clsx";

const CodeMinimizerVariants = cva("", {
  variants: {
    collapsed: {
      true: "h-48 overflow-hidden",
      false: "",
    },
  },
});

export interface CodeMinimizerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof CodeMinimizerVariants> {
  isCollapsable: boolean;
}

function CodeMinimizer({
  children,
  ...props
}: CodeMinimizerProps): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  const handleOnClick = (): void => {
    setIsCollapsed(!isCollapsed);
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start", // You can use 'start', 'end', 'center', or 'nearest'
        inline: "nearest",
      });
    }
  };

  return (
    <div className="relative" ref={ref} {...props}>
      <div
        className={clsx(
          "relative flex-none min-w-full px-4 sm:px-6 md:px-0 overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:transparent scrollbar-track:rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50",
          isCollapsed && "max-h-96"
        )}
      >
        {children}
      </div>
      <div
        className={clsx(
          "w-full p-4 grid place-items-center",
          !isCollapsed && "sticky bottom-0 "
        )}
      >
        <div className="absolute bottom-0 w-full h-48  rounded-b-lg bg-gradient-to-t from-background pointer-events-none" />
        <Button className="z-20" onClick={handleOnClick} variant="ghost">
          {isCollapsed ? "Show More" : "Collapse"}
        </Button>
      </div>
    </div>
  );
}

export { CodeMinimizer };
