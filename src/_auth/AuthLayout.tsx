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
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet/>
          </section>

          <img 
            src="/assets/images/side-img.svg"
            alt="logo" 
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>

  )
}

export default AuthLayout

// authlayout will wrap the singin and singup form 