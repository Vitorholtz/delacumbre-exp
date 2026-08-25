export type FieldSize = "md" | "sm";

export const fieldLabelTextClassBySize: Record<FieldSize, string> = {
  md: "text-body-md",
  sm: "text-body-sm",
};

export const fieldInputTextClassBySize: Record<FieldSize, string> = {
  md: "text-body-lg",
  sm: "text-body-md",
};
