
import Link from "next/link"
import LogoutButton from "./LogoutButton";
import { getSession } from "../_lib/session";

const Navbar = async() => {
  const session =await getSession();
  return (
    <div className="bg-gray-600 text-gray-100 py-2 px-10">
        <nav className="flex justify-between">
            <h1><a href="/">GVKSS</a></h1>
            <div className="flex gap-10">
            <Link href="/">Home</Link>
            <div className="flex items-center space-x-4">
                {session ? ( 
                    <>
                    <Link href="/admin"> admin</Link>
                    <LogoutButton/> 
                    </>
                ):(
                    <>
                    <Link href="/login">Login</Link> 
                    <Link href="/register">Register</Link>
                    </>
                )}
            </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar