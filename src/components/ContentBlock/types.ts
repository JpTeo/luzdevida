export interface ContentBlockProps {
  icon?: string;
  title: string;
  content: string;
  imageSize: { height: string; width: string };
  fullWidthSlider?: boolean;
  sliderContent?: string[];
  section?: {
    title: string;
    content: string;
    icon: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  id?: string;
  direction: "left" | "right";
}
