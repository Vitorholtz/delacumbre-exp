import type { HeadingContent } from "./sectionContent";

type HeadingProps = HeadingContent & {
  highlightClassName: string;
};

export default function Heading({
  prefix,
  highlight,
  breakBeforeHighlight,
  highlightClassName,
}: HeadingProps) {
  return (
    <>
      {prefix}
      {breakBeforeHighlight ? <br /> : " "}
      <span className={highlightClassName}>{highlight}</span>
    </>
  );
}
