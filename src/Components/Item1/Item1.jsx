import { Link } from "react-router-dom";
import "./item1.css";

function Item1({ data }) {
  return (
    <>
      <div className="col-4">
        <div className="content1 p-1">
          <Link
            className=" text-white text-decoration-none"
            to={"/GameDetails/" + data.id}
          >
            <div className="img">
              <img src={data.thumbnail} alt="" className="w-100 m-0 p-0" />
            </div>
            <div className="text-game d-flex justify-content-between mt-3 mx-2">
              <h4 className="fs-3">{data.title}</h4>
              <h4 className="btn btn-primary">Free</h4>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Item1;
