import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="bg-white h-[calc(100vh-90px)] flex items-center justify-center">
      <Hero/>
      
    </div>
  )
}
