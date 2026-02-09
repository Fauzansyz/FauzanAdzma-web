import type RenderIconProps from '../types/RenderIconProps'

export default function RenderIcon({ Icon, color }: RenderIconProps) {
  return (
    <div
      className="flex h-14 w-14 items-center justify-center
            rounded-2xl shadow-sm transition hover:scale-110"
    >
      <Icon
        size={28}
        style={{ color }}
        className="text-zinc-900 dark:text-zinc-100"
      />
    </div>
  )
}
