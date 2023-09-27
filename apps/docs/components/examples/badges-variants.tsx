import { useState } from "react";
import type { BadgesProps } from "ui";
import { Badge, Badges } from "ui";
import { ShowcaseWrapper, Selector, Slider } from "../controls";

function ColoredBadges(): JSX.Element {
  const [stagger, setStagger] = useState<BadgesProps["stagger"]>(0.4);
  const [length, setLength] = useState<BadgesProps["length"]>(4);

  return (
    <ShowcaseWrapper>
      <ShowcaseWrapper.Component>
        <Badges className="w-[256px]" length={length} stagger={stagger}>
          {/* Red Variation */}
          <Badge
            className="bg-red-200 text-red-800 border-red-800 hover:bg-red-600 hover:text-red-200 "
            variant="outline"
          >
            apple
          </Badge>

          {/* Green Variation */}
          <Badge
            className="bg-green-200 text-green-800 border-green-800 hover:bg-green-600 hover:text-green-200 "
            variant="outline"
          >
            grape
          </Badge>

          {/* Blue Variation */}
          <Badge
            className="bg-blue-200 text-blue-800 border-blue-800 hover:bg-blue-600 hover:text-blue-200 "
            variant="outline"
          >
            cherry
          </Badge>

          {/* Yellow Variation */}
          <Badge
            className="bg-yellow-200 text-yellow-800 border-yellow-800 hover:bg-yellow-600 hover:text-yellow-200"
            variant="outline"
          >
            banana
          </Badge>

          {/* Indigo Variation */}
          <Badge
            className="bg-indigo-200 text-indigo-800 border-indigo-800 hover:bg-indigo-600 hover:text-indigo-200 "
            variant="outline"
          >
            pear
          </Badge>

          {/* Purple Variation */}
          <Badge
            className="bg-purple-200 text-purple-800 border-purple-800 hover:bg-purple-600 hover:text-purple-200 "
            variant="outline"
          >
            strawberry
          </Badge>

          {/* Pink Variation */}
          <Badge
            className="bg-pink-200 text-pink-800 border-pink-800 hover:bg-pink-600 hover:text-pink-200 "
            variant="outline"
          >
            watermelon
          </Badge>

          {/* Gray Variation */}
          <Badge
            className="bg-gray-200 text-gray-800 border-gray-800 hover:bg-gray-600 hover:text-gray-200 "
            variant="outline"
          >
            orange
          </Badge>
        </Badges>
      </ShowcaseWrapper.Component>
      <ShowcaseWrapper.Controllers>
        <Slider
          defaultValue={[50]}
          direction="column"
          onValueChange={(value): void => {
            setStagger(value[0] / 100 / 2);
          }}
          placeholder={stagger?.toString()}
          propName="Stagger"
        />
        <Selector
          direction="column"
          onValueChange={(value): void => {
            setLength(Number.parseFloat(value));
          }}
          placeholder={length.toString()}
          propName="Length"
          propTypes={[2, 4, 6, 8]}
        />
      </ShowcaseWrapper.Controllers>
    </ShowcaseWrapper>
  );
}

export { ColoredBadges };
