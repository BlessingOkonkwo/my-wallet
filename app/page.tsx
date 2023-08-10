"use client";
import { Header, SubHeader, ChartComponent, PieSection, SideBar } from './components/Organisms';

export default function Home() {
  return ( 
    <div className="flex">
      <div className="bg-[#1e252d] w-[10%] sm:w-[8%] md:w-[6%] lg:w-[4%] ">
        <SideBar />
      </div>
      <main className="px-10 py-4 w-[90%] sm:w-[92%] md:w-[94%] lg:w-[96%]">
        <Header />
        <SubHeader />
        <ChartComponent />
        <PieSection />
     </main>
    </div>
    

  )
}
