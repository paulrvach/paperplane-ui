import { type ComponentProps } from "react";
import {
  Select,
  type SelectRoot,
  Slider as RadixSlider,
  RadioGroup,
  type RadioGroupRoot,
  Flex,
  Text,
  Button,
} from "@radix-ui/themes";
import { PlayIcon } from "@radix-ui/react-icons";
import { cn } from "ui";

interface SelectorProps extends ComponentProps<typeof SelectRoot> {
  propName: string;
  propTypes: string[] | number[];
  placeholder?: string;
  direction?: "column" | "row" | "row-reverse" | "column-reverse";
  className?: string;
}

function Selector({
  propName,
  propTypes,
  direction,
  onValueChange,
  placeholder,
  ...props
}: SelectorProps): JSX.Element {
  return (
    <Select.Root onValueChange={onValueChange}>
      <Flex direction={direction} gap="2" {...props}>
        <Text>{propName}</Text>
        <Select.Trigger placeholder={placeholder} />
        <Select.Content>
          <Select.Group>
            <Select.Label>{propName}</Select.Label>
            {propTypes.map((type) => (
              <Select.Item key={type.toString()} value={type.toString()}>
                {type}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Content>
      </Flex>
    </Select.Root>
  );
}

interface SliderProps extends ComponentProps<typeof RadixSlider> {
  propName: string;
  direction?: "column" | "row" | "row-reverse" | "column-reverse";
}

function Slider({
  onValueChange,
  size,
  variant,
  color,
  highContrast,
  radius,
  className,
  direction,
  propName,
  defaultValue,
}: SliderProps): JSX.Element {
  return (
    <Flex className={cn(className)} direction={direction} gap="2">
      <Text>{propName}</Text>
      <RadixSlider
        color={color}
        defaultValue={defaultValue ? defaultValue : [50]}
        highContrast={highContrast}
        onValueChange={onValueChange}
        radius={radius ? radius : "full"}
        size={size ? size : "1"}
        variant={variant}
      />
    </Flex>
  );
}

interface RadioProps extends ComponentProps<typeof RadioGroupRoot> {
  items: string[];
  direction?: "column" | "row" | "row-reverse" | "column-reverse";
  propName: string;
}

function Radio({
  items,
  defaultValue,
  onValueChange,
  direction = "column",
  className,
  propName,
  ...props
}: RadioProps): JSX.Element {
  return (
    <RadioGroup.Root
      className={cn(className, "flex flex-col gap-2")}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
      {...props}
    >
      <Text>{propName}</Text>
      <Flex direction={direction} gap="2">
        {items.map((item) => (
          <label htmlFor={item} key={item}>
            <Flex align="center" gap="2">
              <RadioGroup.Item id={item} value={item} />
              <Text size="2">{item}</Text>
            </Flex>
          </label>
        ))}
      </Flex>
    </RadioGroup.Root>
  );
}

interface TriggerProps extends ComponentProps<typeof Button> {
  propName: string;
  direction?: "column" | "row" | "row-reverse" | "column-reverse";
}

function Trigger({
  onClick,
  className,
  propName,
  direction = "column",
  ...props
}: TriggerProps): JSX.Element {
  return (
    <Flex className={className} direction={direction} gap="2" >
      <Text>{propName}</Text>
      <Button onClick={onClick} {...props} size="2">
        <PlayIcon className="w-3 h-3" /> Play
      </Button>
    </Flex>
  );
}

export { Selector, Slider, Radio, Trigger };
