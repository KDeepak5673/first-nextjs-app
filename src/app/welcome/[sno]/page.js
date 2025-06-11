import { useRouter } from "next/navigation"
 
export default async function Page() {
  const router = useRouter()
  const { sno } = router.query
 
  return (
    <ul>
        <li>Welcome to my first app</li>
        <li>This is a simple React application to demonstrate basic concepts.</li>
        <li>Feel free to explore and modify the code!</li>
        <li>Current sno: {sno}</li>
      
    </ul>
  )
}