import { Outlet, Navigate } from "react-router-dom"

const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    // when we were going to sign-in or sign-up then it was showing the authlayout only
    // so what we do is to show root layout i.e. home page when authenticated and show outlet i.e. signin and singup page when not authenticated
    <>
      {isAuthenticated? (
        // navigate to home page
        <Navigate to="/"/>
      ):(
        // go to signup , signin form
        <>
          <section>
            <Outlet/>
          </section>
        </>
      )}
    </>

  )
}

export default AuthLayout

// authlayout will wrap the singin and singup form 