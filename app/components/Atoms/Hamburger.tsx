import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
    HamburgerMenuIcon,
    DotFilledIcon,
    CheckIcon,
    ChevronRightIcon,
} from '@radix-ui/react-icons';
import { createStitches } from '@stitches/react';
import { WalletActions } from '../Molecules';
import { FundButton } from '.';


const Hamburger = () => {
  return (
    <div className="relative">
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button className="IconButton cursor-pointer rounded-full h-10 w-10 font-bold text-[#174cff] inline-flex items-center justify-center text-lg hover:bg-[#023ceb26] focus:shadow-[0_0_0_2px_rgba(23,76,255,.9)]" aria-label="Customise options" >
                    <HamburgerMenuIcon />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content className="absolute w-max right-2 border border-[#] rounded-lg py-6 px-4 bg-white shadow-lg flex flex-col items-center justify-center gap-4">
                    <div className="flex flex-col items-center justify-center gap-6 w-full">
                        <FundButton desc="+ Tranfer to Master Wallet" variant="blue" />
                        <FundButton desc="+ Fund Institutional Wallet" variant="white" />
                    </div>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    </div>
  )
}

export default Hamburger
