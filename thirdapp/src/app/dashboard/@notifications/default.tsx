import Card from "@/components/Card"
import Link from "next/link"


const page = () => {
  return (
    <Card>
      Notification
      <Link  href="/dashboard/archived">Archived</Link>
    </Card>
  )
}

export default page
