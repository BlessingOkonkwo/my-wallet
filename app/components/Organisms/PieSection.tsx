import React, { useRef, useEffect } from 'react';
import { TbArrowsExchange, TbInfoCircle } from 'react-icons/tb';
import { IoMdArrowUp, IoMdArrowDown } from 'react-icons/io';
import * as Separator from '@radix-ui/react-separator';
import Chart from 'chart.js/auto';

const PieSection = () => {
    // const canvasEl = useRef(null);

    useEffect(() => {
        // @ts-ignore
        var ctx = document.getElementById('myPieChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Total", "Circulating"],
                datasets: [{
                    data: [20, 70],
                    borderColor: [
                        "#31B0C2",
                        "#9747FF",
                    ],
                    backgroundColor: [
                        "#31B0C2",
                        "#9747FF",
                    ],
                    borderWidth: 2,
                }]
            },
            options: {
                scales: {
                    x: {
                        display: false,
                    },
                    y: {
                        display: false,
                    },
                }
            },

        });
        return function cleanup() {
            myChart.destroy();
          };
    }, [])

  return (
    <div className="bg-white text-xs md:text-sm p-10 md:p-16">
        <div className="flex items-center gap-2">
            <button className="font-semibold flex items-center justify-between gap-2 text-[#174cff] border border-solid border-[#174cff] py-2 px-6 rounded hover:bg-[#f8fafe] cursor-pointer">
                <TbArrowsExchange className="text-[20px]" />  See All Recent Transactions
            </button>
            <div className="grow">
                <Separator.Root
                    className="bg-[#174cff33] h-[0.5px] w-full "
                    decorative
                    orientation="horizontal"
                />
            </div>
        </div>

        {/* PIE CHART */}
        <div className="grid grid-cols-12 mt-10">
            <div className="col-span-12 md:col-span-7 shadow relative border rounded-lg border-[#174cff10] flex flex-col lg:flex-row justify-between items-center gap-4 p-8">
                <TbInfoCircle className="text-[#8499b1] text-xl absolute right-2 top-2 cursor-pointer hover:shadow rounded-full" />

                <div className="h-">
                    <canvas id="myPieChart" />
                </div>

                <div>
                    <h5 className="text-base font-medium my-2">
                        Circulating Supply
                    </h5>
                    <h1 className="font-semibold text-4xl my-2">
                        &#8358;120B
                    </h1>
                    <div className="grow my-4">
                        <Separator.Root
                            className="bg-[#174cff33] h-[0.5px] w-full "
                            decorative
                            orientation="horizontal"
                        />
                    </div>
                    <div className="flex justify-between items-center gap-8">
                        <div className="flex items-center text-xs justify-between gap-2">
                            <div className="w-2 h-2 bg-[#9747FF]"></div>
                            <p className="text-[#8499b1] font-semibold">
                                TOTAL SUPPLY:
                                <span className="font-semibold text-[#1e252d]"> &#8358;140Tr</span>
                            </p>
                            
                        </div>
                        <div className="flex items-center text-xs justify-between gap-2">
                            <div className="w-2 h-2 bg-[#31B0C2]"></div>
                            <p className="text-[#8499b1] font-semibold">
                                CIRCULATING SUPPLY: 
                                <span className="font-semibold text-[#1e252d]"> &#8358;120b</span>
                            </p>
                            
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="hidden md:block col-span-2 h-[80%] self-center justify-self-center">
                <Separator.Root
                    className="bg-[#174cff10] w-px h-full "
                    decorative
                    orientation="vertical"
                />
            </div>
            <div className="md:hidden col-span-12 w-[80%] self-center justify-self-center">
                <Separator.Root
                    className="bg-[#174cff10] h-px w-full "
                    decorative
                    orientation="horizontal"
                />
            </div>
            <div className="col-span-12 md:col-span-3 flex flex-col sm:flex-row justify-betwee  sm:gap-10 md:gap-0 md:items-between md:flex-col md:justify-start text-xs md:text-sm font-semibold">
                <div className="flex flex-col justify-center items-start gap-2 my-6">
                    <div className="flex justify-center items-center gap-1 text-[#3fcc6a]">
                        <IoMdArrowUp className="text-[#3fcc6a] text-lg" />
                        <p>CREDITS:</p>
                    </div>
                    <p className="text-2xl">&#8358;200,000,000</p>
                    <button className="bg-[#f0f5fd] hover:shadow-md active:shadow-none cursor-pointer text-[#174cff] px-5 py-[5px] rounded">View all</button>
                </div>
                <div className="flex flex-col justify-center items-start gap-2 my-6">
                    <div className="flex justify-center items-center gap-1 text-[#ff5a5c]">
                        <IoMdArrowDown className="text-[#ff5a5c] text-lg" />
                        <p>DEBITS:</p>
                    </div>
                    <p className="text-2xl">&#8358;200,000,000</p>
                    <button className="bg-[#f0f5fd] hover:shadow-md active:shadow-none cursor-pointer text-[#174cff] px-5 py-[5px] rounded">View all</button>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default PieSection
