import { Typography } from "antd";
import { CardStyles, ImageStyle } from "./styles";
import { Professional } from "../../types/NuestroEquipo";
// Definición de los datos de los profesionales

export default function CardProfessional(professional: Professional) {
  return (
    <CardStyles
      bodyStyle={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        padding: "20px",
      }}
    >
      {/* Parte superior - imagen */}
      <div style={{ flex: "0 0 auto" }}>
        <ImageStyle src={professional.icon} preview={false} />
      </div>

      {/* Parte media - texto */}
      <div
        style={{
          flex: "1 1 auto",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",

          gap: "4px",
        }}
      >
        <Typography style={{ fontSize: "1rem", color: "black" }}>
          {professional.title}
        </Typography>
        <Typography style={{ fontSize: ".8rem", color: "black" }}>
          {professional.name}
        </Typography>
        {professional.license && (
          <Typography style={{ fontSize: ".8rem", color: "black" }}>
            {professional.license}
          </Typography>
        )}
      </div>
    </CardStyles>
  );
}
