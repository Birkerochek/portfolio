import { FC } from "react";
import { icons, type LucideProps } from "lucide-react";

type IconName = keyof typeof icons;

type IconProps = LucideProps & {
  name: IconName;

};

export const Icon: FC<IconProps> = ({
  name,
  size = 24,
  color,
  strokeWidth = 2,
}) => {
  const LucideIcon = icons[name];
  if (!LucideIcon) return null;

  return <LucideIcon size={size} color={color} strokeWidth={strokeWidth} />;
};
