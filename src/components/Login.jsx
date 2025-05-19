import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    seterrorMessage(null);
  };

  const handleButtonClick = async () => {
    try {
      setIsLoading(true);
      seterrorMessage(null);

      // validation of form data
      const message = checkValidData(
        email.current.value,
        password.current.value,
        !isSignInForm ? name.current?.value : ""
      );

      if (message) {
        seterrorMessage(message);
        return;
      }

      if (!isSignInForm) {
        // Sign Up Logic
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;

        await user.updateProfile({
          displayName: name.current.value,
        });

        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: name.current.value,
          })
        );
      } else {
        // SignIn Logic
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        );
        const user = userCredential.user;

        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
      }

      // Navigate after successful sign in or sign up
      // navigate("/body");
    } catch (error) {
      seterrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative h-screen text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={LOGO}
          alt="Netflix background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
      </div>

      {/* Header positioned above background */}
      <Header />

      {/* Login form container */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <form
          className="bg-black opacity-90 p-12 rounded-md w-full max-w-md"
          onSubmit={(e) => {
            e.preventDefault();
            handleButtonClick();
          }}
        >
          <h1 className="text-3xl font-bold mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          <div className="flex flex-col space-y-4">
            {!isSignInForm && (
              <input
                ref={name}
                type="text"
                placeholder="Enter your name"
                className="p-3 rounded bg-gray-700"
                required
              />
            )}

            <input
              ref={email}
              type="email"
              placeholder="Email address"
              className="p-3 rounded bg-gray-700"
              required
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-3 rounded bg-gray-700"
              required
            />
            <p className="text-red-500 p-2">{errorMessage}</p>
            <button
              type="submit"
              className="bg-red-600 py-3 rounded font-semibold hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </div>

          <div className="flex items-center justify-between mt-4 text-sm text-gray-400">
            <label className="flex items-center">
              <input type="checkbox" className="mr-1" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>

          <div className="mt-12 text-gray-500">
            <p>
              <a
                href="#"
                className="text-white hover:underline"
                onClick={toggleSignInForm}
              >
                {isSignInForm
                  ? "New to Netflix? sign UP "
                  : "Already a member Sign In"}
              </a>
            </p>
            <p className="text-xs mt-4">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// problems faced in this part
// when i put background image my form went downside so i brought it up by absolute and relative
// importing header
// Convert signIn form to Signup form by toggleSigninForm
//  {isSignInForm ? "Sign In" : "Sign Up"} keep in mind

// Step 3 : How to handle Form Validation (Regex for form validation)
// checkValidData funtion is used to check the data
// we need email and password to pass down to function right there is where useRef comes Into picture
// useRef points to the reference of the box (Do research on this state variable)
// if you have button inside the form and if you click on it will try to submit the form so use e.preventDefault
