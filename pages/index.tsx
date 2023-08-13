import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Dashboard from "./Dashboard";

export default function Home() {
  return (
    <div className=" flex ">
    <Sidebar/>
    <div className="flex-col">
      <Navbar/>
         <Dashboard/>
         
    </div>
  </div>
  )
}
