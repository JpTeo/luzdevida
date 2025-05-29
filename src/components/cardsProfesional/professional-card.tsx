import { Col, Row } from "antd";
import data from "../../content/nuestroEquipo.json";
import CardProfessional from "./Card";
import { ColHeight } from "./styles";
// Definición de los datos de los profesionales

export default function ProfessionalCards() {
  return (
    <Row
      gutter={[16, 16]} // horizontal y vertical
      justify="center"
    >
      {data.professionals.map((professional) => (
        <Col
          key={professional.id}
          xs={24}
          sm={12}
          md={6}
          lg={5}
          className="d-flex items-center"
        >
          <ColHeight>
            <CardProfessional
              id={professional.id}
              title={professional.title}
              name={professional.name}
              license={professional.license}
              icon={professional.icon}
              content={professional.content}
              direction={"left"}
            />
          </ColHeight>
        </Col>
      ))}
    </Row>
  );
}
