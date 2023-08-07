import React from 'react';
import { ImStack } from 'react-icons/im';
import { RxDashboard } from 'react-icons/rx';
import { LuWallet } from 'react-icons/lu';
import { TbArrowsExchange } from 'react-icons/tb';
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2';
import { RiCurrencyLine } from 'react-icons/ri';
import Image from 'next/image';

const SideBar = () => {
  return (
    <div>
      
        <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" className="inline-flex items-center p-2 mt-6 ml-3 text-sm text-gray-500 rounded-lg sm:hi hover:bg-[#8499b114] focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
            <span className="sr-only">Open sidebar</span>
            <ImStack className="text-[#c0933e] text-2xl cursor-pointer"/>
        </button>

        <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w- h-screen transition-transform -translate-x-full ranslate-x-0" aria-label="Sidebar">
            <div className="h-full px-3 py-4 overflow-y-auto bg-[#1e252d]">
                {/* <Image
                    src="/app/assets/images/cbnlogo.jpg"
                    width={100}
                    height={100}
                    alt="CBN Logo"
                /> */}
                <ul className="space-y-2 font-medium bg-[#2e3844] text-[#8499b1] text-xs py-6 px-2">
                    <li>
                        <a href="#" className="flex items-center p-2 rounded-lg dark:text-white hover:text-[#c0933e] active:text-[#c0933e] focus:text-[#c0933e] group">
                        <RxDashboard className="text-xl" />
                        <span className="ml-3">Dashboard</span>
                        </a>
                    </li>
                    <li>
                    <a href="#" className="flex items-center p-2 rounded-lg dark:text-white hover:text-[#c0933e] active:text-[#c0933e] focus:text-[#c0933e] group">
                        <LuWallet className="text-xl" />
                        <span className="flex-1 ml-3 whitespace-nowrap">Wallet</span>
                        </a>
                    </li>
                    <li>
                    <a href="#" className="flex items-center p-2 rounded-lg dark:text-white hover:text-[#c0933e] active:text-[#c0933e] focus:text-[#c0933e] group">
                        <TbArrowsExchange className="text-xl" />
                        <span className="flex-1 ml-3 whitespace-nowrap">Transactions</span>
                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                        </a>
                    </li>
                    <li>
                    <a href="#" className="flex items-center p-2 rounded-lg dark:text-white hover:text-[#c0933e] active:text-[#c0933e] focus:text-[#c0933e] group">
                        <HiOutlineBars3CenterLeft className="text-xl" />
                        <span className="flex-1 ml-3 whitespace-nowrap">Requests</span>
                        </a>
                    </li>
                    <li>
                    <a href="#" className="flex items-center p-2 rounded-lg dark:text-white hover:text-[#c0933e] active:text-[#c0933e] focus:text-[#c0933e] group">
                        <RiCurrencyLine className="text-xl" />
                        <span className="flex-1 ml-3 whitespace-nowrap">Currencies</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
  )
}

export default SideBar
