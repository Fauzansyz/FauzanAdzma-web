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
  SiCss3,
  SiKotlin,
  SiDart,
  SiAndroid,
  SiNextdotjs,
  SiCplusplus

} from "react-icons/si"
import Row from './Row'
import RenderIcon from './RenderIcon'


const skillRows = [

  { Icon: SiReact, color: "#61DAFB" },
  { Icon: SiJavascript, color: "#F7DF1E" },
  { Icon: SiTailwindcss, color: "#38BDF8" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiVite, color: "#646CFF" },

  { Icon: SiGit, color: "#F05032" },
  { Icon: SiNodedotjs, color: "#339933" },
  { Icon: SiGithub, color: "currentColor" },

  { Icon: SiHtml5, color: "#E34F26" },
  { Icon: SiCss3, color: "#1572B6" },
  { Icon: SiKotlin, color: "#7F52FF" },
  { Icon: SiAndroid, color: "#3DDC84" },
  { Icon: SiDart, color: "#0175C2" },

  { Icon: SiNextdotjs, color: "currentColor" },
  { Icon: SiCplusplus, color: "#00599C" },

]

export default function SkillStack() {
  return (
    <section className="mx-auto max-w-4xl">
      <div className="mb-12 w-full flex justify-center">
        <h2 className="text-3xl font-bold tracking-tight">
          My stack
        </h2>
      </div>

      {/* MOBILE */}
      <div className="flex flex-col gap-6 md:hidden">
        <Row items={skillRows.slice(0, 4)} cols={4} />
        <Row items={skillRows.slice(4, 7)} cols={3} />
        <Row items={skillRows.slice(7, 11)} cols={4} />
        <Row items={skillRows.slice(11, 15)} cols={4} />


      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex flex-wrap justify-center gap-6">
        {skillRows.map((item, index) => (
          <RenderIcon
            key={index}
            Icon={item.Icon}
            color={item.color} />
        ))}
      </div>

    </section>

  )

}
