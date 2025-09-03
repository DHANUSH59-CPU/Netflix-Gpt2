import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser, addUser } from "../utils/userSlice";
import { FaBell, FaSearch, FaUser, FaSignOutAlt, FaPlay } from "react-icons/fa";
import { getAuth, onAuthStateChanged } from "firebase/auth";
// mport { useDispatch, useSelector } from "react-redux";
import { toggleGptSearchView } from "../utils/gptSlice";
// import AIIcon from "./Aicomp";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { ChangeLanguage } from "../utils/languageSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [error, setError] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignOut = async () => {
    try {
      setIsSigningOut(true);
      setError(null);
      await signOut(auth);
      dispatch(removeUser());
    } catch (error) {
      console.error("Error signing out:", error);
      setError("Failed to sign out. Please try again.");
    } finally {
      setIsSigningOut(false);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
        navigate("/body");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const handleGptSearchClick = () => {
    // Toggle GptSearchPage
    dispatch(toggleGptSearchView());
    // Navigate to the body page where GPT search is rendered
    navigate("/body");
  };

  const handleLanguageChange = (e) => {
    dispatch(ChangeLanguage(e.target.value));
  };

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black"
          : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center space-x-4 md:space-x-8">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            className="h-5 md:h-8 w-auto"
          />
        </div>

        {user && (
          <div className="flex items-center space-x-3 md:space-x-4">
            {/* GPT Search Button - Desktop */}
            <div className="relative group hidden md:block">
              <button
                className="text-white hover:bg-red-600 hover:scale-105 transform transition duration-300 ease-in-out rounded-full p-2 m-2 shadow-md"
                onClick={handleGptSearchClick}
              >
                <FaSearch className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              {/* GPT Search Tooltip */}
              <div className="absolute top-14 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {showGptSearch ? "Home Page" : "GPT Search"}
              </div>
            </div>

            {/* GPT Search Button - Mobile */}
            <div className="relative group md:hidden">
              <button
                className="text-white hover:bg-red-600"
                onClick={() => {
                  dispatch(toggleGptSearchView());
                  navigate("/body");
                }}
              >
                <FaSearch className="w-4 h-4" />
              </button>
              {/* GPT Search Tooltip for Mobile */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-black/90 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {showGptSearch ? "Home Page" : "GPT Search"}
              </div>
            </div>

            {/* The Language options */}

            {showGptSearch && (
              <div className="text-white bg-gradient-to-bl">
                <select
                  className="bg-gray-700 rounded-lg p-2 m-2 font-bold"
                  onChange={handleLanguageChange}
                >
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <option value={lang.identifier} key={lang.identifier}>
                      {lang.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <button className="text-white hover:text-gray-300 transition">
              <FaBell className="w-4 h-4 md:w-5 md:h-5" />
            </button>

            {/* Mobile Sign Out Button */}
            <button
              onClick={handleSignOut}
              disabled={isSigningOut}
              className="md:hidden bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded flex items-center space-x-2 transition"
            >
              <FaSignOutAlt className="w-4 h-4" />
              <span className="text-sm font-medium">Sign Out</span>
            </button>

            {/* Desktop Profile Menu */}
            <div className="relative hidden md:block">
              <button
                className="flex items-center space-x-2"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              >
                <div className="w-7 h-7 md:w-8 md:h-8 rounded bg-red-600 flex items-center justify-center">
                  <FaUser className="w-3 h-3 md:w-4 md:h-4" />
                </div>
                <span className="text-white text-sm lg:text-base">
                  {user.email}
                </span>
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black/90 rounded shadow-lg py-2">
                  <div className="px-4 py-2 text-white text-sm border-b border-gray-700">
                    {user.email}
                  </div>
                  <button
                    onClick={handleSignOut}
                    disabled={isSigningOut}
                    className="w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition text-sm flex items-center"
                  >
                    <FaSignOutAlt className="mr-2" />
                    {isSigningOut ? "Signing Out..." : "Sign Out"}
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Profile Button */}
            <button
              className="md:hidden flex items-center"
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              <div className="w-7 h-7 rounded bg-red-600 flex items-center justify-center">
                <FaUser className="w-3 h-3" />
              </div>
            </button>
          </div>
        )}
        {error && <p className="text-red-500 text-xs md:text-sm">{error}</p>}
      </div>

      {/* Mobile Profile Dropdown */}
      {isProfileOpen && (
        <div className="md:hidden fixed top-[60px] right-4 w-48 bg-black/90 rounded shadow-lg py-2 z-50">
          <div className="px-4 py-2 text-white text-sm border-b border-gray-700">
            {user?.email}
          </div>
          <button
            onClick={handleSignOut}
            disabled={isSigningOut}
            className="w-full text-left px-4 py-2 text-white hover:bg-gray-800 transition text-sm flex items-center"
          >
            <FaSignOutAlt className="mr-2" />
            {isSigningOut ? "Signing Out..." : "Sign Out"}
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
