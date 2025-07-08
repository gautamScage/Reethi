import clsx from "clsx";

export function cn(...inputs: (string | undefined | null)[]) {
  return clsx(inputs.filter(Boolean));
}
