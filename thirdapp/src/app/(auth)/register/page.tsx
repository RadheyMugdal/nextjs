"use client"
// import { useRouter } from "next/router";
const page = () => {
    // const router =useRouter();
  function handleClick(){
    // router.replace("/")
  }
  return (
    <div>
      Register
      <button className=" p-3 bg-blue-700 text-white rounded-lg" onClick={()=>handleClick()}>
        Register 
      </button>
    </div>
  )
}

export default page
