import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { BsThreeDots } from 'react-icons/bs';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from '@radix-ui/react-icons';
import SelectItem from './SelectItem';

const SelectOverview = () => {
  return (
    <div className="flex items-center justify-center gap-2">
      <CiSearch className="text-3xl rounded-full font-semibold cursor-pointer hover:bg-[#8499b114] p-1" />
      <Select.Root>
            <div className="">
            <Select.Trigger
                className="border-[1.5px] border-solid border-[#8499b1] inline-flex items-center justify-center rounded px-[20px] py-2 text-sm leading-none gap-[5px] bg-white text-[#8499b1] cursor-pointer shadow hover:bg-[#f8fafe] focus:shadow-[0_0_0_0.5px] focus:shadow-[#174cff] data-[placeholder]:text-violet9 outline-none"
                aria-label="Time"
            >
                <Select.Value placeholder="" />
                <Select.Icon className="text-[#8499b1] flex items-center justify-center text-lg">
                    <BsThreeDots className="font-semibold text-[15px] " />
                    {/* <ChevronDownIcon /> */}
                </Select.Icon>
            </Select.Trigger>
            <Select.Portal className="">
                <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                    <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                        <ChevronUpIcon />
                    </Select.ScrollUpButton>
                    <Select.Viewport className="p-[5px]">
                        <SelectItem value="overview">Overview</SelectItem>
                        <Select.Separator className="h-[1px] bg-[#e2e2e2] m-[5px]" />
                        <SelectItem value="reserve">Reserve Wallet</SelectItem>
                        <Select.Separator className="h-[1px] bg-[#e2e2e2] m-[5px]" />
                        <SelectItem value="wholesale">Wholesale Wallet</SelectItem>
                        <Select.Separator className="h-[1px] bg-[#e2e2e2] m-[5px]" />
                        <SelectItem value="retail">Retail Wallet</SelectItem>
                    </Select.Viewport>
                    <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                        <ChevronDownIcon />
                    </Select.ScrollDownButton>
                </Select.Content>
            </Select.Portal>
            </div>
        </Select.Root>
    </div>
  )
}

export default SelectOverview
