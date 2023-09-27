import { type HTMLAttributes } from "react";
import { cn } from "ui";

function Component({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      className={cn(
        "flex items-center justify-around w-full overflow-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function Controllers({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div className={cn("flex flex-col gap-6 w-[256px]", className)} {...props}>
      {children}
    </div>
  );
}

function ShowcaseWrapper({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      className={cn("flex w-full justify-end items-center py-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}

ShowcaseWrapper.displayName = "ShowcaseWrapper";

ShowcaseWrapper.Component = Component;
ShowcaseWrapper.Controllers = Controllers;

export { ShowcaseWrapper };
