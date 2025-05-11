import React, { useState } from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [error, setError] = useState(null);

  const handleSignOut = async () => {
    try {
      setIsSigningOut(true);
      setError(null);
      await signOut(auth);
      dispatch(removeUser());
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
      setError("Failed to sign out. Please try again.");
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <div className="absolute top-0 left-0 right-0 p-4 z-50 flex justify-between items-center bg-gradient-to-b from-black to-transparent">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
        className="h-8 md:h-12 w-auto"
      />
      {user && (
        <div className="flex items-center gap-4">
          <span className="text-white hidden md:inline">{user.email}</span>
          <button
            onClick={handleSignOut}
            disabled={isSigningOut}
            className="bg-red-600 px-4 py-2 rounded text-white hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSigningOut ? "Signing Out..." : "Sign Out"}
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Header;
