import Link from "next/link"
const page = () => {
  return (
    <div>
      Home Page
      <Link href="/login">Go to Login</Link>
    </div>
  )
}

export default page
