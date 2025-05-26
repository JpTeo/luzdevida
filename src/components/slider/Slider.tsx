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
}

const SliderComponent = ({ ContentSlider, fullWidth }: SliderProps) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 4000 }}
      loop
      className="mySwiper"
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
          {fullWidth ? (
            <div
              style={{
                height: "500px",
                width: "100%",
                backgroundImage: `url(${item})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px",
              }}
            />
          ) : (
            <SvgIcon src={item} width="unset" height="100%" />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderComponent;
