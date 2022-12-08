import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Item/Item";

function Platfroms() {
  let [games, setGames] = useState([]);
  let [allGames, setAllGames] = useState([]);
  const params = useParams();
  const [isCompleted, setIsCompleted] = useState(false);
  const [index, setIndex] = useState([]);
  // const games = slice(post,0,index)

  const axiosInstance = axios.create({
    baseURL: "https://free-to-play-games-database.p.rapidapi.com/api/",

    params: { platform: params.Id },
    headers: {
      "X-RapidAPI-Key": "b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  });

  async function getGames() {
    let { data } = await axiosInstance.get(`/games`);
    setAllGames(data)
    setGames(data.slice(0,20));
  }

  // const loadMore = () => {
  //   setIndex(index + 20);
  //   setGames(allGames.slice(0,index))
  //   if (index => games.length) {
  //     setIsCompleted(true);
  //   } else {
  //     setIsCompleted(false);
  //   }
  // };

  useEffect(() => {
    getGames();
  }, [params.Id]);

  return (
    <>
      <div className="container mt-5 text-white">
        <div className="row g-3">
          {games.map((game) => (
            <Item key={game.id} data={game} />
          ))}
        </div>
        {/* <div className="loadmore">
          {isCompleted == false && 
            (<button onClick={loadMore} className=" btn btn-danger">
              load more
            </button>)}
        </div> */}
      </div>
    </>
  );
}

export default Platfroms;
