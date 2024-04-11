"use client"
import { useState } from "react";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [input,setInput]=useState("")

  return (
    <div>
            <input value={input} onChange={(e)=>setInput(e.target.value)} className=" text-black"/>

      {children}
    </div>
  )
}
