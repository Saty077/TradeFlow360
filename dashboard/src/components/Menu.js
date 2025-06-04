import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const Menu = () => {
  const [selectMenu, setSelectMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");

  const handleMenuClick = (index) => {
    setSelectMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  // Fetch user info on load
  useEffect(() => {
    const verifyUser = async () => {
      if (!cookies.token) {
        console.warn("No token found in cookies");
        return;
      }
      try {
        const { data } = await axios.post(
          "http://localhost:3001",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        if (status) setUsername(user);
        else {
          removeCookie("token");
          window.location.href = "http://localhost:3000/login";
        }
      } catch (err) {
        removeCookie("token");
        window.location.href = "http://localhost:3000/login";
      }
    };
    verifyUser();
  }, [cookies, removeCookie]);

  //  Logout function
  const handleLogout = () => {
    removeCookie("token");
    window.location.href = "http://localhost:3000/login";
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus">
        <ul>
          {["/", "/orders", "/holdings", "/positions", "/funds", "/apps"].map(
            (path, index) => (
              <li key={index}>
                <Link
                  style={{ textDecoration: "none" }}
                  to={path}
                  onClick={() => handleMenuClick(index)}
                >
                  <p
                    className={
                      selectMenu === index ? activeMenuClass : menuClass
                    }
                  >
                    {
                      [
                        "Dashboard",
                        "Orders",
                        "Holdings",
                        "Positions",
                        "Funds",
                        "Apps",
                      ][index]
                    }
                  </p>
                </Link>
              </li>
            )
          )}
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{username?.slice(0, 2).toUpperCase()}</div>
          <p className="username">{username}</p>
          {isProfileDropdownOpen && (
            <div className="dropdown">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
