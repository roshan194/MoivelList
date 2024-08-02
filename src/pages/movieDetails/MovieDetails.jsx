import React, { useEffect, useState } from 'react';
import { Box, Image, Text, Button, Flex, Badge, Icon, Spinner, Grid, GridItem } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { StarIcon } from '@chakra-ui/icons';
import { FaCalendarAlt, FaLanguage } from 'react-icons/fa';
import { MdCategory } from 'react-icons/md';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
        setMovie(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie data: ", error);
        setLoading(false);
      }
    };
    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Spinner size="xl" />
      </Flex>
    );
  }

  if (!movie) {
    return <Text>Movie not found</Text>;
  }

  return (
    <Box width="100%" p={0} m={0}>
      <Box position="relative" width="100%" height="700px" mb={8} overflow="hidden">
        <Image 
          src={movie.image?.original} 
          alt={movie.name} 
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          objectFit="cover"
          objectPosition="center"
          filter="blur(10px)"
          zIndex="-1"
        />
        <Box 
          position="relative"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
          background="rgba(0, 0, 0, 0.5)" // Optional: Add a dark overlay to improve text readability
        >
          <Image 
            src={movie.image?.original} 
            alt={movie.name}
            borderRadius="md"
            maxWidth="400px"
            maxHeight="600px"
            objectFit="contain"
          />
          <Text fontSize="6xl" fontWeight="bold" color="white" mt={4}>{movie.name}</Text>
        </Box>
      </Box>

      <Flex justifyContent="center" mb={4}>
        <Button backgroundColor="black" color="white" size="lg">Play Now</Button>
      </Flex>

      <Box width="100%" p={6} backgroundColor="#f9f9f9" borderRadius="md">
        <Box maxWidth="1200px" mx="auto">
          <Text fontSize="xl" fontWeight="bold" mb={4}>Description</Text>
          <Text mb={8}>{movie.summary.replace(/<[^>]*>?/gm, '')}</Text>

          <Grid templateColumns="repeat(2, 1fr)" gap={6} mb={8}>
            <GridItem>
              <Flex align="center" mb={2}>
                <Icon as={FaCalendarAlt} boxSize={5} mr={2} />
                <Text fontSize="lg" fontWeight="bold">Released Year</Text>
              </Flex>
              <Text fontWeight="light">{movie.premiered.split("-")[0]}</Text>
            </GridItem>
            <GridItem>
              <Flex align="center" mb={2}>
                <Icon as={FaLanguage} boxSize={5} mr={2} />
                <Text fontSize="lg" fontWeight="bold">Available Languages</Text>
              </Flex>
              <Flex wrap="wrap">
                <Badge backgroundColor="#000" color="#fff" borderRadius="full" px={3} py={1} mr={2} mb={2}>English</Badge>
                <Badge backgroundColor="#000" color="#fff" borderRadius="full" px={3} py={1} mr={2} mb={2}>Hindi</Badge>
                <Badge backgroundColor="#000" color="#fff" borderRadius="full" px={3} py={1} mr={2} mb={2}>Tamil</Badge>
                <Badge backgroundColor="#000" color="#fff" borderRadius="full" px={3} py={1} mr={2} mb={2}>Telugu</Badge>
                <Badge backgroundColor="#000" color="#fff" borderRadius="full" px={3} py={1} mr={2} mb={2}>Kannada</Badge>
              </Flex>
            </GridItem>
            <GridItem colSpan={2}>
              <Text fontSize="lg" fontWeight="bold" mb={2}>Ratings</Text>
              <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                <GridItem>
                  <Box backgroundColor="#e5e5e5" p={4} borderRadius="md">
                    <Text fontWeight="light">IMDb</Text>
                    <Flex align="center">
                      <Icon as={StarIcon} color="yellow.400" />
                      <Text ml={2} fontWeight="light">{movie.rating.average ? movie.rating.average : "N/A"}</Text>
                    </Flex>
                  </Box>
                </GridItem>
                <GridItem>
                  <Box backgroundColor="#e5e5e5" p={4} borderRadius="md">
                    <Text fontWeight="light">Streamvibe</Text>
                    <Flex align="center">
                      <Icon as={StarIcon} color="red.400" />
                      <Text ml={2} fontWeight="light">4</Text>
                    </Flex>
                  </Box>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem colSpan={2}>
              <Flex align="center" mb={2}>
                <Icon as={MdCategory} boxSize={6} mr={2} />
                <Text fontSize="lg" fontWeight="bold">Genres</Text>
              </Flex>
              <Flex wrap="wrap">
                {movie.genres.map((genre, index) => (
                  <Badge key={index} backgroundColor="#000" color="#fff" borderRadius="full" px={3} py={1} mr={2} mb={2}>{genre}</Badge>
                ))}
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieDetails;
