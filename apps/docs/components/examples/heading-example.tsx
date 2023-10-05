import React from "react";
import { Heading, HeadingAvatar, HeadingHeaders } from "ui";
import { DotsVerticalIcon } from "@radix-ui/react-icons";

function HeadingExample(): JSX.Element {
  return (
    <Heading className="border">
      <HeadingAvatar alt="paper-plane" asChild  fallback="P" >
        <img alt="" src="https://res.cloudinary.com/dxmqknhgj/image/upload/v1694580504/Untitled_video_-_Made_with_Clipchamp_1_kq87qt.gif" />
      </HeadingAvatar>
      <HeadingHeaders
        headline="Headline"
        subhead="Subhead"
        supporting="Explain more about the topic shown in the headline and subhead through supporting text."
      />

      <div className="w-[64px] h-[64px] flex items-center justify-center">
        <DotsVerticalIcon className="h-6 w-6" />
      </div>
    </Heading>
  );
}

export { HeadingExample };
