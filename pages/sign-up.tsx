import { EyeIcon, EyeOffIcon, ChevronLeftIcon } from '@heroicons/react/outline'
import { useState } from 'react'
import Link from 'next/link'

const SignUp = () => {
  const [showPassword, setShowPassword] = useState('password')

  return (
        <div className="font-oxygen text-sm lg:text-base lg:flex w-full">
            <div className="hidden lg:block w-full h-screen lg:w-1/2 bg-secondary px-4 py-8 lg:px-4 lg:py-16 xl:px-8 xl:py-14 2xl:py-32 2xl:px-36">
                <Link href="/">
                    <div className="cursor-pointer flex items-center space-x-2 -mt-10 -ml-10">
                        <ChevronLeftIcon
                            className="h-10 w-10 text-primary"
                            fill="none" stroke="currentColor"
                        />
                        <span className="block text-primary text-xl">
                            Back
                        </span>
                    </div>
                </Link>
                <div>
                    <img className="w-full h-auto"
                        src="/assets/images/vector.png" alt="main-image"
                    />
                </div>
            </div>
            <div className=" w-full lg:w-1/2 py-16 lg:py-36 px-4 lg:px-8 2xl:px-48">
                <Link href="/">
                    <div className="lg:hidden cursor-pointer flex items-center space-x-2 -mt-12 -ml-3">
                        <ChevronLeftIcon
                            className="h-10 w-10 text-primary"
                            fill="none" stroke="currentColor"
                        />
                        <span className="block text-primary text-xl">
                            Back
                        </span>
                    </div>
                </Link>
                <h1 className="mt-10 lg:mt-0 text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-primary">
                    Sign Up
                </h1>
                <p className="text-primary text-lg pt-6">
                    Join to discover all the jobs or find your drivers here.
                </p>
                <div className="pt-14">
                    <input placeholder="Email" type="email"
                        className="px-4 py-2 w-full outline-none text-primary border border-gray-400 focus:border-primary rounded-full"
                    />
                    <div className="mt-8 relative w-full">
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
                <div>
                    <p className="block text-sm text-center px-20 mt-4 text-gray-500 cursor-pointer">
                        By clicking Agree & Join, you agree to the Job Trailers
                        <span className="hover:text-primary hover:underline cursor-pointer transition-all duration-300 ease-in-out">User Agreement</span>,
                        <span className="hover:text-primary hover:underline cursor-pointer transition-all duration-300 ease-in-out">Privacy Policy</span>,
                        and<span className="hover:text-primary hover:underline cursor-pointer transition-all duration-300 ease-in-out"> Cookie Policy</span>.
                    </p>
                </div>
                <div className="w-full mt-12">
                    <button className="px-4 py-3 bg-primary text-secondary w-full rounded-full">
                        Agree & Join
                    </button>
                </div>
                <div className="items-center py-2 my-2">
                    <div className="flex my-2 text-primary gap-x-2 items-center justify-center">
                        <div className="h-px w-24 lg:w-48 bg-primary rounded-full" />
                            Or
                        <div className="h-px w-24 lg:w-48 bg-primary rounded-full" />
                    </div>
                </div>
                <div className="w-full lg:flex space-y-4 lg:space-y-0 lg:space-x-6">
                    <div className="px-4 py-2 w-full lg:w-1/2 justify-center flex items-center space-x-8 border border-primary rounded-full">
                        <img className="w-6"
                            src="/assets/icons/facebook.png"
                        />
                        <span className="block text-primary">
                            Sign Up with Facebook
                        </span>
                    </div>
                    <div className="px-4 py-2 w-full lg:w-1/2 justify-center flex items-center space-x-8 border border-primary rounded-full">
                        <img className="w-6"
                            src="/assets/icons/google.png"
                        />
                        <span className="block text-primary">
                            Sign Up with Google
                        </span>
                    </div>
                </div>
                <div className="flex justify-center items-center space-x-3 mt-8">
                    <span className="block text-primary">
                        Already on Job Trailers?
                    </span>
                    <Link href="/sign-in">
                        <span className="block cursor-pointer rounded-full px-3 py-0.5 text-primary hover:text-secondary hover:bg-primary">
                            Sign In
                        </span>
                    </Link>
                </div>
            </div>
        </div>
  )
}

export default SignUp
