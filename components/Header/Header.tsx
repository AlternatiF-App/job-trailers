import Image from 'next/image'
import { useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, CogIcon, MenuIcon, MailIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const Header = () => {
  const [menu, setMenu] = useState(false)
  const [auth, setAuth] = useState(false)
  const active:string = 'border-r-4 border-primary'

  return (
    <div className="font-oxygen text-sm lg:text-base shadow-sm">
        <div className="bg-primary w-full py-0.5 px-4 lg:px-8 2xl:px-4">
            <div className="flex justify-end w-full 2xl:w-10/12 2xl:mx-auto">
                <p className="text-secondary flex items-center text-xs md:text-sm font-medium">
                    <MailIcon className="h-5 w-5 mr-2" fill="none" stroke="currentColor"/>
                    job-trailers@job.trailers.com
                </p>
            </div>
        </div>
        <div className="bg-white">
            <div className="w-full 2xl:w-10/12 2xl:mx-auto py-3 px-4 lg:py-4 lg:px-8 2xl:px-6">
                <div className="flex justify-between w-full">
                    <div className="w-auto lg:w-1/2 flex items-center space-x-12">
                        <div>
                            <img
                                className="w-12 md:w-20 lg:w-24 h-auto"
                                src='/assets/images/job-trailer.png'
                                alt="logo" loading="lazy"
                            />
                        </div>
                        <div className="hidden lg:block w-full relative">
                            <input type="text" placeholder="Search"
                                className="bg-stone-100 text-primary w-full outline-none rounded-full py-2 px-4 pr-10"
                            />
                            <button className="absolute top-0 right-0 mr-2 mt-1.5 rounded-full bg-stone-200 p-1">
                                <SearchIcon className="text-primary h-5 w-5" fill="currentColor" stroke="none"/>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-end space-x-6 items-center w-auto lg:w-1/2">
                        <div className="flex space-x-4 lg:space-x-2 items-center">
                            <SearchIcon className="block lg:hidden text-primary h-5 w-5" fill="currentColor" stroke="none"/>
                            <BellIcon className="text-primary h-5 w-5" fill="none" stroke="currentColor"/>
                            <CogIcon className="text-primary h-5 w-5" fill="none" stroke="currentColor"/>
                            <MenuIcon
                                onClick={() => setMenu(!menu)}
                                className="block lg:hidden text-primary h-5 w-5"
                                fill="none" stroke="currentColor"/>
                        </div>
                        <div className="hidden lg:block">
                            {
                                auth
                                  ? <Image onClick={() => setAuth(!auth)} src="/assets/images/ava.jpg" alt="avatar" className="rounded-full object-cover" width="38" height="38" />
                                  : <div className="flex lg:space-x-2 items-center">
                                    <Link href="/sign-upw">
                                        <button className="px-3 py-0.5 rounded-full bg-secondary text-primary">
                                            Join Now
                                        </button>
                                    </Link>
                                    <Link href="/sign-in">
                                        <button className="px-3 py-0.5 rounded-full bg-primary text-secondary">
                                            Sign In
                                        </button>
                                    </Link>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="hidden mt-1 py-2 px-2 lg:flex items-center justify-between">
                    <ul className="font-medium flex items-center space-x-8">
                        <Link href="/"><li className="hover:text-primary text-gray-500 cursor-pointer transition-all duration-300 ease-in-out">Dashboard</li></Link>
                        <Link href="/discover"><li className="hover:text-primary text-gray-500 cursor-pointer transition-all duration-300 ease-in-out">Discover</li></Link>
                        <li className="hover:text-primary text-gray-500 cursor-pointer transition-all duration-300 ease-in-out">Job</li>
                        <li className="hover:text-primary text-gray-500 cursor-pointer transition-all duration-300 ease-in-out">Contact Us</li>
                        <li className="hover:text-primary text-gray-500 cursor-pointer transition-all duration-300 ease-in-out">About Us</li>
                    </ul>
                    <ul className="font-medium flex items-center space-x-4">
                        <img className="w-6 cursor-pointer"
                            src='/assets/icons/fb.png'
                            alt="social media" loading="lazy"
                        />
                        <img className="w-6 cursor-pointer"
                            src='/assets/icons/instagram.png'
                            alt="social media" loading="lazy"
                        />
                        <img className="w-6 cursor-pointer"
                            src='/assets/icons/twitter.png'
                            alt="social media" loading="lazy"
                        />
                    </ul>
                </div>
            </div>
        </div>
        {
             menu && <div className="block lg:hidden relative z-50 transition duration-300 ease-in-out">
             <div onClick={() => setMenu(false)} className="fixed inset-0 bg-primary opacity-25 transition duration-300 ease-in"/>
                <nav className="fixed top-0 left-0 bottom-0 w-5/6 max-w-sm py-8 bg-white border-r overflow-y-auto ">
                    <div className="flex space-x-6 items-center px-4">
                        <Image src="/assets/images/ava.jpg" alt="avatar" className="rounded-full object-cover" width="50" height="50" />
                        <div>
                            <h2 className="text-base text-primary font-bold">Ahmad Fanani</h2>
                            <h3 className="text-sm leading-none text-gray-400">fananiapps@gmail.com</h3>
                        </div>
                    </div>
                    <div className="mt-2 flex justify-end space-x-2 px-4">
                        <button className="px-2 py-0.5 text-xs bg-primary text-secondary rounded-full">
                            On Duty
                        </button>
                        <button className="px-2 py-0.5 text-xs bg-primary text-secondary rounded-full">
                            30 Job Done
                        </button>
                    </div>
                    <ul className="text-base font-medium space-y-1 pt-8 pl-4">
                        <li className={`${active} hover:text-primary text-gray-500 cursor-pointer py-0.5`}>Dashboard</li>
                        <li className={'hover:text-primary text-gray-500 cursor-pointer py-0.5'}>Company</li>
                        <li className={'hover:text-primary text-gray-500 cursor-pointer py-0.5'}>Payloads</li>
                        <li className={'hover:text-primary text-gray-500 cursor-pointer py-0.5'}>Trailers</li>
                        <li className={'hover:text-primary text-gray-500 cursor-pointer py-0.5'}>Drivers</li>
                        <li className={'hover:text-primary text-gray-500 cursor-pointer py-0.5'}>Contact Us</li>
                        <li className={'hover:text-primary text-gray-500 cursor-pointer py-0.5'}>About Us</li>
                    </ul>
                    <div className="fixed w-5/6 max-w-sm left-0 bottom-0 px-4 mb-4">
                        {
                            auth
                              ? <button onClick={() => setAuth(!auth)} className="w-full px-4 py-2 rounded-xl bg-primary text-secondary">
                                Logout
                            </button>
                              : <div className="flex space-x-2">
                                <button onClick={() => setAuth(!auth)} className="w-1/2 px-4 py-2 rounded-xl bg-secondary text-primary">
                                    Sign In
                                </button>
                                <button onClick={() => setAuth(!auth)} className="w-1/2 px-4 py-2 rounded-xl bg-primary text-secondary">
                                    Sign Up
                                </button>
                            </div>
                        }
                    </div>
                </nav>
            </div>
        }
    </div>
  )
}

export default Header
