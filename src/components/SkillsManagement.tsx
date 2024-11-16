"use client";
import React, { useState, useEffect, useRef } from "react";
import MyButton from "./MyButton";

const ContentSection: React.FC = () => {
  const [content, setContent] = useState<string | null>(null);
  const [isClassMenuVisible, setIsClassMenuVisible] = useState<boolean>(false);
  const classMenuRef = useRef<HTMLDivElement>(null);

  // Función para cargar el contenido según el archivo y título dados
  const loadContent = (fileName: string, title: string) => {
    setContent(`${title} - Cargando desde ${fileName}`);
  };

  // Función para mostrar u ocultar el menú de clases
  const toggleClassMenu = () => {
    setIsClassMenuVisible(!isClassMenuVisible);
  };

  // Cerrar el menú si se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        classMenuRef.current &&
        !classMenuRef.current.contains(event.target as Node)
      ) {
        setIsClassMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="min-h-screen rounded bg-black/40 m-7">
      <main className="container px-4 py-8 mx-auto">
        <section className="mb-8 text-center">
          <h2 className="mt-10 mb-6 text-2xl font-bold text-white">
            Cambios de inicio de temporada
          </h2>

          <ul className="grid flex-col grid-cols-1 gap-8 p-4 mb-4 bg-gray-900 rounded-lg sm:grid-cols-4 justify-evenly">
            <li>
              <MyButton
                onClick={() =>
                  loadContent("General.html", "Cambios Generales")
                }>
                General
              </MyButton>
            </li>
            <li>
              <MyButton onClick={() => loadContent("Event.html", "Evento")}>
                Event
              </MyButton>
            </li>
            <li>
              <MyButton
                onClick={() =>
                  loadContent("Store.html", "Actualizaciones de la Tienda")
                }>
                Store
              </MyButton>
            </li>
            <li>
              <MyButton onClick={toggleClassMenu}>Class Balance</MyButton>
            </li>
          </ul>

          {/* Submenú para los personajes */}
          {isClassMenuVisible && (
            <>
              <h3 className="w-full mt-10 mb-6 font-semibold text-center text-md">
                Selecciona un Personaje
              </h3>
              <div
                ref={classMenuRef}
                className="grid flex-col grid-cols-1 gap-8 p-4 mb-4 bg-gray-900 rounded-lg sm:grid-cols-4 justify-evenly">
                <MyButton onClick={() => loadContent("Siegel.html", "Siegel")}>
                  Siegel Knight
                </MyButton>
                <MyButton onClick={() => loadContent("Tyrr.html", "Tyrr")}>
                  Tyrr Warrior
                </MyButton>
                <MyButton onClick={() => loadContent("Othell.html", "Othell")}>
                  Othell Rogue
                </MyButton>
                <MyButton onClick={() => loadContent("Yul.html", "Yul")}>
                  Yul Archer
                </MyButton>
                <MyButton onClick={() => loadContent("Feoh.html", "Feoh")}>
                  Feoh Wizard
                </MyButton>
                <MyButton onClick={() => loadContent("Wynn.html", "Wynn")}>
                  Wynn Summoner
                </MyButton>
                <MyButton onClick={() => loadContent("Aeore.html", "Aeore")}>
                  Aeore Healer
                </MyButton>
                <MyButton onClick={() => loadContent("Iss.html", "Iss")}>
                  Iss Enchanter
                </MyButton>
              </div>
            </>
          )}

          {/* Mostrar el contenedor solo si hay contenido */}
          {content && (
            <div
              id="content-container"
              className="p-4 mt-10 bg-gray-800 rounded-lg">
              <p>{content}</p>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default ContentSection;
