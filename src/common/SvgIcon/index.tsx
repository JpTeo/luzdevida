import { SvgIconProps } from "../types";

export const SvgIcon = ({ src, width, height, alt }: SvgIconProps) => (
  <img
    src={`${src}`}
    alt={alt}
    width={width}
    height={height}
    style={{ borderRadius: "10px" }}
  />
);
