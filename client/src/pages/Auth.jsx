import React, { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import MyContext from "../context";

const Auth = () => {
  const { globalState, setGlobalState } = useContext(MyContext)
  const navigator = useNavigate()

  const login = () => {
    setGlobalState({
      ...globalState,
      authentication: true
    })
    localStorage.setItem('authentication', true)
    navigator('/')
  }

  return (
    <>
      <Navbar />
      <div className="p-4 h-[50rem] flex items-center justify-center">
        {/* BOX */}
        <div className=" h-full shadow-2xl rounded-2xl flex flex-col md:flex-row md:h-[70%] md:w-full lg:w-[60%] 2xl:w-1/2">
          {/* IMAGE CONTAINER */}
          <div className="relative h-1/3 w-full md:h-full md:w-1/2">
            <img src="/about-us.jpg" alt="" className="w-full h-full object-cover rounded-l-2xl" />
          </div>

          {/* FORM CONTAINER */}
          <div className="p-10 flex flex-col gap-4 md:w-1/2">
            <h1 className="font-bold text-xl xl:text-3xl">Welcome</h1>
            <p>Log into your account or create a new one using social buttons</p>
            <div className="flex flex-col gap-4">
              <input placeholder="Phone Number" className="ring-1 ring-primary-color rounded-2xl p-4" />
              <input type="password" maxLength={9} placeholder="Password" className="ring-1 ring-primary-color rounded-2xl p-4" />
              <button onClick={login} className="p-4 bg-primary-color text-secondary-color rounded-2xl">Sign In</button>
            </div>

            <p className="text-center">Or</p>

            <div className="flex gap-4">
              <button className="flex-1 flex items-center gap-4 p-4 ring-1 ring-primary-color rounded-2xl">
                <img
                  src="/google.png"
                  alt=""
                  className="object-contain h-5 w-5"
                />
                <span>Google</span>
              </button>
              <button className="flex-1 flex items-center gap-4 p-4 ring-1 ring-primary-color rounded-2xl">
                <img
                  src="/facebook.png"
                  alt=""
                  className="object-contain h-5 w-5"
                />
                <span>Facebook</span>
              </button>
            </div>

            <p className="text-sm">
              Have a problem?<Link className="underline" to="/"> Contact us</Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Auth
