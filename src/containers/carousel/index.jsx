import React, { useState, useEffect } from 'react';
import { Divider } from '@chakra-ui/react';
import { FaChevronRight } from "react-icons/fa";
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Carousel = ({ category }) => {
    const [data, setData] = useState([]);

    const apiResp = async () => {
        try {
            const resp = await axios.get(`https://api.tvmaze.com/shows`);
            const filteredData = resp.data.filter(show => show.genres.includes(category.charAt(0).toUpperCase() + category.slice(1)));
            const sortedData = filteredData.sort((a, b) => new Date(b.premiered) - new Date(a.premiered));
            const shuffledData = shuffleArray(sortedData);
            setData(shuffledData.slice(0, 15));
        } catch (err) {
            console.error(err);
        }
    }

    const shuffleArray = (array) => {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    };

    useEffect(() => {
        apiResp();
    }, [category]);

    return (
        <div className='flex flex-col px-[3rem] mb-[2rem]'>
            <div className='flex items-center gap-5'>
                <p className='text-[20px] font-normal'>{category.charAt(0).toUpperCase() + category.slice(1)}</p>
                <Divider className="flex-grow border-gray-300" />
                <div className='bg-[#5959595E] p-2 flex items-center justify-between rounded-full'>
                    <FaChevronRight className="cursor-pointer" />
                </div>
            </div>
            <div className="flex overflow-x-auto space-x-5 p-5 mt-4 hide-scrollbar">
                {data?.map((item, index) => (
                    <div key={index} className='flex flex-col gap-5 w-[20%] min-w-[250px]'>
                        <RouterLink to={`/movies/${item.id}`}>
                            <img src={item?.image?.medium || '/placeholder.png'} className='w-full h-full object-contain rounded-[35px]' alt={item.name} />
                        </RouterLink>
                        <div className='bg-[#565656] rounded-[35px] flex items-center justify-center'>
                            <p className='text-white text-[20px] px-[1rem] py-[1rem] truncate'>{item?.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

Carousel.propTypes = {
    category: PropTypes.string.isRequired,
};

export default Carousel;
