import { useState } from 'react';
import { Box, Input, InputGroup, InputRightElement, Button, Flex, Text, CloseButton, List, ListItem } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { Link as RouterLink } from 'react-router-dom';
import SignUpModal from '../signup/SignUpModal';

const Navbar = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState([]);

  const handleSearch = (event) => {
    if (event.key === 'Enter' && searchQuery.trim() !== '') {
      setRecentSearches([searchQuery, ...recentSearches.slice(0, 4)]);
      setSearchQuery('');
    }
  };

  const removeSearchItem = (index) => {
    setRecentSearches(recentSearches.filter((_, i) => i !== index));
  };

  return (
    <Flex as="nav" bg="white" p={4} align="center" justify="space-between" position="fixed" w="100%" zIndex="1000" px={10}>
      <RouterLink to="/">
        <Box fontSize="21px" fontWeight="extrabold" color="black" fontFamily="Lato">
          MovieStreamer
        </Box>
      </RouterLink>
      <Flex align="center" gap={8} fontFamily="Segoe UI" fontSize="20px" fontWeight="400">
        <Box>Movies</Box>
        <Box>Series</Box>
        <Box>Contact</Box>
        <Box>About Us</Box>
      </Flex>
      <Flex align="center" gap={29} position="relative">
        <InputGroup w="358px" h="47px" borderRadius="25px">
          <Input
            placeholder="Search"
            borderRadius="25px"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
            padding="11px 15px 13px 27px"
            bg="#E6E6E6"
            fontFamily="Lato"
            fontSize="19px"
            fontWeight="400"
            lineHeight="22.8px"
            _placeholder={{ color: 'gray.500', textAlign: 'left' }}
            border="2px  #686868"
          />
          <InputRightElement pointerEvents="none" h="100%">
            <SearchIcon color="#686868" />
          </InputRightElement>
        </InputGroup>
        <Button
          onClick={() => setModalOpen(true)}
          variant="outline"
          borderRadius="10px"
          padding="10px 20px"
          fontFamily="Lato"
          fontSize="20px"
          fontWeight="400"
          lineHeight="24px"
          width="85px"
          height="47px"
        >
          Sign up
        </Button>
        {recentSearches.length > 0 && (
          <Box position="absolute" top="60px" w="100%" bg="white" borderRadius="md" p={4}>
            <Text mb={2} fontSize="sm" color="gray.500">Recent Searches</Text>
            <List spacing={3}>
              {recentSearches.map((search, index) => (
                <ListItem key={index} display="flex" justifyContent="space-between" alignItems="center">
                  <Flex align="center">
                    <SearchIcon color="gray.500" mr={2} />
                    <Text>{search}</Text>
                  </Flex>
                  <CloseButton size="sm" onClick={() => removeSearchItem(index)} />
                </ListItem>
              ))}
            </List>
          </Box>
        )}
      </Flex>
      <SignUpModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </Flex>
  );
}

export default Navbar;
