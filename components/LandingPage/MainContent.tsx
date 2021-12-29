import { EyeIcon, EyeOffIcon } from '@heroicons/react/outline'
import { useState } from 'react'

const MainContent = () => {
  const [showPassword, setShowPassword] = useState('password')

  return (
    <div className="font-oxygen text-sm lg:text-base lg:flex w-full lg:w-10/12 lg:mx-auto">
        <div className="w-full lg:w-1/2 py-24 lg:py-28 px-4">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-primary">
                Find your payload or take part-time drivers jobs.
            </h1>
            <div className="pt-14">
                <input placeholder="Email" type="email"
                    className="px-4 py-2 w-full lg:w-2/3 outline-none text-primary border border-gray-400 focus:border-primary rounded-full"
                />
                <div className="mt-8 relative w-full lg:w-2/3">
                    <input placeholder="Passowrd" type={showPassword}
                        className="px-4 py-2 pr-10 w-full outline-none text-primary border border-gray-400 focus:border-primary rounded-full"
                    />
                    {
                        showPassword === 'password'
                          ? <div className="absolute mt-2.5 mr-3 top-0 right-0">
                            <EyeOffIcon
                                onClick={() => setShowPassword('text')}
                                className="h-5 w-5 cursor-pointer text-primary"
                                fill="none" stroke="currentColor"
                            />
                        </div>
                          : <div className="absolute mt-2.5 mr-3 top-0 right-0">
                            <EyeIcon
                                onClick={() => setShowPassword('password')}
                                className="h-5 w-5 cursor-pointer text-primary"
                                fill="none" stroke="currentColor"
                            />
                        </div>
                    }
                </div>
            </div>
            <span className="block text-sm pl-2 text-primary cursor-pointer">
                Forgot password?
            </span>
            <div className="w-full lg:w-2/3 mt-12">
                <button className="px-4 py-2 bg-primary text-secondary w-full rounded-full">
                    Sign In
                </button>
            </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 py-8 lg:p-14">
            <img className="w-full h-auto"
                src="/assets/images/vector.png" alt="main-image"
            />
        </div>
    </div>
  )
}

export default MainContent
