// src/global.d.ts

// 1. Define la estructura de los objetos que enviarás al dataLayer.
// Esto es para que TypeScript sepa qué propiedades esperar.
interface DataLayerObject {
  event?: string; // Propiedad fundamental para disparar triggers en GTM
  event_category?: string;
  event_label?: string;
  event_action?: string;
  // Puedes añadir cualquier otra clave que uses habitualmente (ej: user_id, value)
  [key: string]: any; // Permite cualquier otra propiedad no definida explícitamente
}

// 2. Extiende la interfaz global 'Window' para incluir 'dataLayer'.
// Le dice a TypeScript que 'window' ahora tiene la propiedad 'dataLayer',
// que es un array de objetos DataLayerObject.
interface Window {
  dataLayer: DataLayerObject[];
}
