
const ThirdContent = () => {
  return (
        <div className="font-oxygen text-sm lg:text-base lg:flex w-full 2xl:w-10/12 2xl:mx-auto px-4 lg:px-8 2xl:px-4 py-8">
            <div className="w-full lg:w-1/2">
                <div className="w-full lg:w-3/4 2xl:w-1/2 py-4 mx-auto">
                    <img className="w-full h-full"
                        src="/assets/images/company.png" alt="illustration"
                    />
                </div>
                <div className="p-4">
                    <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-primary">
                        Connect company to drivers
                    </h1>
                    <p className="text-lg lg:text-xl mt-6 text-primary">
                        Many companies need drivers to deliver all their products. There are also people who need to deliver the goods.
                    </p>
                    <div className="mt-8">
                        <button className="px-6 py-2 w-full lg:w-auto rounded-full bg-secondary text-primary hover:bg-primary hover:text-secondary">
                            Find company near your place
                        </button>
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="w-full lg:w-3/4 2xl:w-1/2 py-4 mx-auto">
                    <img className="w-full h-full"
                        src="/assets/images/drivers.png" alt="illustration"
                    />
                </div>
                <div className="p-4">
                    <h1 className="text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-primary">
                        Find your drivers
                    </h1>
                    <p className="text-lg lg:text-xl mt-6 text-primary">
                        Hire drivers for your trailers or payload that drivers require with it.
                    </p>
                    <div className="mt-8">
                        <button className="px-6 py-2 w-full lg:w-auto rounded-full bg-secondary text-primary hover:bg-primary hover:text-secondary">
                            Hire drivers
                        </button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ThirdContent
