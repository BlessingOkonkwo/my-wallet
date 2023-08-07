import React from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from '@radix-ui/react-icons';
import * as Separator from '@radix-ui/react-separator';
import SelectItem from './SelectItem';
import { useGlobalContext } from '../../context';

const SelectChart = () => {
    const { wallet } = useGlobalContext();
    console.log(wallet);
    
  return (
    <div className="flex flex-col sm:flex-row items-start justify-between sm:items-center mx-5 gap-2">
        {
            wallet === "MASTER" ? (
                <div className="text-sm flex flex-col sm:flex-row items-start sm:items-center gap-2">
                    <p className="font-semibold text-[15px]">Master Wallet Graph</p>
                    <Select.Root>
                        <div className="">
                        <Select.Trigger
                            className="inline-flex items-center justify-center rounded px-[15px] py-2 text-sm leading-none gap-[5px] bg-white text-[#8499b1] cursor-pointer shadow hover:bg-[#f8fafe] focus:shadow-[0_0_0_0.5px] focus:shadow-[#174cff] data-[placeholder]:text-violet9 outline-none"
                            aria-label="Time"
                        >
                            <Select.Value placeholder="Activities" />
                            <Select.Icon className="text-[#174cff]">
                                <ChevronDownIcon />
                            </Select.Icon>
                        </Select.Trigger>
                        <Select.Portal className="">
                            <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                              <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                                  <ChevronUpIcon />
                              </Select.ScrollUpButton>
                              <Select.Viewport className="p-[5px]">
                                  <SelectItem value="activities">All Activities</SelectItem>
                                  <Select.Separator className="h-[1px] bg-[#e2e2e2] m-[5px]" />
                                  <SelectItem value="supplied">Tokens Supplied</SelectItem>
                                  <Select.Separator className="h-[1px] bg-[#e2e2e2] m-[5px]" />
                                  <SelectItem value="issued">Tokens Issued</SelectItem>
                                  <Select.Separator className="h-[1px] bg-[#e2e2e2] m-[5px]" />
                                  <SelectItem value="burnt">Tokens Burnt</SelectItem>
                              </Select.Viewport>
                              <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                                  <ChevronDownIcon />
                              </Select.ScrollDownButton>
                            </Select.Content>
                        </Select.Portal>
                        </div>
                    </Select.Root>
                </div>
            ) : (
                <h3 className="font-semibold text-sm">
                    Distribution Wallet Balance
                </h3>
            )
        }
        <Separator.Root
            className="sm:hidden bg-[#174cff33] h-[0.5px] w-full mt-2 mb-[5px] shadow"
            decorative
            orientation="horizontal"
        />
        <div className={`text-sm ${wallet === 'DISTRIBUTION' ? 'sm:self-auto self-end' : ''} flex justify-between items-center gap-2`}>
            <p className="font-medium">Period:</p>
            <Select.Root>
                <div className="">
                <Select.Trigger
                    className="inline-flex items-center justify-center rounded px-[15px] py-2 text-sm leading-none gap-[5px] bg-white text-[#8499b1] cursor-pointer shadow hover:bg-[#f8fafe] focus:shadow-[0_0_0_0.5px] focus:shadow-[#174cff] data-[placeholder]:text-violet9 outline-none"
                    aria-label="Time"
                >
                    <Select.Value placeholder="Select" />
                    <Select.Icon className="text-[#174cff]">
                        <ChevronDownIcon />
                    </Select.Icon>
                </Select.Trigger>
                <Select.Portal className="">
                    <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
                        <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                            <ChevronUpIcon />
                        </Select.ScrollUpButton>
                        <Select.Viewport className="p-[5px]">
                            <SelectItem value="24">Last 24hours</SelectItem>
                            <Select.Separator className="h-[1px] bg-[#e2e2e2] m-[5px]" />
                            <SelectItem value="daily">Daily</SelectItem>
                            <Select.Separator className="h-[1px] bg-[#e2e2e2] m-[5px]" />
                            <SelectItem value="weekly">Weekly</SelectItem>
                            <Select.Separator className="h-[1px] bg-[#e2e2e2] m-[5px]" />
                            <SelectItem value="monthly">Monthly</SelectItem>
                            <Select.Separator className="h-[1px] bg-[#e2e2e2] m-[5px]" />
                            <SelectItem value="yearly">Yearly</SelectItem>
                        </Select.Viewport>
                        <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
                            <ChevronDownIcon />
                        </Select.ScrollDownButton>
                    </Select.Content>
                </Select.Portal>
                </div>
            </Select.Root>
        </div>
    </div>
  )
}


export default SelectChart
