# IMHO · Propuestas comerciales

Cada carpeta es una propuesta para un cliente y se publica en `https://<dominio-vercel>/<carpeta>`.

- `kinesiologo/` → Propuesta de edición de video.

## Nueva propuesta
1. Duplicá una carpeta (por ejemplo `kinesiologo/`) y ponele el nombre del cliente.
2. Editá solo `config.js`: textos, precios, videos y WhatsApp.
3. Subí los cambios. Vercel publica solo en un minuto.

## Videos
Subilos a Cloudinary (Media Library → subir → "Copy URL") y pegá cada link en `portfolio.videos` dentro de `config.js`. Los .mov se entregan como .mp4 automáticamente. Drive, YouTube o Instagram no sirven porque no dan un link directo al archivo.
