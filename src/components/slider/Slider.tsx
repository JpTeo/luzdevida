import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Carousel, Image } from "antd";

interface SliderProps {
  ContentSlider: string[];
}
const SliderComponent = ({ ContentSlider }: SliderProps) => {
  return (
    <Carousel
      className="ant-carousel"
      arrows
      style={{
        width: "100%",
      }}
      prevArrow={
        <button style={{ background: "red" }}>
          <LeftOutlined />
        </button>
      }
      nextArrow={
        <button style={{ background: "blue" }}>
          <RightOutlined />
        </button>
      }
    >
      {/* <RightArrow />
      <LeftArrow /> */}
      {ContentSlider.map((item) => (
        <div key={item}>
          <Image
            src={`/${item}`}
            height={"50vh"}
            style={{ objectFit: "contain" }}
            preview={false}
          />
        </div>
      ))}
    </Carousel>
  );
};

export default SliderComponent;
