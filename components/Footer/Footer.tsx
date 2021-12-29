import ItemFooter from './ItemFooter'

const Footer = () => {
  return (
        <div className="font-oxygen text-sm lg:text-base">
            <div className="px-4 lg:px-8 2xl:px-4 py-20 w-full 2xl:w-10/12 2xl:mx-auto">
                <div className="lg:flex">
                    <div className="w-full lg:w-1/5 mr-20">
                        <img
                            className="px-10 lg:px-0 w-full lg:w-40 h-auto"
                            src='/assets/images/job-trailer.png'
                            alt="logo"
                        />
                    </div>
                    <div className="mt-8 w-full grid grid-cols-2 lg:grid-cols-4 gap-y-10">
                        <div className="flex">
                            <div>
                                <span className="block font-bold text-primary">General</span>
                                <div className="mt-4 space-y-2 font-medium">
                                    <ItemFooter name={'Sign Up'}/>
                                    <ItemFooter name={'Help Center'}/>
                                    <ItemFooter name={'About'}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <span className="block font-bold text-primary">Browse</span>
                                <div className="mt-4 space-y-2 font-medium">
                                    <ItemFooter name={'Jobs'}/>
                                    <ItemFooter name={'Category'}/>
                                    <ItemFooter name={'Type Payloads'}/>
                                    <ItemFooter name={'Companies'}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <span className="block font-bold text-primary">Footer 3</span>
                                <div className="mt-4 space-y-2 font-medium">
                                    <ItemFooter name={'Menu 3'}/>
                                    <ItemFooter name={'Menu 3'}/>
                                    <ItemFooter name={'Menu 3'}/>
                                    <ItemFooter name={'Menu 3'}/>
                                    <ItemFooter name={'Menu 3'}/>
                                    <ItemFooter name={'Menu 3'}/>
                                </div>
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <span className="block font-bold text-primary">Folders</span>
                                <div className="mt-4 space-y-2 font-medium">
                                    <ItemFooter name={'Drivers'}/>
                                    <ItemFooter name={'Companies'}/>
                                    <ItemFooter name={'Jobs'}/>
                                    <ItemFooter name={'Salaries'}/>
                                    <ItemFooter name={'News'}/>
                                    <ItemFooter name={'Services'}/>
                                    <ItemFooter name={'Services'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-primary w-full py-0.5 px-4 lg:px-8 2xl:px-4">
                <div className="w-full 2xl:w-10/12 2xl:mx-auto text-secondary">
                    <span className="block text-xs lg:text-sm">
                        &copy; Ahmad Fanani 2021
                    </span>
                </div>
            </div>
        </div>
  )
}

export default Footer
