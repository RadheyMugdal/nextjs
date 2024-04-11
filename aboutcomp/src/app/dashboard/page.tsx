"use client"

import { useState } from 'react';

const page = () => {
    console.log("Dashboard in client");
    
    const [name,setName]=useState("")
  return (
    <div className=' flex flex-col justify-center  items-center p-8 '>
      <h1 className=' text-4xl m-4'>Dashboard page</h1>
      <input type="text" onChange={(e)=>setName(e.target.value)}  className=' text-lg p-3 text-black' placeholder='Enter name'/>
      <p>Hello,{name}</p>
    </div>
  )
}

export default page
