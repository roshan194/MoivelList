// import React from 'react';
import Carousel from '../../containers/carousel';

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="relative w-full h-[700px] mt-8 p-[3rem] bg-white shadow-md rounded-md">
        <img src="/bg.png" className="w-full h-full object-cover opacity-30 rounded-md" alt="Background" />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className='text-[60px] font-semibold'>MovieStreamer</div>
          <div className='text-[40px] font-medium mb-8'>Enjoy Watching</div>
          <div className='mx-[3rem]'>
            <div className="text-center">
              <p className="mt-4 text-lg text-black font-medium px-[3rem]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerc.
              </p>
            </div>
            <div className="text-center">
              <p className="mt-4 text-lg text-black font-medium mx-[3rem]">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerc.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-8">
        <Carousel category="thriller" />
        <Carousel category="comedy" />
        <Carousel category="drama" />
      </div>
    </div>
  );
}

export default Home;