import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="relative h-screen text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fa7be975-efc3-48c6-8188-f07fdd1aa476/web/IN-en-20250428-TRIFECTA-perspective_e045264e-b4d4-4a6f-b2cc-f95e3344a332_large.jpg"
          alt="Netflix background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0"></div>
      </div>

      {/* Header positioned above background */}
      <Header />

      {/* Login form container */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <form className="bg-black opacity-90 p-12 rounded-md w-full max-w-md">
          <h1 className="text-3xl font-bold mb-6">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          <div className="flex flex-col space-y-4">
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Enter your name"
                className="p-3 rounded bg-gray-700"
                required
              />
            )}

            <input
              type="email"
              placeholder="Email address"
              className="p-3 rounded bg-gray-700"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="p-3 rounded bg-gray-700"
              required
            />
            <button
              type="submit"
              className="bg-red-600 py-3 rounded font-semibold hover:bg-red-700 transition"
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
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



// Step 3 : How to handle Form Validation
