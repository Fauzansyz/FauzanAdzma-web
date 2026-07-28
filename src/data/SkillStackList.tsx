import type { SkillStackTypes } from "../types/SkillStackTypes"
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiGit,
  SiNodedotjs,
  SiGithub,
  SiHtml5,
  SiCss,
  SiKotlin,
  SiDart,
  SiAndroid,
  SiNextdotjs,
  SiCplusplus

} from "react-icons/si"


export const skillList: SkillStackTypes[] = [

  { Icon: SiReact, color: "#61DAFB", name: "React" },
  { Icon: SiJavascript, color: "#F7DF1E", name: "JavaScript" },
  { Icon: SiTailwindcss, color: "#38BDF8", name: "Tailwind CSS" },
  { Icon: SiTypescript, color: "#3178C6", name: "TypeScript" },
  { Icon: SiVite, color: "#646CFF", name: "Vite" },

  { Icon: SiGit, color: "#F05032", name: "Git" },
  { Icon: SiNodedotjs, color: "#339933", name: "Node.js" },
  { Icon: SiGithub, color: "currentColor", name: "GitHub" },

  { Icon: SiHtml5, color: "#E34F26", name: "HTML5" },
  { Icon: SiCss, color: "#1572B6", name: "CSS3" },
  { Icon: SiKotlin, color: "#7F52FF", name: "Kotlin" },
  { Icon: SiAndroid, color: "#3DDC84", name: "Android" },
  { Icon: SiDart, color: "#0175C2", name: "Dart" },

  { Icon: SiNextdotjs, color: "currentColor", name: "Next.js" },
  { Icon: SiCplusplus, color: "#00599C", name: "C++" },

]

export default skillList;

