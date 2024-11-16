"use client";

const Presentation: React.FC = () => {
  return (
    <div className="container h-full px-4 mx-auto sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-start ml-20 xl:flex-row xl:pt-8 xl:pb-32">
        {/* Text */}
        <div className="order-2 text-center xl:text-left xl:order-none text-shadow">
          <h3 className="my-4">
            <span className="ml-1 text-2xl font-semibold sm:text-3xl font-AgrandirThinItalic">
              Bienvenido al Proyecto
            </span>
          </h3>
          <h1 className="mb-6 h1">
            <span className="text-6xl text-blacky sm:text-7xl md:text-9xl font-TanGrandeurMayuscula">
              DUSK
            </span>

            <br />
            <span className="text-4xl text-blacky sm:text-5xl md:text-5xl font-AgrandirWide">
              FORO EN LÍNEA
            </span>
          </h1>
          <p className="max-w-[500px] mb-9 mx-auto text-blacky text-lg sm:text-lg font-AgrandirRegular">
            Proyecto orientado a Lineage 2, diseñado para ofrecer una
            experiencia intuitiva y moderna. Aquí podrás encontrar secciones de
            discusión, hilos de ayuda y mucho más.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
