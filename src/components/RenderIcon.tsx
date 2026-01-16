export default function RenderIcon({ Icon, color }, index) {
  return (
    <div
      key={index}
      className="flex h-14 w-14 items-center justify-center
            rounded-2xl bg-zinc-100 dark:bg-zinc-900
            shadow-sm transition hover:scale-110"
    >
      <Icon
        size={28}
        style={{ color }}
        className="text-zinc-900 dark:text-zinc-100"
      />
    </div>
  )
}
