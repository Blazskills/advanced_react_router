import { redirect } from "react-router-dom";

export async function requiredAuth(){
    const isLoggedIn = false;
    if(!isLoggedIn){
        throw redirect("/auth/login?message=You must log in first.");
    }
}