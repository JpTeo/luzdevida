// components/SliderComponent.tsx
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import "./SliderComponent.css"; // si querés estilos personalizados
import { SvgIcon } from "../../common/SvgIcon";

interface SliderProps {
  ContentSlider: string[];
  fullWidth?: boolean;
  height: string;
  width: string;
}

const SliderComponent = ({
  ContentSlider,
  fullWidth,
  height,
  width,
}: SliderProps) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 4000 }}
      className="mySwiper"
      style={{ height: height,  }}
    >
      {ContentSlider.map((item, index) => (
        <SwiperSlide
          key={index}
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: `100%`,
              width: `100%`,
              overflow: "hidden",
              borderRadius: "20px",
              // backgroundImage: `url(${item})`,
              // backgroundSize: "cover",
              // backgroundPosition: "bottom",
              // borderRadius: "20px",
            }}
          >
            <SvgIcon src={item} width="unset" height="100%" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderComponent;
