import { useState, useRef, useEffect } from "react";
import { Text, Box, Input, List, ListItem, Spinner } from "@chakra-ui/react";
import axios from "axios";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import "./index.css";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [recentSearches, setRecentSearches] = useState([
    "Breaking Bad",
    "Game of Thrones",
    "The Boys",
    "Daredevil",
    "Dark",
  ]);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

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
    if (event.target.value.length > 2) {
      performSearch(event.target.value);
    } else {
      setSearchResults([]);
    }
  };

  const performSearch = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`);
      setSearchResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRecentSearchClick = async (search) => {
    setLoading(true);
    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${search}`);
      if (response.data.length > 0) {
        navigate(`/movies/${response.data[0].show.id}`);
      } else {
        console.error("Show not found");
      }
    } catch (error) {
      console.error("Error fetching recent search:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-bar" ref={searchRef}>
      <div className="search-input-wrapper">
        <Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onClick={handleSearchClick}
          onChange={handleSearchChange}
          variant="outline"
          className="custom-input"
          _focus={{ boxShadow: "none" }}
        />
        <img src="/search.svg" width="20px" height="20px" className="custom-search-icon" alt="Search Icon" />
      </div>
      {isOpen && (
        <Box className="dropdown" mt={2}>
          {loading ? (
            <Spinner />
          ) : (
            <List>
              {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <ListItem
                    key={index}
                    className="dropdown-item"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p={2}
                  >
                    <RouterLink to={`/movies/${result.show.id}`}>
                      <Box display="flex" alignItems="center" gap={2}>
                        <img src="/search.svg" width="20px" height="20px" alt="Search Icon" />
                        <Text fontWeight={600} fontSize="14px">
                          {result.show.name}
                        </Text>
                      </Box>
                    </RouterLink>
                    <img src="/cross.svg" width="20px" height="20px" alt="Close Icon" />
                  </ListItem>
                ))
              ) : (
                recentSearches.map((search, index) => (
                  <ListItem
                    key={index}
                    className="dropdown-item"
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    p={2}
                    onClick={() => handleRecentSearchClick(search)}
                  >
                    <Box display="flex" alignItems="center" gap={2}>
                      <img src="/search.svg" width="20px" height="20px" alt="Search Icon" />
                      <Text fontWeight={600} fontSize="14px">
                        {search}
                      </Text>
                    </Box>
                    <img src="/cross.svg" width="20px" height="20px" alt="Close Icon" />
                  </ListItem>
                ))
              )}
            </List>
          )}
        </Box>
      )}
    </div>
  );
};

export default SearchBar;
