/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Divider } from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";
import axios from "axios";
import { Link as RouterLink } from "react-router-dom";

const Carousel = ({ category }) => {
  const [data, setData] = useState([]);

  const apiResp = async () => {
    try {
      const resp = await axios.get(`https://api.tvmaze.com/shows`);
      const filteredData = resp.data.filter((show) =>
        show.genres.includes(
          category?.charAt(0).toUpperCase() + category?.slice(1)
        )
      );
      const sortedData = filteredData.sort(
        (a, b) => new Date(b.premiered) - new Date(a.premiered)
      );
      const shuffledData = shuffleArray(sortedData);
      setData(shuffledData.slice(0, 15));
    } catch (err) {
      console.error(err);
    }
  };

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  useEffect(() => {
    apiResp();
  }, [category]);

  return (
    <div className="flex flex-col px-8 mb-8">
      <div className="flex items-center gap-5 mb-4">
        <p style={{ fontWeight: "400", fontSize: "20px", color: "#000000" }}>
          {category?.charAt(0).toUpperCase() + category?.slice(1)}
        </p>
        <Divider
          className="flex-grow border-white-300"
          border={"1px solid black"}
        />
        <div className="p-2 flex items-center justify-between rounded-full">
          <FaChevronRight className="cursor-pointer" />
        </div>
      </div>
      <div className="flex overflow-x-auto space-x-5 p-5 mt-4 hide-scrollbar">
        {data?.map((item, index) => (
          <div key={index} className="flex flex-col gap-5 w-1/5 min-w-[250px]">
            <RouterLink to={`/movies/${item.id}`}>
              <img
                src={item?.image?.medium || "/placeholder.png"}
                className="w-full h-full object-cover rounded-[35px]"
                alt={item.name}
              />
            </RouterLink>
            <div className="bg-gray-700 rounded-[35px] flex items-center justify-center hover:bg-black">
              <p className="text-white text-lg px-4 py-4 truncate">
                {item?.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
