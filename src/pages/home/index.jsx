import Carousel from '../../containers/carousel';

const Home = () => {
  return (
    <div className="home-container min-h-screen">
      <div className="relative w-full h-[700px] mt-8 p-[3rem] bg-white rounded-md">
        <img src="/bg.png" className="w-full h-full object-cover opacity-30 rounded-md" alt="Background" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-container">
          <div className="text-[40px] md:text-[60px] font-semibold text-black">MovieStreamer</div>
          <div className="text-[30px] md:text-[40px] font-medium mb-8 text-[#565656]">Enjoy Watching</div>
          <div className="mx-[1rem] md:mx-[3rem]">
            <div className="text-center">
              <p className="mt-4 text-base md:text-lg text-black font-medium px-[5%] md:px-[10%] content-text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerc.
              </p>
            </div>
            <div className="text-center">
              <p className="mt-4 text-base md:text-lg text-black font-medium mx-[5%] md:mx-[10%] content-text">
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
