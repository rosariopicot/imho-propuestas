/* ==========================================================================
   PROPUESTA IMHO · ARCHIVO DE CONFIGURACIÓN
   --------------------------------------------------------------------------
   Para reutilizar la propuesta con otro cliente, editá SOLO este archivo.
   Todo lo que está entre comillas "..." es texto que se ve en la página.
   Los precios se escriben tal cual querés que aparezcan (no se redondean).
   ========================================================================== */

window.PROPUESTA = {
  // Nombre que aparece en la pestaña del navegador
  tituloPestana: "IMHO · Propuesta de edición de video",

  // 01 · PORTADA
  portada: {
    titulo: "Propuesta de edición de",
    tituloDestacado: "video", // se muestra en terracota e itálica
  },

  // 02 · PROPUESTA
  propuesta: {
    titulo: "¿Qué incluyen nuestros packs?",
    incluye: [
      "Asesoramiento creativo sobre las ideas propuestas por el cliente: hook, desarrollo y call to action.",
      "Edición del material en crudo y voces en off proporcionados por el cliente.",
      "Incorporación de subtítulos, música, transiciones y recursos visuales.",
      "Dos instancias de corrección por video.",
      "Entrega del contenido listo para publicar.",
    ],
    aclaracion: "El servicio no incluye la grabación del material.",

    tituloPacks: "Packs de edición",
    etiquetaTotal: "Precio total",
    notaMoneda: "Valores expresados en pesos argentinos.",
    packs: [
      {
        nombre: "Pack x 4 videos",
        precioUnitario: "$32.000 por video",
        frecuencia: "1 video por semana (4 semanas)",
        precioTotal: "$128.000",
      },
      {
        nombre: "Pack x 8 videos",
        precioUnitario: "$28.800 por video",
        frecuencia: "2 videos por semana (4 semanas)",
        precioTotal: "$230.400",
      },
      {
        nombre: "Pack x 12 videos",
        precioUnitario: "$27.200 por video",
        frecuencia: "3 videos por semana (4 semanas)",
        precioTotal: "$326.400",
      },
    ],
  },

  // 03 · PORTFOLIO
  // Pegá en "src" el link directo al video (.mp4 o .mov). Ej. de Cloudinary:
  //   "https://res.cloudinary.com/duhd6ldzm/video/upload/v123/mi_video.mp4"
  // "poster" (opcional): imagen de portada. Con Cloudinary se genera sola.
  // Mientras "src" esté vacío se muestra un recuadro de reemplazo.
  portfolio: {
    titulo: "Algunos de nuestros trabajos",
    videos: [
      { src: "", poster: "" },
      { src: "", poster: "" },
      { src: "", poster: "" },
      { src: "", poster: "" },
      { src: "", poster: "" },
      { src: "", poster: "" },
    ],
  },

  // 04 · CONTACTO
  contacto: {
    mensaje: "Nos encantaría conocer más sobre tu proyecto y trabajar juntos",
    cierre: "¡Hagamos un meet!",
    boton: "Coordinar reunión",
    // Número de WhatsApp en formato internacional, sin espacios ni signos
    whatsapp: "5491156606395", // 11 5660-6395,
    mensajeWhatsapp:
      "¡Hola IMHO! Vi la propuesta de edición de video y me gustaría coordinar un meet.",
    linkAlternativo: "", // opcional: si completás un link acá, el botón usa este link en vez de WhatsApp
  },
};
