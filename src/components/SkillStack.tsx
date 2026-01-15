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

} from "react-icons/si"


const skillRows = [
  // Row 1 (4)
  [
    { Icon: SiReact, color: "#61DAFB" },
    { Icon: SiJavascript, color: "#F7DF1E" },
    { Icon: SiTailwindcss, color: "#38BDF8" },
    { Icon: SiTypescript, color: "#3178C6" },
  ],
  //
  //                       // Row 2 (3)
  [
    { Icon: SiVite, color: "#646CFF" },
    { Icon: SiGit, color: "#F05032" },
    { Icon: SiNodedotjs, color: "#339933" },
  ],
  //
  //                                         // Row 3 (4)
  [
    { Icon: SiGithub, color: "#FFFFFF" },
    { Icon: SiHtml5, color: "#E34F26" },
    { Icon: SiCss3, color: "#1572B6" },
    { Icon: SiKotlin, color: "#7F52FF" },
  ],

]

export default function SkillStack() {
  return (
    <section className="flex flex-col items-center gap-6">
      {skillRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex gap-6 ${row.length === 3 ? "justify-center" : ""
            }`}
        >
          {row.map(({ Icon, color }, index) => (
            <div
              key={index}
              className="flex h-14 w-14 items-center justify-center
                            rounded-2xl bg-zinc-100 dark:bg-zinc-900
                            shadow-sm transition
                            hover:scale-110 hover:shadow-md"
            >
              <Icon
                size={28}
                style={{ color }}
                className="transition-transform"
              />
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}
