import React, { useEffect, useState } from 'react';
import { Box, Image, Text, Button, Flex, Heading, Badge, Icon, Spinner } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { StarIcon } from '@chakra-ui/icons';

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
    <Box p="4rem" bg="gray.900" color="white">
      <Flex direction={["column", "column", "row"]} align="center">
        <Image src={movie.image?.original} alt={movie.name} borderRadius="lg" boxSize="300px" />
        <Box ml={[0, 0, "4rem"]} mt={["2rem", "2rem", 0]}>
          <Heading as="h1" size="2xl">{movie.name}</Heading>
          <Flex align="center" mt="1rem">
            <Icon as={StarIcon} color="yellow.400" />
            <Text ml="0.5rem" fontSize="lg">{movie.rating.average ? movie.rating.average : "N/A"}</Text>
            <Text ml="1rem" fontSize="lg">{movie.runtime} mins</Text>
            <Text ml="1rem" fontSize="lg">{movie.genres.join(", ")}</Text>
            <Text ml="1rem" fontSize="lg">{movie.premiered.split("-")[0]}</Text>
          </Flex>
          <Text mt="2rem" fontSize="lg">{movie.summary.replace(/<[^>]*>?/gm, '')}</Text>
          <Flex mt="2rem">
            <Button colorScheme="pink" mr="1rem">Watch Now</Button>
            <Button variant="outline" colorScheme="whiteAlpha">Add to Watchlist</Button>
          </Flex>
          <Flex mt="2rem">
            {movie.genres.map((genre, index) => (
              <Badge key={index} colorScheme="blue" mr="1rem">{genre}</Badge>
            ))}
          </Flex>
          <Text mt="2rem" fontSize="lg" fontWeight="bold">Available Languages</Text>
          <Text fontSize="lg">{movie.language}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default MovieDetails;
