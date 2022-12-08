import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Item.css";

function Item({ data }) {
  return (
    <>
      <div className="col-3 text-white p-1 ">
        <Link className="text-decoration-none" to={"/GameDetails/" + data.id}>
          <div className="content game w-100 text-white">
            <div className="img mb-2">
              <img src={data.thumbnail} alt="" className="w-100 " />
            </div>
            <div className="text-game d-flex justify-content-between">
              <h4 className="fs-5 show-text ms-2">{data.title}</h4>
              <h4 className="btn btn-primary me-2">Free</h4>
            </div>
            <div className="desc text-center show-text m-auto">
              <p>{data.short_description}</p>
            </div>
            <div className="icons d-flex justify-content-around mb-2 ">
              <div className="mb-2">
                <span className="type-game text-center p-1 rounded-2 d-flex align-items-center">
                  {data.genre}
                </span>
                <span></span>
                
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Item;
