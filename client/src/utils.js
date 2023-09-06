import { redirect } from "react-router-dom";

export async function requiredAuth(request) {
  const pathName = new URL(request.url).pathname;

  const isLoggedIn = localStorage.getItem("loggedin");
  if (!isLoggedIn) {
    throw redirect(
      `/auth/login?message=You must log in first.&redirectTo=${pathName}`
    );
  }
}
