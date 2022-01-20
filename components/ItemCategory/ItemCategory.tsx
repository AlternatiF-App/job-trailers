import { ChevronRightIcon } from '@heroicons/react/outline'

interface ItemCategoryProps{
    id?: string;
    name: string;
    icon: string;
    jobAvailability: number;
}

const ItemCategory = ({ id, name, icon, jobAvailability }: ItemCategoryProps) => {
  return (
        <div className="py-10 shadow-sm text-sm lg:text-base rounded-xl border-2 border-primary bg-secondary">
            <div className="px-8 w-44">
                <img className="w-full h-auto" alt="icon"
                    src={`/assets/icons/${icon}`}
                    loading="lazy"
                />
            </div>
            <div className="px-2 pt-4">
                <h2 className="text-primary text-center font-semibold">
                    {name}
                </h2>
                <div className="flex items-center space-x-2 w-full mt-2">
                    <span className="block w-full py-1 text-xs rounded-xl bg-primary text-secondary text-center">
                        {jobAvailability} Job Available
                    </span>
                    <ChevronRightIcon
                        className="h-5 w-5 text-primary"
                        fill="none" stroke="currentColor"
                    />
                </div>
            </div>
        </div>
  )
}

export default ItemCategory
