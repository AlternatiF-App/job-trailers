import ItemBadges from '../ItemBadge/ItemBadges'
import { ChevronRightIcon } from '@heroicons/react/outline'

const Badge = () => {
  return (
        <div className="font-oxygen text-sm lg:text-base lg:flex w-full 2xl:w-10/12 2xl:mx-auto px-4 lg:px-8 2xl:px-4 py-8">
            <div className="flex items-center justify-center space-x-10 w-full overflow-x-auto hide-scroll-bar lg:overflow-x-hidden">
                <ItemBadges name={'Explosive'} badge={'badge-explosive.png'}/>
                <ItemBadges name={'Non-Flammable Gas'} badge={'badge-non-flammable-gas.png'}/>
                <ItemBadges name={'Flammable Liquid'} badge={'badge-flammable-liquid.png'}/>
                <ItemBadges name={'Flammable Solid'} badge={'badge-flammable-solid.png'}/>
                <ItemBadges name={'Toxic and Corrosive'} badge={'badge-corrosive.png'}/>
                <ChevronRightIcon
                    className="hidden lg:block h-14 w-14 ml-4 text-primary"
                    fill="none" stroke="currentColor"
                />
            </div>
        </div>
  )
}

export default Badge
