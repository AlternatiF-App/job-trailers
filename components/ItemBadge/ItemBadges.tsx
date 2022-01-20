interface ItemBadgesProps{
  id?: string;
  name: string;
  badge: string;
}

const ItemBadges = ({ id, name, badge }: ItemBadgesProps) => {
  return (
      <div className="flex flex-col items-center">
          <div className="w-24 h-24">
              <img className="w-full h-full" alt="badges"
                  src={`/assets/badges/${badge}`}
                  loading="lazy"
              />
          </div>
          <span className="block h-16 lg:h-auto mt-4 text-sm lg:text-base w-full text-primary text-center font-oxygen font-semibold">
              {name}
          </span>
      </div>
  )
}

export default ItemBadges
