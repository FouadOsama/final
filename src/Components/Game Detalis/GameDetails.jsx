import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import Content from "../Content/Content"

function GameDetails() {
  let [games, setGames] = useState([]);
  const params = useParams();
  console.log(params);

  const axiosInstance = axios.create({
    baseURL: "https://free-to-play-games-database.p.rapidapi.com/api/",

    params: { id : params.Id },
    headers: {
      "X-RapidAPI-Key": "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  });

  async function getDetails() {
    let { data } = await axiosInstance.get(`/game`);
    console.log(data)
    setGames(data);
  }

  useEffect(() => {
    getDetails();
  }, [params.Id]);

  return (
    <>
      <div className="container text-white my-5">
        <div className="row g-3">
          <Content key={games.id} data={games} />
        </div>
      </div>
    </>
  );
}

export default GameDetails;
