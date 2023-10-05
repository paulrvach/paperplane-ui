import { type HTMLAttributes, forwardRef } from "react";
import * as Avatar from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";

type HeadingProps = HTMLAttributes<HTMLDivElement>

const Heading = forwardRef<HTMLDivElement, HeadingProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div
        className={cn("flex rounded-lg gap-4 w-full p-3", className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Heading.displayName = "Heading";

const headingAvatarVariants = cva(
  "rounded-lg select-none items-center justify-center overflow-hidden flex-none bg-secondary rounded-radius",
  {
    variants: {
      size: {
        sm: "h-[48px] w-[48px]",
        md: "h-[64px] w-[64px]",
        lg: "h-[96px] w-[96px]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

interface HeadingIconAvatar
  extends Avatar.AvatarProps,
    VariantProps<typeof headingAvatarVariants> {
  src?: string;
  fallback: string;
  alt?: string;
}

const HeadingAvatar = forwardRef<HTMLDivElement, HeadingIconAvatar>(
  (
    { alt, className, children, asChild, src, fallback, size, ...props },
    ref
  ) => {
    return (
      <Avatar.Root
        className={cn(headingAvatarVariants({ size }), className)}
        ref={ref}
        {...props}
      >
        {asChild ? (
          children
        ) : (
          <Avatar.Image
            alt={alt}
            className="h-full w-full rounded-[inherit] object-cover"
            src={src}
          />
        )}
        <Avatar.Fallback
          className="text-primary leading-1 flex h-full w-full font-medium items-center justify-center rounded-[inherit]"
          delayMs={600}
        >
          {fallback}
        </Avatar.Fallback>
      </Avatar.Root>
    );
  }
);

HeadingAvatar.displayName = "Heading.Icon";

interface HeadingHeadersProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof headingHeadersVariants> {
  headline: string;
  subhead?: string;
  supporting?: string;
}

const headingHeadersVariants = cva("", {
  variants: {
    size: {},
  },
});

const HeadingHeaders = forwardRef<HTMLDivElement, HeadingHeadersProps>(
  ({ className, headline, subhead, supporting, ...props }, ref) => {
    return (
      <div
        className={cn("w-full flex flex-col gap-8 flex-wrap grow", className)}
        ref={ref}
        {...props}
      >
        <div className="flex flex-col gap-1 w-full">
          <p className="text-xl font-semibold">{headline}</p>
          {subhead ? <p className="text-lg">{subhead}</p> : null}
        </div>
        {supporting ? <p>{supporting}</p> : null}
      </div>
    );
  }
);

HeadingHeaders.displayName = "Heading.Headers";

const Root = Heading;
const Icon = HeadingAvatar;
const Headers = HeadingHeaders;

export {
  Heading,
  HeadingAvatar,
  HeadingHeaders,
  //
  Root,
  Icon,
  Headers,
};
