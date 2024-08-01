import { useState, useEffect, useRef } from 'react';
import { Divider, Box, Image, Text, Button, Flex, Heading } from '@chakra-ui/react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Carousel = ({ category }) => {
  const [data, setData] = useState([]);
  const scrollRef = useRef(null);

  const apiResp = async () => {
    try {
      const resp = await axios.get(`https://api.tvmaze.com/search/shows?q=${category}`);
      const shuffledData = shuffleArray(resp?.data);
      setData(shuffledData.slice(0, 15));
    } catch (err) {
      console.error(err);
    }
  };

  const shuffleArray = (array) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  };

  useEffect(() => {
    apiResp();
  }, [category]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <Box className='carousel-container' mb={8} overflow="hidden">
      <Flex justify="space-between" align="center" mb={4} className="heading">
        <Heading as="h2" size="lg" mb="1rem">{category.charAt(0).toUpperCase() + category.slice(1)}</Heading>
        <Flex>
          <Button size="sm" borderRadius="full" mr={2} onClick={() => scroll('left')}>
            <FaChevronLeft />
          </Button>
          <Button size="sm" borderRadius="full" onClick={() => scroll('right')}>
            <FaChevronRight />
          </Button>
        </Flex>
      </Flex>
      <Divider mb={4} />
      <Flex ref={scrollRef} overflowX="auto" className="space-x-5 p-5 mt-4 hide-scrollbar">
        {data?.map((item, index) => (
          <Box key={index} className='carousel-item' minW="200px">
            <RouterLink to={`/movies/${item.show.id}`}>
              <Image
                src={item?.show.image?.medium || 'https://via.placeholder.com/210x295.png?text=No+Image'}
                className='w-full h-full object-contain rounded-md'
                alt={item.show.name}
              />
            </RouterLink>
            <Box className='bg-gray-700 rounded-md flex items-center justify-center mt-2'>
              <Text className='text-white text-md px-4 py-2'>{item?.show.name}</Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}

Carousel.propTypes = {
  category: PropTypes.string.isRequired,
};

export default Carousel;
