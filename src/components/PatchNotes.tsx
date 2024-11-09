import React from "react";
import Link from "next/link";

const PatchNotes: React.FC = () => {
  return (
    <div className="min-h-screen rounded bg-black/40 m-7">
      {/* Sección principal de las notas de parche */}
      <main className="container px-4 py-8 mx-auto">
        <section className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-white">
            Dusk: Notas de la Actualización
          </h2>
          <p className="mt-2 text-white">
            ¡Bienvenido a las notas de parche! Aquí encontrarás detalles sobre
            los cambios y mejoras implementados en nuestro juego.
          </p>
          <p className="text-white">
            A medida que nuestro proyecto evoluciona, lanzaremos emocionantes
            actualizaciones que enriquecerán tu experiencia de juego.
          </p>
          <p className="text-white">
            Permanece atento a los nuevos cambios realizados para mantenerte al
            día con nuestro progreso diario y no perderte ninguna novedad.
          </p>
        </section>

        {/* Contenedor de parches en tarjetas */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-4">
          {/* Componente de Tarjeta de Parche */}
          <PatchCard
            title="Cambios de inicio de temporada"
            description={[
              { label: "Personajes:", text: "Nuevas habilidades y ajustes." },
              {
                label: "Evento:",
                text: "Prepárate para nuestro evento de lanzamiento.",
              },
              {
                label: "Actualización de la tienda:",
                text: "Hemos ampliado y retocado items en nuestra tienda.",
              },
            ]}
            link="../Html/infoPatch_Notes/SeasonStart/SeasonStart.html"
          />

          <PatchCard
            title="Parche 1.0"
            description={[
              { label: "Fecha de lanzamiento:", text: "15 de octubre de 2024" },
              {
                label: "",
                text: "Se ha corregido un error que afectaba la animación de ataque de algunos personajes, mejorando la fluidez en el combate.",
              },
              {
                label: "",
                text: "Las descripciones de habilidades han sido actualizadas para proporcionar claridad sobre sus efectos y facilitar su uso estratégico.",
              },
              {
                label: "",
                text: "Se han balanceado varias habilidades para asegurar una competencia justa y emocionante entre todas las clases.",
              },
            ]}
            link="parche_1.0.html"
          />

          <PatchCard
            title="Parche 2.0"
            description={[
              { label: "Fecha de lanzamiento:", text: "30 de octubre de 2024" },
              {
                label: "",
                text: "Se ha añadido un evento especial por tiempo limitado, donde los jugadores podrán obtener recompensas exclusivas y únicas.",
              },
              {
                label: "",
                text: "El calendario de eventos ha sido modificado para incluir festivales temáticos semanales, ofreciendo diversión continua.",
              },
              {
                label: "",
                text: "Las notificaciones de eventos ahora mostrarán el tiempo restante para participar, asegurando que no te pierdas ninguna oportunidad.",
              },
            ]}
            link="parche_2.0.html"
          />

          <PatchCard
            title="Parche 3.0"
            description={[
              {
                label: "Fecha de lanzamiento:",
                text: "10 de noviembre de 2024",
              },
              {
                label: "",
                text: "Hemos añadido nuevos artículos cosméticos, incluyendo atuendos y accesorios especiales que te permitirán personalizar tu personaje.",
              },
              {
                label: "",
                text: "Ofertas de descuento en paquetes de mejoras y monedas virtuales están disponibles por tiempo limitado, ¡aprovéchalas!",
              },
              {
                label: "",
                text: "Se han implementado mejoras en la navegación de la tienda para que puedas encontrar fácilmente los productos que deseas.",
              },
            ]}
            link="parche_3.0.html"
          />
        </div>
      </main>
    </div>
  );
};

// Componente de Tarjeta de Parche
type PatchCardProps = {
  title: string;
  description: { label: string; text: string }[];
  link: string;
};

const PatchCard: React.FC<PatchCardProps> = ({ title, description, link }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <h2 className="mb-4 text-xl font-semibold text-gray-950">{title}</h2>
    {description.map((item, index) => (
      <p key={index} className="mb-2 text-gray-950">
        <strong>{item.label}</strong> {item.text}
      </p>
    ))}
    <Link
      href={link}
      className="p-2 px-3 text-black transition-transform border-2 border-black rounded-full bg-amber-300 font-AgrandirRegular hover:scale-95">
      ver detalles
    </Link>
  </div>
);

export default PatchNotes;
