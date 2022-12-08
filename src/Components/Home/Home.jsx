import mnato from "../../Images/mnato.jpg";
import Item1 from "../Item1/Item1";
import "./Home.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

function Home() {
  let [games, setGames] = useState([]);
  const params = useParams();
  console.log(params);

  const axiosInstance = axios.create({
    baseURL: "https://free-to-play-games-database.p.rapidapi.com/api/",

    params: { "sort-by": params.Id },
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
      <div className="header d-flex  align-items-center">
        <div className="container text-white text-center">
          <div className="text text-center">
            <h1>Find & track the best free-to-play games!</h1>
            <p>
              Track what you've played and search for what to play next! Plus
              get free premium loot!
            </p>
          </div>
          <button className="btn btn-dark btn1">Browse Games</button>
        </div>
      </div>
      <div className="games my-5">
        <div className="container text-white">
          <div className="recomandation-text d-flex mb-2">
            <span className="fs-4 me-2">
              <i class="fa-sharp fa-solid fa-robot"></i>
            </span>
            <h3>Personalized Recommendations</h3>
          </div>
          <div className="show-games">
            <div className="row gx-3">
              {games?.slice(0,3).map((game) => (
                <Item1 key={game.id} data={game} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
