import React, { useState } from "react";
import { skillsData } from "@/helpers/skillsData";
import Image from "next/image";

const SkillsManagement: React.FC = () => {
  const [skills] = useState(skillsData);

  return (
    <div className="mt-20 flex flex-col items-center justify-start px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl sm:text-2xl md:text-4xl text-[#f8fafc] font-bold text-shadow">
        Gestión de Habilidades
      </h1>
      <h2 className="text-lg sm:text-sm md:text-xl text-[#f8fafc] font-bold text-shadow">
        Seguimiento y mejora de las habilidades.
      </h2>

      <div className="flex flex-col w-full max-w-full px-4 py-6 mt-10 bg-glass backdrop-filter-glass border-glass border-2 rounded-glass shadow-glass">
        {/* Fila adicional con el icono y el título */}
        <div className="flex items-center justify-between bg-slate-200 p-4 rounded-t-lg border-b border-slate-400">
          <div className="flex items-center">
            <Image
              src="/solsito.png" // Cambia por la ruta de tu icono
              alt="Icon"
              width={50}
              height={50}
              className="object-contain mx-9"
            />
          </div>
          <h3 className="text-xl sm:text-lg font-bold text-gray-700 mx-auto">
            Spectral Dancer
          </h3>
        </div>

        {/* Tabla responsiva con scroll horizontal y vertical */}
        <div className="overflow-x-auto overflow-y-auto">
          <table className="min-w-full bg-slate-100  border-[#ddd] shadow-md rounded-lg rounded-t-none overflow-hidden text-slate-600">
            <thead className="bg-slate-200">
              <tr>
                <th className="py-3 px-4 text-center border-r border-slate-400">
                  Skills
                </th>
                <th className="py-3 px-4 text-center border-r border-slate-400">
                  Description
                </th>
                <th className="py-3 px-4 text-center border-r border-slate-400">
                  Upgrade Skills
                </th>
                <th className="py-3 px-4 text-center border-r border-slate-400">
                  Upgrade Description
                </th>
                <th className="py-3 px-4 text-center">Requirement</th>
              </tr>
            </thead>
            <tbody>
              {skills?.length > 0 ? (
                skills.map((skill, index) => (
                  <tr
                    key={index}
                    className="border border-slate-400 text-center">
                    <td className="py-4 px-4 flex items-center justify-center">
                      {skill.icon ? (
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="mx-2 object-contain"
                        />
                      ) : (
                        "N/A"
                      )}
                      <span>{skill.name}</span>
                    </td>
                    <td className="py-4 px-4 border-r border-l border-slate-400">
                      {skill.description}
                    </td>
                    <td className="py-4 px-4 border-r border-slate-400 flex items-center justify-center">
                      {skill.icon2 ? (
                        <Image
                          src={skill.icon2}
                          alt={skill.name}
                          width={48}
                          height={48}
                          className="mx-2 object-contain"
                        />
                      ) : (
                        "N/A"
                      )}
                      <span>{skill.upgradeSkills}</span>
                    </td>
                    <td className="py-4 px-4 border-r border-slate-400">
                      {skill.upgradeDescription}
                    </td>
                    <td className="py-4 px-4">{skill.requirement}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={6}
                    className="py-4 px-4 text-center text-gray-500">
                    No se encontraron resultados.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SkillsManagement;
