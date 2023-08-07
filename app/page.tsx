"use client";
import { Header, SubHeader, ChartComponent, PieSection } from './components/Organisms';

export default function Home() {
  return ( 
    <main className="px-10 py-4">
      <Header />
      {/* <SubHeader /> */}
      <ChartComponent />
      <PieSection />
    </main>

  )
}
