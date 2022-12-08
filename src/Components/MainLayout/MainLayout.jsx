import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

function MainLayout({userData,logOut}) {
  return (
    <>
      <NavBar userData={userData} logOut={logOut} />
      <Outlet></Outlet>
      
    </>
  );
}

export default MainLayout;
