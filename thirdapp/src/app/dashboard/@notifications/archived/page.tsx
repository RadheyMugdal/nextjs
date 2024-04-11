import Card from "@/components/Card"
import Link from "next/link"


const page = () => {
  return (
    <Card>
      Archived Notification
      <Link  href="/dashboard">Default</Link>
    </Card>
  )
}

export default page
