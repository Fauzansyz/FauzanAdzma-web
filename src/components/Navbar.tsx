
import { Sheet } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ThemeToggle"
import { useTheme } from "next-themes"

type NavbarSection = {
  onScroll: () => void
}

export default function Navbar({ onScroll }: NavbarSection) {
  const { theme } = useTheme()
  return (
    <header className="fixed top-0 z-50 w-full bg-background/0 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <img src={theme === "dark" ? "/logo/res_assets_logo_dark.png" : "/logo/res_assets_logo_light.png"} className="w-20 h-20" alt="Logo" />

        {/* Desktop */}
        <nav className="hidden gap-6 md:flex">
          <a href="#projects" onClick={onScroll} className="text-sm text-muted-foreground hover:text-foreground">Projects</a>
          <a className="text-sm text-muted-foreground hover:text-foreground">Stack</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">Contact</a>
        </nav>

        {/* Mobile */}
        <Sheet>
          <ThemeToggle />
        </Sheet>
      </div>
    </header>
  )
}
