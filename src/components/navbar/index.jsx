import { useState } from 'react';
import { Box, Input, InputGroup, InputRightElement, Button, Flex, VStack, Text, CloseButton, List, ListItem } from '@chakra-ui/react';
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
    <Flex as="nav" bg="white" p={4} align="center" justify="space-between" boxShadow="md" position="fixed" w="100%" zIndex="1000">
      <RouterLink to="/">
        <Box fontSize="2xl" fontWeight="bold" color="black">
          MovieStreamer
        </Box>
      </RouterLink>
      <Flex align="center" gap={8}>
        <Box fontSize="lg" fontWeight="400">Movies</Box>
        <Box fontSize="lg" fontWeight="400">Series</Box>
        <Box fontSize="lg" fontWeight="400">Contact</Box>
        <Box fontSize="lg" fontWeight="400">About Us</Box>
      </Flex>
      <Flex align="center" gap={4} position="relative">
        <InputGroup w="250px">
          <Input
            placeholder="Search"
            borderRadius="full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
          <InputRightElement pointerEvents="none">
            <SearchIcon color="gray.300" />
          </InputRightElement>
        </InputGroup>
        <Button onClick={() => setModalOpen(true)} variant="outline" borderRadius="full">
          Sign up
        </Button>
        {recentSearches.length > 0 && (
          <Box position="absolute" top="60px" w="100%" bg="white" boxShadow="md" borderRadius="md" p={4}>
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
