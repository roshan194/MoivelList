import React, { useState } from 'react'
import { Divider } from '@chakra-ui/react'
import { FaChevronRight } from "react-icons/fa";
import { useEffect } from 'react';
import axios from 'axios';

const Carousel = (props) => {
    const [data, setData] = useState([]);

    const apiResp = async () => {
        try {
            const resp = await axios.get(`https://api.tvmaze.com/shows?genre=${props?.category}`);
            const shuffledData = shuffleArray(resp?.data);
            setData(shuffledData.slice(0, 15));
        } catch (err) {
            console.error(err);
        }
    }

    const shuffleArray = (array) => {
        let currentIndex = array.length, randomIndex;

        // While there remain elements to shuffle...
        while (currentIndex !== 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    };

    useEffect(() => {
        apiResp();
    }, [])

    console.log("object", data)
    return (
        <div className='flex flex-col px-[3rem]'>
            <div className='flex items-center mt-[2rem] gap-5'>
                <p className='text-[20px] font-normal'>{props?.category.charAt(0).toUpperCase() + props?.category?.slice(1)}</p>
                <Divider />
                <div className='bg-[#5959595E] p-2 flex items-center justify-between'><FaChevronRight /></div>
            </div>
            <div className="flex overflow-x-auto space-x-5 p-5 mt-4">
                {
                    data?.map((item, index) => (
                        <>
                            <div className='flex flex-col gap-5 w-[20%] min-w-[250px]'>
                                <img src={item?.image?.medium} className='w-full h-full object-contain rounded-[35px]' alt="Breaking Bad" />
                                <div className='bg-[#565656] rounded-[35px] flex items-center justify-center'>
                                    <p className='text-white text-[20px] px-[1rem] py-[1rem] text-nowrap'>{item?.name}</p>
                                </div>
                            </div>
                        </>
                    ))
                }

            </div>
        </div>
    )
}

export default Carousel