import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Button,
  Flex,
  Badge,
  Icon,
  Spinner,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { StarIcon } from "@chakra-ui/icons";
import { FaCalendarAlt, FaLanguage } from "react-icons/fa";
import { MdCategory } from "react-icons/md";

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
    <Box width="100%" p={0} m={0} mt={8}>
      <Box
        position="relative"
        width="100%"
        height="700px"
        mt={8}
        p="3rem"
        bg="white"
        rounded="md"
      >
        <img
          src={movie.image?.original}
          className="w-full h-full object-cover opacity-30 rounded-md"
          alt="Background"
        />
        <Box
          position="absolute"
          top="20%"
          left="5%"
          width="40%"
          color="black"
        >
          <Text
            fontFamily="Lato"
            fontSize="60px"
            fontWeight="600"
            letterSpacing="0.015em"
            textAlign="left"
          >
            {movie.name}
          </Text>
          <Text
            mt={4}
            fontSize="lg"
            fontWeight="medium"
            px="10%"
          >
            {movie.summary.replace(/<[^>]*>?/gm, "")}
          </Text>
          <Flex justifyContent="flex-start" mt={4}>
            <Button
              width="220px"
              height="59px"
              padding="13px 62px"
              gap="10px"
              backgroundColor="black"
              color="white"
              fontFamily="Lato"
              fontSize="22px"
              fontWeight="700"
              lineHeight="32.89px"
              letterSpacing="0.015em"
              textAlign="left"
              borderRadius="35px"
              opacity="1"
              _hover={{ bg: "gray.800" }}
            >
              Play Now
            </Button>
          </Flex>
        </Box>
      </Box>

      <Box
        width="1362px"
        backgroundColor="white"
        borderRadius="12px 0px 0px 0px"
        p="50px 0px 0px 0px"
        gap="20px"
        opacity="1"
        boxShadow="lg"
        mx="auto"
        mt={8}
      >
        <Box
          width="1262px"
          backgroundColor="#f9f9f9"
          borderRadius="md"
          p={6}
          opacity="1"
          mx="auto"
        >
          <Text
            fontSize="18px"
            fontWeight="500"
            lineHeight="27px"
            fontFamily="Manrope"
            textAlign="left"
            width="100%"
            height="27px"
            gap="0px"
            opacity="1"
            mb={4}
          >
            Description
          </Text>
          <Text
            width="100%"
            height="81px"
            gap="0px"
            opacity="1"
            fontFamily="Manrope"
            fontSize="18px"
            fontWeight="500"
            lineHeight="27px"
            textAlign="left"
            mb={8}
          >
            {movie.summary.replace(/<[^>]*>?/gm, "")}
          </Text>
        </Box>

        <Box
          width="1262px"
          backgroundColor="#f9f9f9"
          borderRadius="12px 0px 0px 0px"
          p="50px 0px 0px 0px"
          gap="30px"
          opacity="1"
          boxShadow="lg"
          mt={8}
          mx="auto"
        >
          <Grid templateColumns="repeat(2, 1fr)" gap={6} px={6}>
            <GridItem colSpan={2}>
              <Box
                backgroundColor="#f9f9f9"
                borderRadius="md"
                p={6}
                opacity="1"
                boxShadow="sm"
                mx="auto"
              >
                <Flex align="center" mb={2} width="100%" height="27px" gap="4px" opacity="1">
                  <Icon as={FaCalendarAlt} boxSize={5} mr={2} />
                  <Text fontSize="18px" fontWeight="500" lineHeight="27px" fontFamily="Manrope" textAlign="left">
                    Released Year
                  </Text>
                </Flex>
                <Text fontWeight="light">{movie.premiered.split("-")[0]}</Text>
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Box
                backgroundColor="#f9f9f9"
                borderRadius="md"
                p={6}
                opacity="1"
                boxShadow="sm"
                mx="auto"
              >
                <Flex align="center" mb={2} width="100%" height="84px" gap="14px" opacity="1">
                  <Icon as={FaLanguage} boxSize={5} mr={2} />
                  <Text fontSize="18px" fontWeight="500" lineHeight="27px" fontFamily="Manrope" textAlign="left">
                    Available Languages
                  </Text>
                </Flex>
                <Flex wrap="wrap" width="100%" height="43px" gap="10px" opacity="1">
                  {["English", "Hindi", "Tamil", "Telugu", "Kannada"].map((language) => (
                    <Box
                      key={language}
                      width="90px"
                      height="43px"
                      padding="8px 14px"
                      gap="10px"
                      borderRadius="8px"
                      border="1px solid transparent"
                      opacity="1"
                      background="#141414"
                    >
                      <Text
                        fontFamily="Manrope"
                        fontSize="18px"
                        fontWeight="500"
                        lineHeight="27px"
                        textAlign="left"
                        color="#FFFFFF"
                      >
                        {language}
                      </Text>
                    </Box>
                  ))}
                </Flex>
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Box
                backgroundColor="#f9f9f9"
                borderRadius="md"
                p={6}
                opacity="1"
                boxShadow="sm"
                mx="auto"
              >
                <Flex align="center" mb={2} width="100%" height="137px" gap="14px" opacity="1">
                  <Text fontSize="18px" fontWeight="500" lineHeight="27px" fontFamily="Manrope" textAlign="left">
                    Ratings
                  </Text>
                </Flex>
                <Box width="100%" height="96px" gap="20px" opacity="1">
                  <Flex gap="20px"> {/* Add gap between IMDb and Streamvibe containers */}
                    <Box
                      width="621px"
                      height="96px"
                      padding="16px 0px 0px 0px"
                      gap="4px"
                      borderRadius="8px 0px 0px 0px"
                      opacity="1"
                      backgroundColor="#e5e5e5"
                      p={4}
                    >
                      <Text
                        fontFamily="Manrope"
                        fontSize="20px"
                        fontWeight="600"
                        lineHeight="30px"
                        textAlign="left"
                      >
                        IMDb
                      </Text>
                      <Flex align="center">
                        <Icon as={StarIcon} color="yellow.400" />
                        <Text ml={2} fontWeight="light">
                          {movie.rating.average ? movie.rating.average : "N/A"}
                        </Text>
                      </Flex>
                    </Box>
                    <Box
                      width="621px"
                      height="96px"
                      padding="16px 0px 0px 0px"
                      gap="4px"
                      borderRadius="8px 0px 0px 0px"
                      opacity="1"
                      backgroundColor="#e5e5e5"
                      p={4}
                    >
                      <Text
                        fontFamily="Manrope"
                        fontSize="20px"
                        fontWeight="600"
                        lineHeight="30px"
                        textAlign="left"
                      >
                        Streamvibe
                      </Text>
                      <Flex align="center">
                        <Icon as={StarIcon} color="red.400" />
                        <Text ml={2} fontWeight="light">
                          4
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Box
                backgroundColor="#f9f9f9"
                borderRadius="md"
                p={6}
                opacity="1"
                boxShadow="sm"
                mx="auto"
              >
                <Flex align="center" mb={2} width="100%" height="84px" gap="14px" opacity="1">
                  <Icon as={MdCategory} boxSize={6} mr={2} />
                  <Text fontSize="18px" fontWeight="500" lineHeight="27px" fontFamily="Manrope" textAlign="left">
                    Genres
                  </Text>
                </Flex>
                <Flex wrap="wrap" width="100%" height="43px" gap="10px" opacity="1">
                  {movie.genres.map((genre, index) => (
                    <Box
                      key={index}
                      width="84px"
                      height="43px"
                      padding="8px 14px"
                      gap="10px"
                      borderRadius="8px"
                      border="1px solid transparent"
                      opacity="1"
                      background="#141414"
                    >
                      <Text
                        fontFamily="Manrope"
                        fontSize="18px"
                        fontWeight="500"
                        lineHeight="27px"
                        textAlign="left"
                        color="#FFFFFF"
                      >
                        {genre}
                      </Text>
                    </Box>
                  ))}
                </Flex>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default MovieDetails;
