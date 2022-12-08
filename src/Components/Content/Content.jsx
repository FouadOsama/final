import { Link } from "react-router-dom";
import "./Content.css";

function Content({ data }) {
  return (
    <>
      <div className="col-4">
        <div className="content">
          <div className="img">
            <img src={data?.thumbnail} className="w-100" alt="" />
          </div>
          <div className="button mt-2">
            <button className="btn btn-dark w-25">Free</button>
            <a
              target="_blank"
              className="btn btn-primary w-75 fw-bolder"
              href={data.freetogame_profile_url}
            >
              Play Now
            </a>
          </div>
        </div>
      </div>
      <div className="col-8">
        <div className="content">
          <div className="name-game">
            <h2 className="mb-5 fs-1">{data?.title}</h2>
            <h4 className="mb-3">About {data?.title}</h4>
          </div>
          <div className="descr">
            <p className="mb-5">{data?.description}</p>
          </div>
          <div className="system mb-5">
            <h3 className="mb-3">Minimum System Requirements</h3>
            <ul className="system">
              <li className="mb-2 fs-5">
                {data?.minimum_system_requirements?.graphics}
              </li>
              <li className="mb-2 fs-5">
                {data?.minimum_system_requirements?.memory}
              </li>
              <li className="mb-2 fs-5">
                {data?.minimum_system_requirements?.os}
              </li>
              <li className="mb-2 fs-5">
                {data?.minimum_system_requirements?.processor}
              </li>
              <li className="mb-2 fs-5">
                {data?.minimum_system_requirements?.storage}
              </li>
            </ul>
          </div>
          <div className="screnshoot"></div>
          <div className="information text-center">
            <h3 className="mb-3">Additional Information</h3>
            <div className="d-flex justify-content-around text-center mb-5">
              <div className="title">
                <p className="text-white-50">Title</p>
                <p>{data.title}</p>
              </div>
              <div className="developer">
                <p className="text-white-50">Developer</p>
                <p>{data.developer}</p>
              </div>
              <div className="Publisher">
                <p className="text-white-50">Publisher</p>
                <p>{data.publisher}</p>
              </div>
            </div>
            <div className="d-flex justify-content-around text-center">
              <div className="date">
                <p className="text-white-50">release-Date</p>
                <p>{data.release_date}</p>
              </div>
              <div className="genre">
                <p className="text-white-50">Genre</p>
                <p>{data.genre}</p>
              </div>
              <div className="platform">
                <p className="text-white-50">Platform</p>
                {data.platform == "Windows" && (
                  <p>
                    <i class="fa-brands fa-windows"></i> windows
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
