import RenderIcon from './RenderIcon'

export default function Row({ items, cols }) {
  const colClass =
        cols === 3 ? "grid-cols-3" : "grid-cols-4"
return (
              <div className={`grid ${colClass} gap-5 justify-items-center`}>
                {items.map((item, index) => (
                        <RenderIcon
                          key={index}
                        Icon={item.Icon}
                        color={item.color}
                      />
                    ))}
                </div>
  )
}
