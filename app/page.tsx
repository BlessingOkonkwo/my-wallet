"use client";
import { Header, SubHeader, ChartComponent, PieSection, SideBar } from './components/Organisms';

export default function Home() {
  return ( 
    <div className="flex">
      <div className="bg-[#1e252d]">
        <SideBar />
      </div>
      <main className="px-10 py-4 col-span-11">
        <Header />
        <SubHeader />
        <ChartComponent />
        <PieSection />
     </main>
    </div>
    

  )
}
