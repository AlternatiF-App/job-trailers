import Image from 'next/image'
import { useState } from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, CogIcon, MenuIcon } from '@heroicons/react/outline'

const Header = () => {
  const [menu, setMenu] = useState(false)
  const [auth, setAuth] = useState(true)
  const active:string = 'border-r-4 border-third'

  return (
    <div className="font-oxygen text-sm lg:text-base shadow-sm">
        <div className="bg-third w-full py-0.5 px-4 lg:px-0">
            <div className="flex justify-end w-full lg::w-10/12 lg:mx-auto">
                <p className="text-primary text-xs md:text-sm font-medium">
                    job-trailers@job.trailers.com
                </p>
            </div>
        </div>
        <div className="bg-white">
            <div className="w-full lg:w-10/12 lg:mx-auto py-2 px-4 lg:py-4 lg:px-6">
                <div className="flex justify-between w-full">
                    <div className="w-1/3 lg:w-1/2 flex items-center space-x-20">
                        <div>
                            <img
                                className="w-12 md:w-20 lg:w-24 h-auto"
                                src='/assets/images/job-trailer.png'
                                alt="logo"
                            />
                        </div>
                        <div className="hidden lg:block w-1/2 relative">
                            <input type="text" placeholder="Search"
                                className="bg-stone-100 text-third w-full outline-none rounded-full py-2 px-4"
                            />
                            <button className="absolute top-0 right-0 mr-2 mt-1.5 rounded-full bg-stone-200 p-1">
                                <SearchIcon className="text-third h-5 w-5" fill="currentColor" stroke="none"/>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-end space-x-6 items-center w-full lg:w-1/2">
                        <div className="flex space-x-4 lg:space-x-2 items-center">
                            <SearchIcon className="block lg:hidden text-third h-5 w-5" fill="currentColor" stroke="none"/>
                            <BellIcon className="text-third h-5 w-5" fill="none" stroke="currentColor"/>
                            <CogIcon className="text-third h-5 w-5" fill="none" stroke="currentColor"/>
                            <MenuIcon
                                onClick={() => setMenu(!menu)}
                                className="block lg:hidden text-third h-5 w-5"
                                fill="none" stroke="currentColor"/>
                        </div>
                        <div className="hidden lg:flex lg:space-x-2 items-center">
                            {
                                auth
                                  ? <Image onClick={() => setAuth(!auth)} src="/assets/images/ava.jpg" alt="avatar" className="rounded-full object-cover" width="38" height="38" />
                                  : <div>
                                    <button onClick={() => setAuth(!auth)} className="px-4 py-1 rounded-xl bg-primary text-third">
                                        Sign In
                                    </button>
                                    <button onClick={() => setAuth(!auth)} className="px-4 py-1 rounded-xl bg-third text-primary">
                                        Sign Up
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="hidden mt-1 py-2 px-8 lg:flex items-center justify-between">
                    <ul className="text-lg font-medium flex items-center space-x-8">
                        <li className="hover:text-third text-gray-500 cursor-pointer transition-all duration-300 ease-in-out">Dashboard</li>
                        <li className="hover:text-third text-gray-500 cursor-pointer transition-all duration-300 ease-in-out">Company</li>
                        <li className="hover:text-third text-gray-500 cursor-pointer transition-all duration-300 ease-in-out">Payloads</li>
                        <li className="hover:text-third text-gray-500 cursor-pointer transition-all duration-300 ease-in-out">Trailers</li>
                        <li className="hover:text-third text-gray-500 cursor-pointer transition-all duration-300 ease-in-out">Drivers</li>
                    </ul>
                    <ul className="text-lg font-medium flex items-center space-x-8">
                        <li className="hover:text-third text-gray-500 cursor-pointer transition-all duration-300 ease-in-out">Contact Us</li>
                        <li className="hover:text-third text-gray-500 cursor-pointer transition-all duration-300 ease-in-out">About Us</li>
                    </ul>
                </div>
            </div>
        </div>
        {
             menu && <div className="block lg:hidden relative z-50 transition duration-300 ease-in-out">
             <div onClick={() => setMenu(false)} className="fixed inset-0 bg-gray-800 opacity-25 transition duration-300 ease-in"/>
                <nav className="fixed top-0 left-0 bottom-0 w-5/6 max-w-sm py-8 bg-white border-r overflow-y-auto ">
                    <div className="flex space-x-6 items-center px-4">
                        <Image src="/assets/images/ava.jpg" alt="avatar" className="rounded-full object-cover" width="50" height="50" />
                        <div>
                            <h2 className="text-base text-third font-bold">Ahmad Fanani</h2>
                            <h3 className="text-sm leading-none text-gray-400">fananiapps@gmail.com</h3>
                        </div>
                    </div>
                    <div className="mt-2 flex justify-end space-x-2 px-4">
                        <button className="px-2 py-0.5 text-xs bg-third text-primary rounded-full">
                            On Duty
                        </button>
                        <button className="px-2 py-0.5 text-xs bg-third text-primary rounded-full">
                            30 Job Done
                        </button>
                    </div>
                    <ul className="text-base font-medium space-y-1 pt-8 pl-4">
                        <li className={`${active} hover:text-third text-gray-500 cursor-pointer py-0.5`}>Dashboard</li>
                        <li className={'hover:text-third text-gray-500 cursor-pointer py-0.5'}>Company</li>
                        <li className={'hover:text-third text-gray-500 cursor-pointer py-0.5'}>Payloads</li>
                        <li className={'hover:text-third text-gray-500 cursor-pointer py-0.5'}>Trailers</li>
                        <li className={'hover:text-third text-gray-500 cursor-pointer py-0.5'}>Drivers</li>
                        <li className={'hover:text-third text-gray-500 cursor-pointer py-0.5'}>Contact Us</li>
                        <li className={'hover:text-third text-gray-500 cursor-pointer py-0.5'}>About Us</li>
                    </ul>
                    <div className="fixed w-5/6 max-w-sm left-0 bottom-0 px-4 mb-4">
                        {
                            auth
                              ? <button onClick={() => setAuth(!auth)} className="w-full px-4 py-2 rounded-xl bg-third text-primary">
                                Logout
                            </button>
                              : <div className="flex space-x-2">
                                <button onClick={() => setAuth(!auth)} className="w-1/2 px-4 py-2 rounded-xl bg-primary text-thrid">
                                    Sign In
                                </button>
                                <button onClick={() => setAuth(!auth)} className="w-1/2 px-4 py-2 rounded-xl bg-third text-primary">
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
