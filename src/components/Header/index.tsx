import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";
import { useHistory } from "react-router-dom";

const Header = () => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };
  const history = useHistory();
  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall onClick={() => history.push("/")}>
          <Span>{"Inicio"}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("nosotros")}>
          <Span>{"Nosotros"}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("servicios")}>
          <Span>{"Servicios"}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button>{"Contacto"}</Button>
          </Span>
        </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection role="banner">
      <Container>
        <Row justify="space-between" align="middle">
          {/* Logo con enlace semántico */}
          <LogoContainer to="/" aria-label="Inicio">
            <SvgIcon
              src="/img/logosNuevos/logo1.png"
              aria-hidden="true"
              width="100"
              height={"auto"}
            />
          </LogoContainer>

          <NotHidden>
            <nav role="navigation" aria-label="Menú principal">
              <MenuItem />
            </nav>
          </NotHidden>

          <Burger
            onClick={toggleButton}
            aria-expanded={visible}
            aria-controls="mobile-menu"
            aria-label="Abrir menú"
          >
            <Outline />
          </Burger>

          <Drawer
            id="mobile-menu"
            aria-modal="true"
            aria-label="Menú de navegación"
            closable={false}
            open={visible}
            onClose={toggleButton}
          >
            <Col style={{ marginBottom: "2.5rem" }}>
              <Label onClick={toggleButton}>
                <Col span={12}>
                  <Menu>Menu</Menu>
                </Col>
                <Col span={12}>
                  <Outline />
                </Col>
              </Label>
            </Col>
            <nav role="navigation" aria-label="Menú móvil">
              <MenuItem />
            </nav>
          </Drawer>
        </Row>
      </Container>
    </HeaderSection>
  );
};
export default Header;
