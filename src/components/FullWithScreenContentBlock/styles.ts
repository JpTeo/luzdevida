import styled from "styled-components";
// export const BackgroundComponent = styled.div<{ $backgroundImage?: string }>`
//   background-image: url(${(props) => props.$backgroundImage});
//   background-size: cover;
//   background-position: center;
//   background-repeat: no-repeat;
//   overflow: hidden;
//   height: 100%;
// `;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const IntroParagraph = styled.p`
  color: #f5f5f5;
  font-size: 1.2rem;
  max-width: 650px;
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-family: "RedHatDisplay", sans-serif;

  strong {
    color: #ffffff;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
  }
`;
export const LogoText = styled.span`
  font-size: 1.5rem;
`;

export const LogoTextLight = styled.span`
  font-weight: normal;
`;
export const HeroSection = styled.section<{ $backgroundImage?: string }>`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;
  overflow: hidden;
  margin: 0;
  padding: 0;
`;
export const StyledContent = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  //background: red;
  width: 80vw;
  flex-direction: column;
  height: 80vh;
  padding: 0 60px;

  @media (max-width: 768px) {
    padding: 2rem 0;
  }
`;

export const HeroContent = styled.div`
  max-width: 100vw;
  // height: 100%;
  height: 100%;
  display: flex;
  aling-intems: center;
  justify-content: center;
  //background: #00000090;
  background: linear-gradient(
    to right,
    #00000098 0%,
    #00000095 50%,
    #00000080 70%,
    transparent 100%
  );
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const MainHeading = styled.h2`
  color: white;
  font-size: 2rem;
  line-height: 1.1;
  margin-bottom: 2rem;
  font-family: "RedHatDisplay", sans-serif;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  width: 10vw;
  @media (max-width: 1040px) {
    flex-direction: column;
    width: 35vw;
    min-width: fit-content;
  }
`;
