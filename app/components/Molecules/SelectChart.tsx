import React from 'react';
import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from '@radix-ui/react-icons';
import * as Separator from '@radix-ui/react-separator';
import SelectItem from './SelectItem';

const SelectChart = () => {
  return (
    <div className="flex justify-between items-center mx-5">
                <h3 className="font-semibold text-sm">
                    Distribution Wallet Balance
                </h3>
                <div className="text-sm flex justify-between items-center gap-2">
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
                                  <SelectItem value="pineapple">Last 24hours</SelectItem>
                                  <Select.Separator className="h-[1px] bg-[#e2e2e2] m-[5px]" />
                                  <SelectItem value="apple">Daily</SelectItem>
                                  <Select.Separator className="h-[1px] bg-[#e2e2e2] m-[5px]" />
                                  <SelectItem value="banana">Weekly</SelectItem>
                                  <Select.Separator className="h-[1px] bg-[#e2e2e2] m-[5px]" />
                                  <SelectItem value="blueberry">Monthly</SelectItem>
                                  <Select.Separator className="h-[1px] bg-[#e2e2e2] m-[5px]" />
                                  <SelectItem value="grapes">Yearly</SelectItem>
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
