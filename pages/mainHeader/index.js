import { useState, useReducer, useEffect, useRef } from "react";

import fire from "../../utils/firebase/firebase";
import {
  reducer,
  initialState,
} from "../../reducers/signupReducer/signupReducer";
import MainHeaderArt from "../../assets/MainHeaderArt";
export default function MainHeader() {
  //using useReduer to submit email to firebase firestore.
  const [state, dispatch] = useReducer(reducer, initialState);
  const { userEmail, isLoading, error, success } = state;

  const registerUser = async (event) => {
    event.preventDefault();
    dispatch({ type: "LOADING" });
    try {
      await fire
        .firestore()
        .collection("01marketingEmails")
        .add({
          userEmail,
        })
        .then(() => {
          dispatch({ type: "REGISTERING_USER" });
        });
    } catch (e) {
      let errorCode = e.code;
      let errMessage = e.message;
      console.log(e);
      if (errorCode === "auth/email-already-in-use") {
        dispatch({ type: "EMAIL_IN_USE" });
      } else if (errorCode === "auth/invalid-email") {
        dispatch({ type: "INVALID_EMAIL" });
      } else if (errorCode === "auth/operation-not-allowed") {
        dispatch({ type: "USER_DISABLED" });
      } else if (errorCode === "auth/operation-not-allowed") {
        dispatch({ type: "USER_NOT_FOUND" });
      } else if (errorCode === "auth/weak-password") {
        dispatch({ type: "WEAK_PASSWORD" });
      } else console.log(errMessage);
    }
  };

  return (
    <>
      <main className="lg:relative font 2xl:">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h3 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block text-pink-600 xl:inline">
                Happy Birthday!{" "}
              </span>
              <span className="block  text-pink-300 xl:inline">
                To You! To Me! To Everyone!
              </span>
            </h3>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Sign up today and I'll send you a digital birthday card!
            </p>

            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              {success ? (
                <h3 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  <span className="block xl:inline">Your Birthday Card</span>
                  <span className="block text-pink-600 xl:inline">
                    is on the way!
                  </span>
                </h3>
              ) : (
                <form
                  action="#"
                  method="POST"
                  className="mt-3 sm:flex "
                  onSubmit={registerUser}
                >
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Enter your email"
                    value={userEmail}
                    onChange={(e) => {
                      dispatch({
                        type: "FIELD",
                        name: "userEmail",
                        payload: e.target.value,
                      });
                    }}
                  />

                  <button
                    type="submit"
                    className="mt-3 w-full px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-500 shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto "
                  >
                    {isLoading ? "Signing You Up!" : "Happy Birthday To Me!"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="overflow-clip relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src="https://images.pexels.com/photos/2062883/pexels-photo-2062883.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        </div>
      </main>
      <div className="relative -mt-12 lg:-mt-24 ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#e7008a"
            fillOpacity="1"
            d="M0,96L48,101.3C96,107,192,117,288,101.3C384,85,480,43,576,21.3C672,0,768,0,864,10.7C960,21,1056,43,1152,90.7C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="transform rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#e7008a"
            fillOpacity="1"
            d="M0,96L48,101.3C96,107,192,117,288,101.3C384,85,480,43,576,21.3C672,0,768,0,864,10.7C960,21,1056,43,1152,90.7C1248,139,1344,213,1392,250.7L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}
