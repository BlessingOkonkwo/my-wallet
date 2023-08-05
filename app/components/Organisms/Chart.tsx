import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';

const Chart = () => {
  return (
    <div>
        <Tabs.Root
            className="flex flex-col w-full bg-white"
            defaultValue="tab1"
        >
            <Tabs.List className="shrink-0 flex my-4 border-mauve6 gap-4 bg-white" aria-label="Manage your account">
                <Tabs.Trigger
                    className="bg-[#f8fafe] border border-solid border-[#f9f9f9] px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded font-medium hover:text-[#174cff] hover:border-[#174cff] data-[state=active]:text-[#174cff] data-[state=active]:border-[#174cff] data-[state=active]:focus:relative data-[state=active]:shadow-[0_0_0_0.5px] data-[state=active]:shadow-[#174cff] outline-none cursor-pointer"
                    value="tab1"
                >
                    Master Wallet
                </Tabs.Trigger>
                <Tabs.Trigger
                    className="bg-[#f8fafe] border border-solid border-[#f9f9f9] px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded font-medium hover:text-[#174cff] hover:border-[#174cff] data-[state=active]:text-[#174cff] data-[state=active]:border-[#174cff] data-[state=active]:focus:relative data-[state=active]:shadow-[0_0_0_0.5px] data-[state=active]:shadow-[#174cff] outline-none cursor-pointer"
                    value="tab2"
                >
                    Distribution Wallet
                </Tabs.Trigger>
                <Tabs.Trigger
                    className="bg-[#f8fafe] border border-solid border-[#f9f9f9] px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none rounded font-medium hover:text-[#174cff] hover:border-[#174cff] data-[state=active]:text-[#174cff] data-[state=active]:border-[#174cff] data-[state=active]:focus:relative data-[state=active]:shadow-[0_0_0_0.5px] data-[state=active]:shadow-[#174cff] outline-none cursor-pointer"
                    value="tab3"
                >
                    Institutional Wallet
                </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content
                className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_0.5px] focus:shadow-[#023ceb26]"
                value="tab1"
            >
                <p className="mb-5 text-mauve11 text-[15px] leading-normal">
                    Make changes to your account here. Click save when you&apos;re done.
                </p>
                <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                    <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
                    Name
                    </label>
                    <input
                    className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                    id="name"
                    defaultValue="Pedro Duarte"
                    />
                </fieldset>
                <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                    <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="username">
                    Username
                    </label>
                    <input
                    className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                    id="username"
                    defaultValue="@peduarte"
                    />
                </fieldset>
                <div className="flex justify-end mt-5">
                    <button className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
                    Save changes
                    </button>
                </div>
            </Tabs.Content>
            <Tabs.Content
                className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_1px] focus:shadow-[#023ceb26]"
            value="tab2"
            >
                <p className="mb-5 text-mauve11 text-[15px] leading-normal">
                    Change your password here. After saving, you&apos;ll be logged out.
                </p>
                <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                    <label
                    className="text-[13px] leading-none mb-2.5 text-violet12 block"
                    htmlFor="currentPassword"
                    >
                    Current password
                    </label>
                    <input
                    className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                    id="currentPassword"
                    type="password"
                    />
                </fieldset>
                <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                    <label
                    className="text-[13px] leading-none mb-2.5 text-violet12 block"
                    htmlFor="newPassword"
                    >
                    New password
                    </label>
                    <input
                    className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                    id="newPassword"
                    type="password"
                    />
                </fieldset>
                <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                    <label
                    className="text-[13px] leading-none mb-2.5 text-violet12 block"
                    htmlFor="confirmPassword"
                    >
                    Confirm password
                    </label>
                    <input
                    className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                    id="confirmPassword"
                    type="password"
                    />
                </fieldset>
                <div className="flex justify-end mt-5">
                    <button className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
                    Change password
                    </button>
                </div>
            </Tabs.Content>
            <Tabs.Content
                className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_0.5px] focus:shadow-[#023ceb26]"
            value="tab3"
            >
                <p className="mb-5 text-mauve11 text-[15px] leading-normal">
                    Change your password here. After saving, you&apos;ll be logged out.
                </p>
                <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                    <label
                    className="text-[13px] leading-none mb-2.5 text-violet12 block"
                    htmlFor="currentPassword"
                    >
                    Current password
                    </label>
                    <input
                    className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                    id="currentPassword"
                    type="password"
                    />
                </fieldset>
                <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                    <label
                    className="text-[13px] leading-none mb-2.5 text-violet12 block"
                    htmlFor="newPassword"
                    >
                    New password
                    </label>
                    <input
                    className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                    id="newPassword"
                    type="password"
                    />
                </fieldset>
                <fieldset className="mb-[15px] w-full flex flex-col justify-start">
                    <label
                    className="text-[13px] leading-none mb-2.5 text-violet12 block"
                    htmlFor="confirmPassword"
                    >
                    Confirm password
                    </label>
                    <input
                    className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
                    id="confirmPassword"
                    type="password"
                    />
                </fieldset>
                <div className="flex justify-end mt-5">
                    <button className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
                    Change password
                    </button>
                </div>
            </Tabs.Content>
        </Tabs.Root>
    </div>
  )
}

export default Chart
