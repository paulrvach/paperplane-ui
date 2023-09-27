import React from "react";
import { Code, Separator } from "@radix-ui/themes";

interface PropsCardProps {
  name: string;
  description: string | React.ReactNode;
  type: string;
}

export function PropsCard({ name, description, type }: PropsCardProps): JSX.Element {
  return (
    <>
      <div className="flex flex-col md:flex-row py-4 gap-4 md:gap-0">
        <div className="min-w-[10rem]">
          <Code>{name}</Code>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-mono">{type}</p>
          {description}
        </div>
      </div>
      <Separator orientation="horizontal" size="4" />
    </>
  );
}


