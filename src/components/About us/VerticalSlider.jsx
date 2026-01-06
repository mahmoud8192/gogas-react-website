import * as Slider from "@radix-ui/react-slider";

export default function VerticalSlider({
  value = 0,
  min = 0,
  max = 100,
  defaultValue = 10,
  width = "xsmall"
}) {
  const WIDTHS = {
    xsmall: "w-1",
    small: "w-2",
    medium: "w-5",
    large: "w-10"
  };
  const style = {
    base: "h-full relative  flex  select-none touch-none flex-col items-center",
    sliderTrack: "relative h-full w-full rounded-full bg-[#8DD245]",
    sliderRange:
      "transition-all duration-700 ease-out absolute w-full rounded-full bg-[#DEDEDE]"
  };

  return (
    <Slider.Root
      min={max}
      max={min}
      value={[value ? value : value + defaultValue]}
      orientation="vertical"
      className={`${style.base} ${WIDTHS[width]}`}
    >
      <Slider.Track className={style.sliderTrack}>
        <Slider.Range className={style.sliderRange} />
      </Slider.Track>
      <Slider.Thumb />
    </Slider.Root>
  );
}
