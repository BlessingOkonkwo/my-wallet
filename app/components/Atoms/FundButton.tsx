import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import * as RadioGroup from '@radix-ui/react-radio-group';
import Image from 'next/image';
import wallet from '../../assets/images/Wallets.png';

type Props = {
    desc: string;
    variant: string;
}

const FundButton: React.FC<Props> = (props) => {
  return (
    <div className="text-[14px] bg-[#f8fafe]">
        <Dialog.Root>
            <Dialog.Trigger asChild >
                <button className={`shadow-md ${props.variant === "blue" ? 'bg-[#174cff] text-white hover:bg-[#1542d6]' : 'bg-white text-[#174cff] hover:bg-[#f9f9f9]'} text-center px-6 py-2 rounded cursor-pointer font-medium border-[1.5px] border-solid border-[#174cff]`}>{props.desc}</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay bg-[#00000070] fixed inset-0" />
                <Dialog.Content className="DialogContent h-[75vh] overflow-y-auto bg-[#f8fafe] rounded-md fixed top-[50%] left-[50%] w-[90vw] max-w-[450px] md:max-w-none max-h-[85vh] focus:outline-none">
                    <div className="mx-6 mt-8">
                        <Dialog.Title className="DialogTitle m-0 font-semibold text-lg">Select an Institutional Wallet Type</Dialog.Title>
                        <Dialog.Description className="DialogDescription text-sm text-[#8499b1] ">
                            Pick the type of institutional wallet you are funding.
                        </Dialog.Description>
                    </div>
                    
                    <form className="m-6">
                        <RadioGroup.Root className="RadioGroupRoot flex md:gap-8 flex-col justify-center items-center md:flex-row" defaultValue="default" aria-label="View density">
                            <div style={{  }} className="relative my-6 md:my-0 border rounded-lg p-4 bg-white shadow">
                                <RadioGroup.Item className="RadioGroupItem cursor-pointer absolute right-2 top-2 bg-white w-4 h-4 rounded-full shadow-[0_2px_10px_#0000007a] hover:bg-[#023ceb26] focus:shadow-[0_0_0_2px_#023ceb50]" value="default" id="r1">
                                    <RadioGroup.Indicator className="RadioGroupIndicator flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-[50%] after:bg-[#174cff]" />
                                </RadioGroup.Item>
                                <label className="cursor-pointer text-center flex flex-col items-center justify-center" htmlFor="r1">
                                    <p className="my-2">
                                        <Image 
                                            src={wallet}
                                            alt="wallet"
                                        />
                                    </p>
                                    
                                    <h3 className="font-semibold text-xl my-2">Reserve Wallet</h3>
                                    <p className="text-[14px] my-4">
                                        The reserve wallet holds all major balances that 
                                        would be made available the FSP. It shows the FSP 
                                        major fund.
                                    </p>
                                </label>
                            </div>
                            <div style={{  }} className="relative my-6 md:my-0 border rounded-lg p-4 bg-white shadow">
                                <RadioGroup.Item className="RadioGroupItem cursor-pointer absolute right-2 top-2 bg-white w-4 h-4 rounded-full shadow-[0_2px_10px_#0000007a] hover:bg-[#023ceb26] focus:shadow-[0_0_0_2px_#023ceb50]" value="" id="r2">
                                    <RadioGroup.Indicator className="RadioGroupIndicator flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-[50%] after:bg-[#174cff]" />
                                </RadioGroup.Item>
                                <label className="cursor-pointer text-center flex flex-col items-center justify-center" htmlFor="r2">
                                    <p className="my-2">
                                        <Image 
                                            src={wallet}
                                            alt="wallet"
                                        />
                                    </p>
                                    
                                    <h3 className="font-semibold text-xl my-2">Wholesale Wallet</h3>
                                    <p className="text-[14px] my-4">
                                        The wholesale wallet holds balances that FSPs use to 
                                        conduct transactions with other FSPs. This is their 
                                        wholesale wallet.
                                    </p>
                                </label>
                            </div>
                            <div style={{  }} className="relative my-6 md:my-0 border rounded-lg p-4 bg-white shadow">
                                <RadioGroup.Item className="RadioGroupItem cursor-pointer absolute right-2 top-2 bg-white w-4 h-4 rounded-full shadow-[0_2px_10px_#0000007a] hover:bg-[#023ceb26] focus:shadow-[0_0_0_2px_#023ceb50]" value="compact" id="r3">
                                    <RadioGroup.Indicator className="RadioGroupIndicator flex items-center justify-center w-full h-full relative after:content-[''] after:block after:w-2 after:h-2 after:rounded-[50%] after:bg-[#174cff]" />
                                </RadioGroup.Item>
                                <label className="cursor-pointer text-center flex flex-col items-center justify-center" htmlFor="r3">
                                    <p className="my-2">
                                        <Image 
                                            src={wallet}
                                            alt="wallet"
                                        />
                                    </p>
                                    
                                    <h3 className="font-semibold text-xl my-2">Retail Wallet</h3>
                                    <p className="text-[14px] my-4">
                                        The retail wallet holds balances FSPs would use to 
                                        conduct transactions with end-users on their platforms.
                                            hiugb njhhuhj
                                    </p>
                                </label>
                            </div>
                        </RadioGroup.Root>
                    </form>
                    <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-start' }} className="bg-white py-6 px-10">
                        <Dialog.Close asChild>
                            <button className="Button green inline-flex items-center justify-center hover:bg-[#023ceb26] shadow-md border border-solid cursor-pointer border-[#2376fa33] text-[#2376fa] rounded-md px-6 py-2 bg-[#e8edff] font-medium h-9">Send Funds</button>
                        </Dialog.Close>
                    </div>
                    <Dialog.Close asChild>
                        <button className="IconButton h-7 w-7 rounded-full inline-flex items-center justify-center text-[#1e252d] absolute top-3 right-3 font-bold cursor-pointer hover:bg-[#023ceb26] bg-[#2376fa33] shadow-sm" aria-label="Close">
                            <Cross2Icon />
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    </div>
    
  )
}

export default FundButton
