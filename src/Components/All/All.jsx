import mnato from "../../Images/mnato.jpg";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Item from "../Item/Item";

function All() {
  let [games, setGames] = useState([]);
  const axiosInstance = axios.create({
    baseURL: "https://free-to-play-games-database.p.rapidapi.com/api",
    headers: {
      "X-RapidAPI-Key": "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  });
  async function getGamesAll() {
    let { data } = await axiosInstance.get(`/games`);
    setGames(data);
    console.log(data);
  }
  useEffect(() => {
    getGamesAll();
  }, []);
  return (
    <>
      <div className="container text-white">
        <div className="row g-3">
          {games?.slice(0,20).map(game => <Item key={game.id} data={game} />)}
        </div>
      </div>
    </>
  );
}

export default All;
