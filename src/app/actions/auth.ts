"use server";

import axios from "axios";
import { redirect } from "next/navigation";
import { UserType } from "../_types/user";
import { deletesession, setSession } from "../_lib/session";

const API_URL = 'http://localhost:3001';

export const loginAction = async (formData: FormData) => {
    console.log(formData)
  try {
    const response = await axios.get(
      `${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`
    );
    console.log(formData)

    const user: UserType = response.data[0];

    if (!user) {
      throw new Error("Invalid email or password");
    }

    //session in cookies 
    await setSession({name:user.name , email:user.email, id:user.id});

    
  }catch (error) {
  throw new Error("failed to login");
}
redirect("/admin");
};

export const logoutAction = async()=>{
    await deletesession();
    redirect('/login');
}