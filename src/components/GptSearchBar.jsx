import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import lang from "../utils/langConstants";
import { useSelector } from "react-redux";

const GptSearchBar = ({
  // placeholder = lang.en.GptSearchPlaceholder,
  onSearch = (query) => console.log("Searching for:", query),
}) => {
  const ChangeLanguage = useSelector((store) => store.language.language);
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query.trim());
  };

  const styles = {
    form: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "2rem 0",
    },
    inputContainer: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#141414", // Netflix dark background
      borderRadius: "9999px",
      padding: "0.5rem 1rem",
      boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
      transition: "box-shadow 0.2s",
      width: "100%",
      maxWidth: "640px",
    },
    input: {
      flex: 1,
      border: "none",
      outline: "none",
      fontSize: "1rem",
      backgroundColor: "transparent",
      color: "#e5e5e5", // light grey text
    },
    icon: {
      marginRight: "0.75rem",
      color: "#E50914", // Netflix red accent
    },
    button: {
      marginLeft: "0.75rem",
      backgroundColor: "#E50914", // Netflix red
      color: "#fff",
      border: "none",
      borderRadius: "9999px",
      padding: "0.5rem 1.25rem",
      fontSize: "0.9rem",
      fontWeight: "bold",
      cursor: "pointer",
      boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
      transition: "background-color 0.2s",
    },
  };

  return (
    <div className="pt-[10%]">
      <form onSubmit={handleSubmit} style={styles.form}>
        <div
          style={styles.inputContainer}
          onFocus={() =>
            (styles.inputContainer.boxShadow = "0 4px 8px rgba(0,0,0,0.7)")
          }
          onBlur={() =>
            (styles.inputContainer.boxShadow = "0 2px 4px rgba(0,0,0,0.5)")
          }
        >
          <AiOutlineSearch size={24} style={styles.icon} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang[ChangeLanguage].GptSearchPlaceholder}
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>
          {lang[ChangeLanguage].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
