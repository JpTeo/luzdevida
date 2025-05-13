"use client";

import type React from "react";
import { NavLink, Extra, FooterContainer, DivImage } from "./styles";
import { Col, Image, Row, Typography } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
} from "@ant-design/icons";
import {
  redirectFacebook,
  redirectInstagram,
  redirectWhatsApp,
} from "../../common/utils/ContactsRedirect";

interface SocialLinkProps {
  icon: React.ReactElement;
  onClick: () => void;
}

const Footer = () => {
  const socialList: SocialLinkProps[] = [
    {
      icon: <WhatsAppOutlined style={{ fontSize: "2rem" }} />,
      onClick: redirectWhatsApp,
    },
    {
      icon: <FacebookOutlined style={{ fontSize: "2rem" }} />,
      onClick: redirectFacebook,
    },
    {
      icon: <InstagramOutlined style={{ fontSize: "2rem" }} />,
      onClick: redirectInstagram,
    },
  ];

  return (
    <>
      <Extra style={{ background: "rgb(204, 169, 221)", padding: "2rem 4rem" }}>
        <Row
          gutter={[16, 16]}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Col xs={24} md={12}>
            <NavLink to="/">
              <DivImage>
                <Image src="/img/logosNuevos/logo1.png" height={"6vw"} />
              </DivImage>
            </NavLink>
          </Col>
          <Col xs={24} md={12} style={{ textAlign: "right" }}>
            <div style={{ color: "black" }}>
              <Typography.Title
                level={5}
                style={{ color: "black", marginBottom: "1rem" }}
              >
                Información de contacto
              </Typography.Title>
              <Typography.Paragraph style={{ color: "black", margin: 0 }}>
                Senillosa 324, Caballito,
              </Typography.Paragraph>
              <Typography.Paragraph style={{ color: "black", margin: 0 }}>
                Buenos Aires - Argentina
              </Typography.Paragraph>
              <Typography.Paragraph style={{ color: "black", margin: 0 }}>
                Teléfono: +5491149020378
              </Typography.Paragraph>
              <Typography.Paragraph style={{ color: "black", margin: 0 }}>
                +5491120697029
              </Typography.Paragraph>
              <FooterContainer
                style={{
                  display: "flex",
                  gap: "1rem",
                  justifyContent: "flex-end",
                }}
              >
                {socialList.map((item, idx) => (
                  <div
                    key={idx}
                    onClick={item.onClick}
                    style={{
                      cursor: "pointer",
                      background: "transparent",
                      borderRadius: "50%",
                      width: "32px",
                      height: "32px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "2.5rem",
                    }}
                  >
                    {item.icon}
                  </div>
                ))}
              </FooterContainer>
            </div>
          </Col>
        </Row>
      </Extra>
      <div
        style={{
          background: "white",
          padding: "0.5rem 4rem",
          textAlign: "right",
        }}
      >
        <Typography.Text style={{ fontSize: "0.9rem" }}>
          Creado por Teo-Coop
        </Typography.Text>
      </div>
    </>
  );
};

export default Footer;
