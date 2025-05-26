import { Col, Image, Row, Typography } from "antd";
import { CardStyles, ImageStyle } from "./styles";
// Definición de los datos de los profesionales
const professionals = [
  {
    id: 1,
    title: "Yoga",
    name: "Carina Conti",
    license: "",
    icon: "img/icons/yoga-icon.png",
  },
  {
    id: 2,
    title: "Kinesiología",
    name: "Jesica Juan",
    license: "M.N. 01344",
    icon: "img/icons/kinesiology-icon.png",
  },
  {
    id: 3,
    title: "Psicología",
    name: "Monica Slonimski",
    license: "M.N. 39133",
    icon: "img/icons/psychology-icon.png",
  },
  {
    id: 4,
    title: "Director médico",
    name: "Jorge Mario Muszkat",
    license: "M.N. 62.998",
    icon: "img/icons/medical-icon.png",
  },
  {
    id: 5,
    title: "Lic en nutrición",
    name: "Lic.Karina J.E. Lusa",
    license: "M.N. 4512",
    icon: "img/icons/nutrition-icon.png",
  },
  {
    id: 6,
    title: "Musicoterapia",
    name: "Daniela Arévalo",
    license: "",
    icon: "img/icons/music-icon.png",
  },
  {
    id: 7,
    title: "Terapia ocupacional",
    name: "Romina N. Pattacini",
    license: "",
    icon: "img/icons/therapy-icon.png",
  },
];

export default function ProfessionalCards() {
  return (
    <Row
      gutter={[16, 16]} // horizontal y vertical
      justify="center"
      style={{ margin: "5% 0" }}
    >
      {professionals.map((professional) => (
        <Col
          key={professional.id}
          xs={24}
          sm={12}
          md={6}
          lg={5}
          className="d-flex items-center"
        >
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
            <div style={{ flex: "0 0 auto", marginBottom: "1rem" }}>
              <ImageStyle src={professional.icon} preview={false} />
            </div>

            {/* Parte media - texto */}
            <div
              style={{
                flex: "1 1 auto",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "start",

                gap: "4px",
              }}
            >
              <Typography style={{ fontSize: "1.2rem", color: "black" }}>
                {professional.title}
              </Typography>
              <Typography style={{ fontSize: "1rem", color: "black" }}>
                {professional.name}
              </Typography>
              {professional.license && (
                <Typography style={{ fontSize: "1rem", color: "black" }}>
                  {professional.license}
                </Typography>
              )}
            </div>
          </CardStyles>
        </Col>
      ))}
    </Row>
  );
}
