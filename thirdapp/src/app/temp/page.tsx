"use client "
function getRandomInt(count:number){
    return Math.floor(Math.random()*count);
}
const page = () => {
    const random=getRandomInt(3)
    if(random===1){
        throw new Error("Error here")
    }
  return (
    <div>
      Error page
    </div>
  )
}

export default page

