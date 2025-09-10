import WhatsAppButton from "../../common/Button/Flotante/WhatsApp";
import Container from "../../common/Container";
import ContentBlockCopy from "../../components/ContentBlockPersonalizado";
import data from "../../content/nuestroEquipo.json";
import { NuestroEquipoData } from "../../types/NuestroEquipo";
import CardProfessional from "../../components/cardsProfesional/Card";
import SEOHead from "../../components/SEOHead";
import HeaderContainer from "../../common/Header";
const NuestroEquipo = () => {
  const nuestroEquipo = data as NuestroEquipoData;

  return (
    <>
      <SEOHead
        title="Nuestro Equipo Profesional | Instituto Luz de Vida - Residencia Geriátrica"
        description="Conocé al equipo médico y profesional del Instituto Luz de Vida. Especialistas en geriatría, enfermería, kinesiología y cuidado integral de adultos mayores en Buenos Aires."
        keywords="equipo médico geriátrico, profesionales adultos mayores, médicos geriatras Buenos Aires, enfermeras especializadas, kinesiólogos tercera edad, equipo interdisciplinario geriátrico"
        canonical="https://www.institutoluzdevida.com.ar/NuestroEquipo"
      />

      <WhatsAppButton />
      <main>
        <Container>
          <HeaderContainer>
            <h1>
              Conocé a Nuestro Equipo Profesional en Instituto Luz de Vida
            </h1>
            <p>
              En <strong>Instituto Luz de Vida</strong> contamos con un{" "}
              <strong>equipo interdisciplinario geriátrico</strong> compuesto
              por <strong>médicos geriatras</strong>,{" "}
              <strong>enfermeras especializadas</strong>,{" "}
              <strong>kinesiólogos</strong> y{" "}
              <strong>profesionales de la tercera edad</strong> dedicados al{" "}
              <strong>cuidado integral de adultos mayores</strong>.
            </p>
          </HeaderContainer>
          <section aria-labelledby="team-heading">
            {nuestroEquipo.professionals.map((item) => (
              <article key={item.id}>
                <ContentBlockCopy
                  direction={item.direction}
                  title={item.title}
                  content={item.content || ""}
                  name={item.name}
                  Icon={
                    <CardProfessional
                      id={item.id}
                      title={item.title}
                      name={item.name}
                      license={item.license}
                      icon={item.icon}
                      direction={item.direction}
                    />
                  }
                  id="product"
                  imageSize={{
                    height: "auto",
                    width: "70%",
                  }}
                />
              </article>
            ))}
          </section>

          <br></br>
        </Container>
      </main>
    </>
  );
};

export default NuestroEquipo;
