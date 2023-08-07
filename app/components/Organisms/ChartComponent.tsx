import React, { useEffect, useRef, useState } from 'react';
import Chart from "chart.js/auto";
import * as Separator from '@radix-ui/react-separator';
import { SelectChart } from '../Molecules';
import { useGlobalContext } from '../../context';
import { MdKeyboardArrowRight } from 'react-icons/md';


const ChartComponent = () => {
    const canvasEl = useRef(null);
    const canvasEl2 = useRef(null);
    const canvasEl3 = useRef(null);
    const [tab, setTab] = useState('MASTER');

    const { wallet, id, setId, setWallet } = useGlobalContext();
    
    const setMaster = () => {
        setWallet("MASTER");
        setId("0.03065441");
        setTab("MASTER");
    }
    const setDist = () => {
        setWallet("DISTRIBUTION");
        setId("0.04690590");
        setTab("DISTRIBUTION");
    }
    const setInst = () => {
        setWallet("INSTITUTION");
        setId("0.05701480");
        setTab("INSTITUTION");
    }

  useEffect(() => {
    // @ts-ignore
    const ctx = canvasEl.current?.getContext("2d");

    const amount = [50, 20, 150, 227, 532, 345, 96, 75, 43, 34, 180, 150, 223, 421, 56];

    const labels = [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00"
    ];
    const data = {
      labels: labels,
      datasets: [
        {
        //   backgroundColor: 'red',
          label: "Wallet Balance",
          data: amount
        }
      ]
    };
    const config = {
        type: "line",
        data: data,
        fill: true,
        borderWidth: 2,
        borderColor: 'blue',
        lineTension: 0.2,
        pointBackgroundColor: '',
        pointRadius: 3
    };
    // @ts-ignore
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  useEffect(() => {
    // @ts-ignore
    const ctx = canvasEl2.current?.getContext("2d");

    const amount = [50, 20, 150, 227, 532, 345, 96, 75, 43, 34, 180, 150, 223, 421, 56];

    const labels = [
      "00:00",
      "01:00",
      "02:00",
      "03:00",
      "04:00",
      "05:00",
      "06:00",
      "07:00",
      "08:00",
      "09:00",
      "10:00",
      "11:00",
      "12:00"
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: '#174cff',
          label: "Distribution Balance",
          data: amount
        }
      ]
    };
    const config = {
      type: "bar",
      data: data
    };
    // @ts-ignore
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });


  return (
    <div className="relative flex flex-col w-full bg-white p-10 md:p-16">
        <div className="shrink-0 flex flex-col sm:flex-row my-4 border-mauve6 gap-4 bg-white" aria-label="Manage your account">
            <div 
                onClick={setMaster} 
                className={`shadow bg-[#f8fafe] border border-solid border-[#8499b114] px-5 py-2 sm:py-0 h-[45px] flex-1 flex items-center justify-center text-xs md:text-sm leading-none text-mauve11 select-none rounded text-center font-medium hover:text-[#174cff] hover:border-[#174cff] ${tab === "MASTER" ? 'text-[#174cff] border-[#174cff] focus:relative shadow-[0_0_0_0.5px] shadow-[#174cff]' : ''} outline-none cursor-pointer`}
            >
                Master Wallet
            </div>
            <div 
                onClick={setDist} 
                className={`shadow bg-[#f8fafe] border border-solid border-[#8499b114] px-5 py-2 sm:py-0 h-[45px] flex-1 flex items-center justify-center text-xs md:text-sm leading-none text-mauve11 select-none rounded text-center font-medium hover:text-[#174cff] hover:border-[#174cff] ${tab === "DISTRIBUTION" ? 'text-[#174cff] border-[#174cff] BORDER-2 focus:relative shadow-[0_0_0_0.5px] shadow-[#174cff]' : ''} outline-none cursor-pointer`}
            >
                Distribution Wallet
            </div>
            <div 
                onClick={setInst} 
                className={`shadow bg-[#f8fafe] border border-solid border-[#8499b114] px-5 py-2 sm:py-0 h-[45px] flex-1 flex items-center justify-center text-xs md:text-sm leading-none text-mauve11 select-none rounded text-center font-medium hover:text-[#174cff] hover:border-[#174cff] ${tab === "INSTITUTION" ? 'text-[#174cff] border-[#174cff] focus:relative shadow-[0_0_0_0.5px] shadow-[#174cff]' : ''} outline-none cursor-pointer`}
            >
                Institutional Wallet
            </div>
        </div>

        <div 
            className={`py-3 ${tab === 'INSTITUTION' ? 'bg-white' : 'bg-[#f8fafe]'}  rounded-md border border-[#174cff33] outline-none focus:shadow-[0_0_0_0.5px] focus:shadow-[#023ceb26]`}
        >
            {
                tab === 'MASTER' &&
                <div className="mx-5">
                    <SelectChart />
                    <Separator.Root
                        className="bg-[#8499b140] h-[0.5px] w-full mt-2 mb-[5px] shadow"
                        decorative
                        orientation="horizontal"
                    />
                    <canvas id="myChart" ref={canvasEl} />
                    <div className="text-xs flex items-center text-[#8899af] gap-2 mx-10 mt-2">
                        <div className="w-4 h-2 bg-[#174cff]">
                        </div>
                        <p>
                            Balance
                        </p>
                    </div>
                </div>
            }
            {
                tab === 'DISTRIBUTION' &&
                <div className="mx-5">
                    <SelectChart />
                    <Separator.Root
                        className="bg-[#8499b140] h-[0.5px] w-full mt-2 mb-[5px] shadow"
                        decorative
                        orientation="horizontal"
                    />
                    <canvas id="myChart2" ref={canvasEl2} />
                    <div className="text-xs flex items-center text-[#8899af] gap-2 mx-10 mt-2">
                        <div className="w-4 h-2 bg-[#174cff]">
                        </div>
                        <p>
                            Balance
                        </p>
                    </div>
                </div>
            }
            {
                tab === 'INSTITUTION' &&
                <div className="mx-5">
                    <div className="relative overflow-x-auto">
                        <table className="text-xs bg-white w-full text-left border-separate border-spacing-y-2">
                            <thead className="bg-[#f8faff] font-semibold text-xs">
                                <tr>
                                    <th className="p-4 whitespace-nowrap">Wallet ID</th>
                                    <th className="p-4 whitespace-nowrap">Institution&apos;s Name</th>
                                    <th className="p-4 whitespace-nowrap">Balance</th>
                                    <th className="p-4 whitespace-nowrap">Wallet Type</th>
                                    <th className="p-4 whitespace-nowrap">Number of End User Wallet</th>
                                    <th className="p-4 whitespace-nowrap">Status</th>
                                    <th className="p-4 whitespace-nowrap"></th>
                                    
                                </tr>
                            </thead>
                            <tbody className="text-[#8499b1] text-center">
                                <tr className="hover:bg-[#f8fafe]">
                                    <td className="px-4 py-2 m-4">0.0.3065441</td>
                                    <td className="px-4 py-2 m-4">GoshyRex</td>
                                    <td className="px-4 py-2 m-4">120,000.00</td>
                                    <td className="px-4 py-2 m-4">None</td>
                                    <td className="px-4 py-2 m-4">102</td>
                                    <td className="px-4 py-2 m-4 outline outline-1 rounded-full text-[#3fcc6a] bg-[#3fcc6a14] font-medium">Active</td>
                                    <td className="p-2 m-4 text-lg cursor-pointer hover:bg-[#8499b114] active:bg-white rounded-full"><MdKeyboardArrowRight /></td>
                                </tr>
                                <tr className="hover:bg-[#f8fafe]">
                                    <td className="px-4 py-2 m-4">0.0.3065441</td>
                                    <td className="px-4 py-2 m-4">GoshyRex</td>
                                    <td className="px-4 py-2 m-4">120,000.00</td>
                                    <td className="px-4 py-2 m-4">None</td>
                                    <td className="px-4 py-2 m-4">102</td>
                                    <td className="px-4 py-2 m-4 outline outline-1 rounded-full text-[#3fcc6a] bg-[#3fcc6a14] font-medium">Active</td>
                                    <td className="p-2 m-4 text-lg cursor-pointer hover:bg-[#8499b114] active:bg-white rounded-full"><MdKeyboardArrowRight /></td>
                                </tr>
                                <tr className="hover:bg-[#f8fafe]">
                                    <td className="px-4 py-2 m-4">0.0.3065441</td>
                                    <td className="px-4 py-2 m-4">GoshyRex</td>
                                    <td className="px-4 py-2 m-4">120,000.00</td>
                                    <td className="px-4 py-2 m-4">None</td>
                                    <td className="px-4 py-2 m-4">102</td>
                                    <td className="px-4 py-2 m-4 outline outline-1 rounded-full text-[#3fcc6a] bg-[#3fcc6a14] font-medium">Active</td>
                                    <td className="p-2 m-4 text-lg cursor-pointer hover:bg-[#8499b114] active:bg-white rounded-full"><MdKeyboardArrowRight /></td>
                                </tr>
                                <tr className="hover:bg-[#f8fafe]">
                                    <td className="px-4 py-2 m-4">0.0.3065441</td>
                                    <td className="px-4 py-2 m-4">GoshyRex</td>
                                    <td className="px-4 py-2 m-4">120,000.00</td>
                                    <td className="px-4 py-2 m-4">None</td>
                                    <td className="px-4 py-2 m-4">102</td>
                                    <td className="px-4 py-2 m-4 outline outline-1 rounded-full text-[#3fcc6a] bg-[#3fcc6a14] font-medium">Active</td>
                                    <td className="p-2 m-4 text-lg cursor-pointer hover:bg-[#8499b114] active:bg-white rounded-full"><MdKeyboardArrowRight /></td>
                                </tr>
                                <tr className="hover:bg-[#f8fafe]">
                                    <td className="px-4 py-2 m-4">0.0.3065441</td>
                                    <td className="px-4 py-2 m-4">GoshyRex</td>
                                    <td className="px-4 py-2 m-4">120,000.00</td>
                                    <td className="px-4 py-2 m-4">None</td>
                                    <td className="px-4 py-2 m-4">102</td>
                                    <td className="px-4 py-2 m-4 outline outline-1 rounded-full text-[#3fcc6a] bg-[#3fcc6a14] font-medium">Active</td>
                                    <td className="p-2 m-4 text-lg cursor-pointer hover:bg-[#8499b114] active:bg-white rounded-full"><MdKeyboardArrowRight /></td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                    
                    <div className="flex justify-between items-center text-xs font-medium my-4">
                        <button className="rounded-md bg-[#174cff] px-8 py-2 text-white">
                            Next
                        </button>
                        <div>
                            Page 1 <span className="text-[#8499b1]"> of 15</span>
                        </div>
                    </div>
                </div>
            }
        </div>
</div>
)
}

export default ChartComponent
