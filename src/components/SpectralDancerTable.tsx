// import React, { useEffect, useState } from "react";
// import { skillsData } from "@/helpers/skillsData"; // Importamos los datos

// // Usamos la interfaz Skill definida anteriormente
// interface Skill {
//   name: string;
//   description: string;
//   upgradeSkills: string;
//   upgradeDescription: string;
//   requirement: string;
//   icon?: string;
//   upgradeIcon?: string;
// }

// const SkillsManagement: React.FC = () => {
//   const [skills, setSkills] = useState<Skill[]>([]);

//   // Usamos useEffect para cargar los datos cuando el componente se monta
//   useEffect(() => {
//     setSkills(skillsData); // Asignamos los datos de skillsData al estado
//   }, []);

//   return (
//     <div className="mt-20 flex flex-col items-center justify-start px-4 sm:px-6 md:px-8">
//       <h1 className="text-3xl md:text-4xl text-[#f8fafc] uppercase radhiumz">
//         Gestión de Habilidades
//       </h1>
//       <h2 className="text-lg md:text-xl text-[#f8fafc] sfRegular">
//         Seguimiento y mejora de las habilidades.
//       </h2>

//       <div className="flex flex-col w-full max-w-7xl px-4 py-6 mt-10 bg-glass backdrop-filter-glass border-glass border-2 rounded-glass shadow-glass space-y-4">
//         {/* Tabla con las 5 columnas solicitadas */}
//         <table className="min-w-full bg-white border border-[#ddd] shadow-md rounded-lg overflow-hidden">
//           <thead className="bg-gray-100">
//             <tr>
//               <th className="py-3 px-4 text-left">Skills</th>
//               <th className="py-3 px-4 text-left">Description</th>
//               <th className="py-3 px-4 text-left">Upgrade Skills</th>
//               <th className="py-3 px-4 text-left">Upgrade Description</th>
//               <th className="py-3 px-4 text-left">Requirement</th>
//             </tr>
//           </thead>
//           <tbody>
//             {skills?.length > 0 ? (
//               skills.map((skill, index) => (
//                 <tr key={index} className="border-b border-[#eee] text-center">
//                   <td className="py-4 px-4">{skill.name}</td>
//                   <td className="py-4 px-4">{skill.description}</td>
//                   <td className="py-4 px-4">{skill.upgradeSkills}</td>
//                   <td className="py-4 px-4">{skill.upgradeDescription}</td>
//                   <td className="py-4 px-4">{skill.requirement}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan={5} className="py-4 px-4 text-center text-gray-500">
//                   No se encontraron resultados.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default SkillsManagement;
import React, { useEffect, useState } from "react";
import { skillsData } from "@/helpers/skillsData"; // Importamos los datos

interface Skill {
  name: string;
  description: string;
  upgradeSkills: string;
  upgradeDescription: string;
  requirement: string;
  icon?: string;
  upgradeIcon?: string;
}

const SkillsManagement: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    setSkills(skillsData); // Asignamos los datos de skillsData al estado
  }, []);

  return (
    <div className="mt-20 flex flex-col items-center justify-start px-4 sm:px-6 md:px-8">
      <h1 className="text-3xl md:text-4xl text-[#f8fafc] font-bold text-shadow">
        Gestión de Habilidades
      </h1>
      <h2 className="text-lg md:text-xl text-[#f8fafc] font-bold text-shadow">
        Seguimiento y mejora de las habilidades.
      </h2>

      <div className="flex flex-col w-full max-w-7xl px-4 py-6 mt-10 bg-glass backdrop-filter-glass border-glass border-2 rounded-glass shadow-glass space-y-4">
        <table className="min-w-full bg-blue-100 border border-[#ddd] shadow-md rounded-lg overflow-hidden text-slate-600">
          <thead className="bg-blue-200">
            <tr>
              <th className="py-3 px-4 text-center border-r border-blue-200">
                Skills
              </th>
              <th className="py-3 px-4 text-center border-r border-blue-200">
                Description
              </th>
              <th className="py-3 px-4 text-center border-r border-blue-200">
                Upgrade Skills
              </th>
              <th className="py-3 px-4 text-center border-r border-blue-200">
                Upgrade Description
              </th>
              <th className="py-3 px-4 text-center">Requirement</th>
            </tr>
          </thead>
          <tbody>
            {skills?.length > 0 ? (
              skills.map((skill, index) => (
                <tr key={index} className="border-b border-[#eee] text-center">
                  <td className="py-4 px-4 border-r border-blue-200">
                    {skill.name}
                  </td>
                  <td className="py-4 px-4 border-r border-blue-200">
                    {skill.description}
                  </td>
                  <td className="py-4 px-4 border-r border-blue-200">
                    {skill.upgradeSkills}
                  </td>
                  <td className="py-4 px-4 border-r border-blue-200">
                    {skill.upgradeDescription}
                  </td>
                  <td className="py-4 px-4">{skill.requirement}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="py-4 px-4 text-center text-gray-500">
                  No se encontraron resultados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SkillsManagement;
