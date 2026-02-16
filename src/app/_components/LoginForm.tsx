"use client"

import { loginAction } from "../actions/auth"

const LoginForm = () => {
  
  return (
    <form action={loginAction} className="space-x-4">
      <div className="pt-5">
        <input type="email" name="email" placeholder="Email" required className="mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2"/>
        <input type="password" name="password" placeholder="password" required className="mt-1 block w-full border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm py-2" />
      </div>
      <div className="flex justify-center mt-6">
      <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300">
        Login
      </button>
      </div>
    </form>
  )
}

export default LoginForm