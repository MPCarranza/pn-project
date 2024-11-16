// skillsData.ts

export interface Skill {
  name: string;
  description: string;
  upgradeSkills: string;
  upgradeDescription: string;
  requirement: string;
  icon?: string;
  upgradeIcon?: string;
}

export const skillsData: Skill[] = [
  {
    name: "Rush",
    description:
      "Charge towards the target. The skill can be used if the target is within 150 units.",
    upgradeSkills: "➡️ Dancer Assault",
    upgradeDescription:
      "Attack the target with Power 3000.\n\nIgnores shield defense.\nIgnores 5% of the target's defense.\nThere is a possibility of landing a critical hit.\nCD: 3 sec.",
    requirement:
      'Rush - lv. 40\nDancer Assault - lv 76\nRequires 2-Star Spellbook: "New" Dancer Assault.',
  },
  {
    name: "Grace of the Dancer",
    description:
      "When using dual swords:\nPhysical Attack (P. Atk) +300\nAttack Speed +40\nDamage Bonus in PvE +2%",
    upgradeSkills: "➡️ Grace of the Dancer Lv. 2",
    upgradeDescription:
      "When using dual swords:\nPhysical Attack (P. Atk) +600\nAttack Speed +100\nspeed + 10\nDamage Bonus in PvE +5%",
    requirement:
      "Grace of the Dancer - lv.76\nGrace of the Dancer Lv.2 - lv 81",
  },
  {
    name: "Moving Shadows",
    description:
      "When activated:\nP. Atk. -30%\nMonsters do not attack first.\nConsumes MP over time.",
    upgradeSkills: "➡️ Dance of Shadows",
    upgradeDescription:
      "When activated:\nSpeed + 10\nMonsters do not attack first.\nAffect the entire party.\nConsumes MP over time.",
    requirement:
      'Dance of Shadows - lv. 76\nRequires 1-Star Spellbook: "New" Dance of Shadows.',
  },
  {
    name: "Dance of the Succubus",
    description:
      "When activated:\nWhen attacking with a 10% chance, makes an additional attack and recovers 45% of damage dealt as HP.\nCD: 5 sec.\nAffect the entire party.\nConsumes MP over time.",
    upgradeSkills: "➡️ Dance of the Succubus Lv.2",
    upgradeDescription:
      "When activated:\nDamage dealt increased +5%\nWhen attacking with a 30% chance, makes an additional attack and recovers 45% of damage dealt as HP.\nCD: 3 sec.\n<Succubus Seduction>\nFor 8 sec applies a debuff on the target on additional attack.\nReceived Healing -15%.\nAffect the entire party.\nConsumes MP over time.",
    requirement:
      'Dance of the Succubus - lv. 76\nDance of the Succubus Lv.2 - lv. 81\nRequires 2-Star Spellbook: "New" Dance of the Succubus Lv.2.',
  },
];
