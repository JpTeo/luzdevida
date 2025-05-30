export interface ContentBlockCopyProps {
  Icon?: React.ReactNode;
  title: string;
  content: string;
  imageSize: { height: string; width: string };
  fullWidthSlider?: boolean;
  sliderContent?: string[];
  name?: string;
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
