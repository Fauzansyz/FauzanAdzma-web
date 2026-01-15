
import { Sheet } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/ThemeToggle"

export default function Navbar({ onScroll }) {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <span className="text-lg font-semibold">Zandeveloper</span>

        {/* Desktop */}
        <nav className="hidden gap-6 md:flex">
          <a onClick={onScroll} className="text-sm text-muted-foreground hover:text-foreground">Projects</a>
          <a href="#skills" className="text-sm text-muted-foreground hover:text-foreground">Skills</a>
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
