import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";

function SortBy() {
  let [games, setGames] = useState([]);
  const params = useParams();
  console.log(params)

  const axiosInstance = axios.create({
    baseURL: "https://free-to-play-games-database.p.rapidapi.com/api/",

    params: { 'sort-by': params.Id },
    headers: {
      "X-RapidAPI-Key": "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  });

  async function getGames() {
    let { data } = await axiosInstance.get(`/games`);
    setGames(data);
  }

  useEffect(() => {
    getGames();
  }, [params.Id]);

  return (
    <>
      <div className="container mt-5 text-white">
        <div className="row g-3">
          {games?.slice(0, 20).map((game) => (
            <Item key={game.id} data={game} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SortBy;
