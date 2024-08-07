import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
  Button,
  Flex,
  Spinner,
  Grid,
  GridItem,
  Icon,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { StarIcon } from "@chakra-ui/icons";

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          left="12%"
          width="100%"
          color="black"
          display={"flex"}
          flexDir={"column"}
          gap={"25px"}
        >
          <Text
            fontFamily="Lato"
            className="text-[40px] md:text-[60px]"
            fontWeight="600"
            letterSpacing="0.015em"
            textAlign="left"
          >
            {movie.name}
          </Text>
          <Text
            mt={4}
            className="text-base md:text-lg"
            fontWeight="medium"
            width={"80%"}
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
              className="text-[16px] md:text-[22px]"
              fontWeight="700"
              lineHeight="32.89px"
              letterSpacing="0.015em"
              textAlign="left"
              borderRadius="35px"
              opacity="1"
              _hover={{ backgroundColor: "grey" }}
            >
              Play Now
            </Button>
          </Flex>
        </Box>
      </Box>

      <Box
        width="100%"
        display={"flex"}
        flexDir={"column"}
        padding={"3rem"}
        gap={"2rem"}
      >
        <Box
          width="100%"
          backgroundColor="#1A1A1A0F"
          borderRadius="16px"
          p={"50px"}
        >
          <Text
            className="text-base md:text-lg"
            fontWeight="500"
            lineHeight="27px"
            color={"#999999"}
            textAlign="left"
            width="100%"
            gap="0px"
            opacity="1"
            mb={4}
          >
            Description
          </Text>
          <Text
            className="text-sm md:text-base"
            width="100%"
            gap="0px"
            opacity="1"
            color={"#595959"}
            fontWeight="500"
            lineHeight="27px"
            textAlign="left"
            mb={8}
          >
            {movie.summary.replace(/<[^>]*>?/gm, "")}
          </Text>
        </Box>

        <Box
          width="100%"
          backgroundColor="#1A1A1A0F"
          borderRadius="16px"
          p={"50px"}
        >
          <Grid templateColumns="repeat(2, 1fr)" gap={6} px={6}>
            <GridItem colSpan={2}>
              <Box>
                <Flex
                  align="center"
                  mb={2}
                  width="100%"
                  gap="8px"
                  opacity="1"
                >
                  <img src="/calendar.svg" width={"18px"} height={"18px"} alt="Calendar" />
                  <Text
                    className="text-base md:text-lg"
                    fontWeight="500"
                    lineHeight="27px"
                    textAlign="left"
                    color={"#999999"}
                  >
                    Released Year
                  </Text>
                </Flex>
                <Text fontWeight={600} className="text-sm md:text-base" color={"#5B5B5B"}>
                  {movie.premiered.split("-")[0]}
                </Text>
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Box display={"flex"} flexDir={"column"} gap={"14px"}>
                <Flex
                  align="center"
                  mb={2}
                  width="100%"
                  gap="8px"
                  opacity="1"
                >
                  <img src="/language.svg" width={"18px"} height={"18px"} alt="Language" />
                  <Text
                    className="text-base md:text-lg"
                    fontWeight="500"
                    lineHeight="27px"
                    textAlign="left"
                    color={"#999999"}
                  >
                    Available Languages
                  </Text>
                </Flex>
                <Flex wrap="wrap" width="100%" gap="10px">
                  {["English", "Hindi", "Tamil", "Telugu", "Kannada"].map(
                    (language) => (
                      <Box
                        key={language}
                        padding="8px 14px"
                        gap="10px"
                        borderRadius="8px"
                        border="1px solid transparent"
                        fontWeight={"500"}
                        background="#141414"
                      >
                        <Text
                          className="text-sm md:text-base"
                          fontWeight="500"
                          lineHeight="27px"
                          textAlign="left"
                          color="#FFFFFF"
                        >
                          {language}
                        </Text>
                      </Box>
                    )
                  )}
                </Flex>
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Box>
                <Flex
                  align="center"
                  mb={2}
                  width="100%"
                  gap="8px"
                  opacity="1"
                >
                  <img src="/star.svg" width={"18px"} height={"18px"} alt="Star" />
                  <Text
                    className="text-base md:text-lg"
                    fontWeight="500"
                    lineHeight="27px"
                    textAlign="left"
                    color={"#999999"}
                  >
                    Ratings
                  </Text>
                </Flex>
                <Box width="100%" height="96px" gap="20px" opacity="1">
                  <Flex gap="20px">
                    <Box
                      width="50%"
                      gap="4px"
                      borderRadius="8px"
                      opacity="1"
                      backgroundColor="#D4D4D4"
                      p={"16px"}
                    >
                      <Text
                        className="text-base md:text-lg"
                        fontWeight="600"
                        lineHeight="30px"
                        textAlign="left"
                      >
                        IMDb
                      </Text>
                      <Flex align="center" gap={"4px"}>
                        <Icon as={StarIcon} color="yellow.400" />
                        <Text ml={2} fontWeight="500" color={"#FFFFFF"}>
                          {movie.rating.average ? movie.rating.average : "N/A"}
                        </Text>
                      </Flex>
                    </Box>
                    <Box
                      width="50%"
                      gap="4px"
                      borderRadius="8px"
                      opacity="1"
                      backgroundColor="#D4D4D4"
                      p={"16px"}
                    >
                      <Text
                        className="text-base md:text-lg"
                        fontWeight="600"
                        lineHeight="30px"
                        textAlign="left"
                      >
                        Streamvibe
                      </Text>
                      <Flex align="center" gap={"4px"}>
                        <Icon as={StarIcon} color="red.400" />
                        <Text fontWeight="500" color={"#FFFFFF"}>
                          4
                        </Text>
                      </Flex>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </GridItem>
            <GridItem colSpan={2}>
              <Box>
                <Flex align="center" mb={2} width="100%" gap="8px">
                  <img src="/app.svg" width={"18px"} height={"18px"} alt="Category" />
                  <Text
                    className="text-base md:text-lg"
                    fontWeight="500"
                    lineHeight="27px"
                    textAlign="left"
                    color={"#999999"}
                  >
                    Genres
                  </Text>
                </Flex>
                <Flex wrap="wrap" gap="10px">
                  {movie.genres.map((genre, index) => (
                    <Box
                      key={index}
                      padding="8px 14px"
                      gap="10px"
                      borderRadius="8px"
                      border="1px solid transparent"
                      opacity="1"
                      background="#141414"
                    >
                      <Text
                        className="text-sm md:text-base"
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
