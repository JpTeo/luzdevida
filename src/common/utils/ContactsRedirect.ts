export const redirectWhatsApp = () => {
  // 1. Opcional: Verifica que dataLayer exista antes de hacer push
  if (window.dataLayer) {
    // 2. IMPORTANTE: Empuja un evento personalizado al dataLayer
    // Este nombre (ej. 'whatsappClick') es el que el equipo de Marketing/Analítica
    // debe usar en el panel de GTM para crear el DISPARADOR.
    window.dataLayer.push({
      event: "whatsappClick",
      event_category: "Contacto",
      event_label: "Redireccionamiento WhatsApp",
      event_action: "Clic en Botón Flotante WhatsApp",
    });

    // Opcional: console.log para depuración en el navegador
    console.log("Evento 'whatsappClick' enviado a dataLayer.");
  }

  // 3. Ejecuta la acción original del botón
  const whatsappLink = `https://wa.me/+5491138259999`;
  window.open(whatsappLink, "_blank");
};

export const redirectFacebook = () => {
  const facebookLink = "http://facebook.com/profile.php?id=100063503292704";
  window.open(facebookLink, "_blank");
};

export const redirectInstagram = () => {
  const instagramLink = "https://www.instagram.com/residencialuzdevida";
  window.open(instagramLink, "_blank");
};
