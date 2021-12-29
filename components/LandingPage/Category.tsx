import ItemCategory from '../ItemCategory/ItemCategory'

const Category = () => {
  return (
        <div className="font-oxygen bg-secondary text-sm lg:text-base ">
            <div className="lg:flex py-10 lg:py-14 xl:py-16 2xl:py-20 w-full 2xl:w-10/12 2xl:mx-auto">
                <div className="w-full lg:w-1/3 px-4 pt-6 lg:px-8 2xl:px-4">
                    <h1 className="text-4xl xl:text-4xl 2xl:text-6xl font-bold">
                        Choose your own payload
                    </h1>
                    <p className="pt-10 text-lg 2xl:text-xl">
                        Check your trailers and choose payload which is match to your trailers
                    </p>
                    <div className="pt-8">
                        <button className="px-10 py-2 bg-primary text-secondary rounded-full">
                            See more
                        </button>
                    </div>
                </div>
                <div className="w-full lg:w-2/3 px-4 py-2 mt-8 lg:mt-0 lg:px-16 lg:py-8 2xl:px-20 2xl:py-10">
                    <div className="flex w-full py-8 overflow-x-auto hide-scroll-bar space-x-6">
                        <ItemCategory
                            name={'Goods'}
                            icon={'ic-goods.png'}
                            jobAvailability={26}
                        />
                        <ItemCategory
                            name={'Liquid'}
                            icon={'ic-liquid.png'}
                            jobAvailability={10}
                        />
                        <ItemCategory
                            name={'Materials'}
                            icon={'ic-log.png'}
                            jobAvailability={6}
                        />
                        <ItemCategory
                            name={'Foods'}
                            icon={'ic-food.png'}
                            jobAvailability={10}
                        />
                        <ItemCategory
                            name={'Creature'}
                            icon={'ic-creature.png'}
                            jobAvailability={2}
                        />
                        <ItemCategory
                            name={'Machine'}
                            icon={'ic-machine.png'}
                            jobAvailability={4}
                        />
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Category
