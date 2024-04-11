import Link from "next/link"
import React from "react"

const layout = ({children}:{children:React.ReactNode}) => {
    const navlinks :{name:string,href:string}[]= [
        {name:"Register",href:"/register"},
        {name:"Login",href:"/login"},
        {name:"Forgot Password",href:"/forgot-password"},
    ]
  return (
    <div>
      {
        navlinks.map((navlink)=>(
            <Link  href={navlink.href} key={navlink.name} />
        ))
      }
      {children}
    </div>

  )
}

export default layout
