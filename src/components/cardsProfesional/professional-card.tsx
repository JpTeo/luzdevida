import { Col, Image, Row, Typography } from "antd";
import Card from "antd/lib/card/Card";
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
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        margin: "5% 0",
      }}
    >
      {professionals.map((professional) => (
        <Col
          key={professional.id}
          xs={24}
          sm={12}
          md={12}
          lg={5}
          className="d-flex items-center"
        >
          <Card
            className="custom-card"
            bodyStyle={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              height: "100%",
              padding: "20px",
            }}
            style={{
              background: "#D3D3D3",
              width: "15vw",
              height: "fit-content",
              minHeight:'16vw',
               // más alto para evitar que el contenido quede apretado
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            {/* Parte superior - imagen */}
            <div style={{ flex: "0 0 auto", marginBottom: "1rem" }}>
              <Image
                src={professional.icon}
                width={200}
                height={150}
                style={{
                  objectFit: "contain",
                  background: "white",
                  borderRadius: "20px",
                }}
                preview={false}
              />
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
          </Card>
        </Col>
      ))}
    </Row>
  );
}
