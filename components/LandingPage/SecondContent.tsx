
const SecondContent = () => {
  return (
    <div className="font-oxygen text-sm lg:text-base lg:flex w-full 2xl:w-10/12 2xl:mx-auto px-4 lg:px-8 2xl:px-4 py-8">
        <div className="block lg:hidden w-full lg:w-1/2 py-2 lg:py-16">
            <div className="px-4 lg:px-0 lg:mx-auto">
                <img className="w-full h-full"
                    src="/assets/images/illustration.png" alt="illustration"
                />
            </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 py-8 lg:py-20 2xL:px-8">
            <h1 className="text-2xl lg:text-4xl xl:text-5xl font-semibold text-primary">
                Let people choose payload that match with their trucks.
            </h1>
            <p className="text-base lg:text-xl text-primary mt-8 font-medium">
                People can find their payload. Checking the match with their trailers or find the payload inside container. People can take their job immediately and get payment after they finish their jobs. All payload type and category can be found in the details of jobs. All information about delivery is already post in details jobs.
            </p>
        </div>
        <div className="hidden lg:block w-1/2 py-16">
            <div className="w-96 mx-auto">
                <img className="w-full h-full"
                    src="/assets/images/illustration.png" alt="illustration"
                />
            </div>
        </div>
    </div>
  )
}

export default SecondContent
