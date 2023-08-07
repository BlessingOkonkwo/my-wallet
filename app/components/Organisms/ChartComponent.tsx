import React, { useEffect, useRef, useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import Chart from "chart.js/auto";
import * as Separator from '@radix-ui/react-separator';
import { SelectChart } from '../Molecules';
import { SubHeader } from '.';

const ChartComponent = () => {
    const canvasEl = useRef(null);
    const canvasEl2 = useRef(null);
    const canvasEl3 = useRef(null);
    const [tab, setTab] = useState('MASTER')

  useEffect(() => {
    const ctx = canvasEl.current?.getContext("2d");
    // const ctx = document.getElementById("myChart");

    const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];

    const labels = [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10"
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: '#174cff',
          label: "My First Dataset",
          data: weight
        }
      ]
    };
    const config = {
      type: "bar",
      data: data
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  useEffect(() => {
    const ctx = canvasEl2.current?.getContext("2d");
    // const ctx = document.getElementById("myChart");

    const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];

    const labels = [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10"
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: 'red',
          label: "My First Dataset",
          data: weight
        }
      ]
    };
    const config = {
      type: "bar",
      data: data
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });

  useEffect(() => {
    const ctx = canvasEl3.current?.getContext("2d");
    // const ctx = document.getElementById("myChart");

    const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];

    const labels = [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10"
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          backgroundColor: 'green',
          label: "My First Dataset",
          data: weight
        }
      ]
    };
    const config = {
      type: "bar",
      data: data
    };
    const myLineChart = new Chart(ctx, config);

    return function cleanup() {
      myLineChart.destroy();
    };
  });


  return (
    <div className="relative">
        <div className="shrink-0 flex flex-col sm:flex-row my-4 border-mauve6 gap-4 bg-white" aria-label="Manage your account">
            <div 
                onClick={() => setTab('MASTER')} 
                className={`shadow bg-[#f8fafe] border border-solid border-[#8499b114] px-5 py-2 sm:py-0 h-[45px] flex-1 flex items-center justify-center text-xs md:text-sm leading-none text-mauve11 select-none rounded text-center font-medium hover:text-[#174cff] hover:border-[#174cff] ${tab === "MASTER" ? 'text-[#174cff] border-[#174cff] focus:relative shadow-[0_0_0_0.5px] shadow-[#174cff]' : ''} outline-none cursor-pointer`}
            >
                Master Wallet
            </div>
            <div 
                onClick={() => setTab('DISTRIBUTION')} 
                className={`shadow bg-[#f8fafe] border border-solid border-[#8499b114] px-5 py-2 sm:py-0 h-[45px] flex-1 flex items-center justify-center text-xs md:text-sm leading-none text-mauve11 select-none rounded text-center font-medium hover:text-[#174cff] hover:border-[#174cff] ${tab === "DISTRIBUTION" ? 'text-[#174cff] border-[#174cff] BORDER-2 focus:relative shadow-[0_0_0_0.5px] shadow-[#174cff]' : ''} outline-none cursor-pointer`}
            >
                Distribution Wallet
            </div>
            <div 
                onClick={() => setTab('INSTITUTION')} 
                className={`shadow bg-[#f8fafe] border border-solid border-[#8499b114] px-5 py-2 sm:py-0 h-[45px] flex-1 flex items-center justify-center text-xs md:text-sm leading-none text-mauve11 select-none rounded text-center font-medium hover:text-[#174cff] hover:border-[#174cff] ${tab === "INSTITUTION" ? 'text-[#174cff] border-[#174cff] focus:relative shadow-[0_0_0_0.5px] shadow-[#174cff]' : ''} outline-none cursor-pointer`}
            >
                Institutional Wallet
            </div>
        </div>

        <div className="">
            <SubHeader />
        </div>

        <div 
            className="py-3 bg-[#f8fafe] rounded-md border border-[#174cff33] outline-none focus:shadow-[0_0_0_0.5px] focus:shadow-[#023ceb26]"
        >
            {
                tab === 'MASTER' &&
                <div className="mx-5">
                    <canvas id="myChart" ref={canvasEl} />
                </div>
            }
            {
                tab === 'DISTRIBUTION' &&
                <div className="mx-5">
                    <canvas id="myChart2" ref={canvasEl2} />
                </div>
            }
{
                tab === 'INSTITUTION' &&
                <div className="mx-5">
                    <canvas id="myChart3" ref={canvasEl3} />
                </div>
            }
        </div>
        
    {/* <Tabs.Root
        className="flex flex-col w-full bg-white p-10 md:p-16"
        defaultValue="tab1"
    >
        <Tabs.List className="shrink-0 flex flex-col sm:flex-row my-4 border-mauve6 gap-4 bg-white" aria-label="Manage your account">
            <Tabs.Trigger
                className="shadow bg-[#f8fafe] border border-solid border-[#8499b114] px-5 py-2 sm:py-0 h-[45px] flex-1 flex items-center justify-center text-xs md:text-sm leading-none text-mauve11 select-none rounded text-center font-medium hover:text-[#174cff] hover:border-[#174cff] data-[state=active]:text-[#174cff] data-[state=active]:border-[#174cff] data-[state=active]:focus:relative data-[state=active]:shadow-[0_0_0_0.5px] data-[state=active]:shadow-[#174cff] outline-none cursor-pointer"
                value="tab1"
            >
                Master Wallet
            </Tabs.Trigger>
            <Tabs.Trigger
                className="shadow bg-[#f8fafe] border border-solid border-[#8499b114] px-5 py-2 sm:py-0 h-[45px] flex-1 flex items-center justify-center text-xs md:text-sm leading-none text-mauve11 select-none rounded text-center font-medium hover:text-[#174cff] hover:border-[#174cff] data-[state=active]:text-[#174cff] data-[state=active]:border-[#174cff] data-[state=active]:focus:relative data-[state=active]:shadow-[0_0_0_0.5px] data-[state=active]:shadow-[#174cff] outline-none cursor-pointer"
                value="tab2"
            >
                Distribution Wallet
            </Tabs.Trigger>
            <Tabs.Trigger
                className="shadow bg-[#f8fafe] border border-solid border-[#8499b114] px-5 py-2 sm:py-0 h-[45px] flex-1 flex items-center justify-center text-xs md:text-sm leading-none text-mauve11 select-none rounded text-center font-medium hover:text-[#174cff] hover:border-[#174cff] data-[state=active]:text-[#174cff] data-[state=active]:border-[#174cff] data-[state=active]:focus:relative data-[state=active]:shadow-[0_0_0_0.5px] data-[state=active]:shadow-[#174cff] outline-none cursor-pointer"
                value="tab3"
            >
                Institutional Wallet
            </Tabs.Trigger>
        </Tabs.List>
        <div 
            className="py-3 bg-[#f8fafe] rounded-md border border-[#174cff33] outline-none focus:shadow-[0_0_0_0.5px] focus:shadow-[#023ceb26]"
        >
            <SelectChart />
            <Separator.Root
                className="bg-[#8499b140] h-[0.5px] w-full mt-2 mb-[5px] shadow"
                decorative
                orientation="horizontal"
            />
            <Tabs.Content
                className="outline-none"
                value="tab1"
            >
                <div className="mx-5">
                    <canvas id="myChart" ref={canvasEl} />
                </div>
            </Tabs.Content>
            <Tabs.Content
                className="outline-none"
                value="tab2"
            >
                <div className="mx-5">
                    <canvas id="myChart2" />
                </div>
            </Tabs.Content>
            <Tabs.Content
                className="outline-none"
                value="tab3"
            >
                <div className="mx-5">
                    <canvas id="myChart3" />
                </div>
            </Tabs.Content>
            <div className="text-xs flex items-center text-[#8899af] gap-2 mx-10 mt-2">
                <div className="w-4 h-2 bg-[#174cff]">
                </div>
                <p>
                    Balance
                </p>
            </div>
        </div>
        
    </Tabs.Root> */}
</div>
)
}

export default ChartComponent
