export type SelectableControlSize = "lg" | "md" | "sm";

export const labelTextClassBySize: Record<SelectableControlSize, string> = {
  lg: "text-body-md",
  md: "text-body-sm",
  sm: "text-caption",
};
