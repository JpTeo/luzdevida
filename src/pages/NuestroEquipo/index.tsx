import WhatsAppButton from "../../common/Button/Flotante/WhatsApp";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
import ContentBlockCopy from "../../components/ContentBlockPersonalizado";
import data from "../../content/nuestroEquipo.json";
import { NuestroEquipoData } from "../../types/NuestroEquipo";
import CardProfessional from "../../components/cardsProfesional/Card";
import SEOHead from "../../components/SEOHead";
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
      <ScrollToTop />

      <main>
        <Container>
          <br></br>
          <br></br>

          <section aria-labelledby="team-heading">
            <h1 id="team-heading" className="sr-only">
              Nuestro Equipo Profesional
            </h1>

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
