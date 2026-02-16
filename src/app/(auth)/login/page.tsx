import LoginForm from "@/app/_components/LoginForm"
import Link from "next/link"

const page = () => {
  return (
    <div className="justify-items-center max-w-md mx-auto bg-amber-50 rounded-lg shadow-amber-100">
        <h1>Login</h1>
        <LoginForm/>
        <p className="mt-4 text-center">
            Don't have an account? <Link href="/register" className="text-blue-700 hover:underline">Register</Link>
        </p>
    </div>
  )
}

export default page
