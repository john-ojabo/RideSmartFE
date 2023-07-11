import { RiArrowDropDownLine, RiFolderInfoLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaSwatchbook, FaUserCircle } from "react-icons/fa";
import { MdOutlineAirplaneTicket } from "react-icons/md";
import { useAppSelector } from "../hooks/store.hook";
import styles from "../styles/NavBar.module.scss";
import Logout from "./Logout";

const Navbar = () => {
  const userData = useAppSelector((state) => state.auth.userData);
  const location = useLocation();
  const { pathname } = location;
  const link = pathname.split("/")[1];  
  
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/booking", { replace: true });
  };

  return (
    <nav className={styles.navbar}>
      <div
        className="inline-flex items-center cursor-pointer w-full"
        onClick={goHome}
      >
        <img
          src="../logo.png"
          className="pl-12 h-20 sm:h-9 md:h-8 p-0 m-0"
          alt="Logo"
        />
      </div>
      <ul className={styles.nav_link}>
        <li className={link === 'booking' ? styles.nav_li_active : ''}>
          <FaSwatchbook />
          <Link to="/booking">Booking</Link>
        </li>
        <li className={link === 'tickets' ? styles.nav_li_active : ''}>
          <MdOutlineAirplaneTicket />
          <Link to="/tickets">Tickets</Link>{" "}
        </li>
        <li className={link === 'aboutus' ? styles.nav_li_active : ''}>
          <RiFolderInfoLine />
          <Link to="/aboutus">About Us</Link>
        </li>
      </ul>
      <div className="flex flex-row space-x-3 justify-end items-center px-4 w-full">
        <span className={styles.avatar}>
          {/* <img src={"../assets/img/avatar.png"} alt="avatar" /> */}
          {true ? (
            <FaUserCircle className="h-10 w-10" />
          ) : (
            <img src="" alt="Profile" />
          )}
          <div className={styles.profile_name}>
            <h3>{userData?.firstName}</h3>
            <RiArrowDropDownLine size={26} />
          </div>
          <Logout />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
