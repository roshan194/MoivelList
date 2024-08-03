import { useState, useRef, useEffect } from "react";
import "./index.css"; // Create a CSS file for styling
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { Text } from "@chakra-ui/react";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [recentSearches, setRecentSearches] = useState([
    "React",
    "JavaScript",
    "CSS",
    "HTML",
    "Node.js",
  ]);

  const searchRef = useRef(null);

  const handleSearchClick = () => {
    setIsOpen(true);
  };

  const handleClickOutside = (event) => {
    if (searchRef.current && !searchRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search-bar" ref={searchRef}>
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder={isOpen ? "Recent Searches" : "Search..."}
          value={searchTerm}
          onClick={handleSearchClick}
          onChange={handleSearchChange}
        />
        <SearchIcon color={"#cccccc"} width={"20px"} height={"20px"} />
      </div>
      {isOpen && (
        <ul className="dropdown">
          {recentSearches.map((search, index) => (
            <>
              <div
                className="dropdown-item"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px",
                }}
                key={index}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "14px" }}
                >
                  <SearchIcon
                    color={"#cccccc"}
                    width={"20px"}
                    height={"20px"}
                  />
                  <Text fontWeight={600} lineHeight={"24px"} fontSize={"16px"}>
                    {" "}
                    {search}
                  </Text>
                </div>
                <SmallCloseIcon />
              </div>
            </>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
