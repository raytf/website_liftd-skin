import { Badge } from "@workspace/ui/components/badge";

import type { PagebuilderType } from "@/types";

import { RichText } from "../richtext";
import { SanityButtons } from "../sanity-buttons";
import { SanityImage } from "../sanity-image";

type Hero2BlockProps = PagebuilderType<"hero2">;

const getBackgroundColorClass = (color: string | undefined) => {
  switch (color) {
    case "gray":
      return "bg-gray-50 dark:bg-gray-900";
    case "blue":
      return "bg-blue-50 dark:bg-blue-900";
    case "green":
      return "bg-green-50 dark:bg-green-900";
    default:
      return "bg-white dark:bg-gray-950";
  }
};

const getLayoutClasses = (layout: string | undefined) => {
  switch (layout) {
    case "image-left":
      return "lg:grid-cols-[1fr_auto]";
    case "centered":
      return "lg:grid-cols-1 text-center";
    default:
      return "lg:grid-cols-[auto_1fr]";
  }
};

const getContentAlignment = (layout: string | undefined) => {
  switch (layout) {
    case "image-left":
      return "lg:items-start lg:justify-items-start lg:text-left";
    case "centered":
      return "lg:items-center lg:justify-items-center lg:text-center";
    default:
      return "lg:items-start lg:justify-items-start lg:text-left";
  }
};

export function Hero2Block({
  title,
  buttons,
  badge,
  image,
  richText,
  backgroundColor,
  layout,
}: Hero2BlockProps) {
  const bgClass = getBackgroundColorClass(backgroundColor);
  const layoutClass = getLayoutClasses(layout);
  const alignmentClass = getContentAlignment(layout);

  return (
    <section id="hero2" className={`mt-4 md:my-16 ${bgClass}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className={`grid items-center gap-8 ${layoutClass}`}>
          <div
            className={`grid h-full grid-rows-[auto_1fr_auto] gap-4 items-center justify-items-center text-center ${alignmentClass}`}
          >
            {badge && <Badge variant="secondary">{badge}</Badge>}
            <div className="grid gap-4">
              <h1 className="text-4xl lg:text-6xl font-semibold text-balance">
                {title}
              </h1>
              <RichText
                richText={richText}
                className="text-base md:text-lg font-normal"
              />
            </div>

            <SanityButtons
              buttons={buttons}
              buttonClassName="w-full sm:w-auto"
              className="w-full sm:w-fit grid gap-2 sm:grid-flow-col lg:justify-start mb-8"
            />
          </div>

          {image && layout !== "centered" && (
            <div className="h-96 w-full">
              <SanityImage
                asset={image}
                loading="eager"
                width={800}
                height={800}
                priority
                quality={80}
                className="max-h-96 w-full rounded-3xl object-cover"
              />
            </div>
          )}

          {image && layout === "centered" && (
            <div className="h-96 w-full max-w-2xl mx-auto">
              <SanityImage
                asset={image}
                loading="eager"
                width={800}
                height={800}
                priority
                quality={80}
                className="max-h-96 w-full rounded-3xl object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
