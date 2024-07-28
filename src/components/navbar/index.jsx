import React from 'react'
import { Box } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <div className='h-[70px] bg-white fixed flex gap-x-40 items-center z-10 w-full p-[3rem]'>
            <Box className='font-extrabold ' fontSize={"21px"}>MovieStreamer</Box>
            <Box className="flex items-center gap-4">
                <Box fontSize={"20px"} fontWeight={"400"}>Movies</Box>
                <Box fontSize={"20px"} fontWeight={"400"}>Series</Box>
                <Box fontSize={"20px"} fontWeight={"400"}>Contact</Box>
                <Box fontSize={"20px"} fontWeight={"400"}>About Us</Box>
            </Box>
        </div>
    )
}

export default Navbar