import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

const backendURL = process.env.REACT_APP_API_URL;
const frontendUrl = process.env.REACT_APP_FRONTEND_URL;

const Menu = () => {
  const [selectMenu, setSelectMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [cookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      // if (!cookies.token) {
      //   console.warn("No token found in cookies, redirecting to login");
      //   window.location.href = `${frontendUrl}/login`;
      //   return;
      // }

      try {
        const { data } = await axios.post(
          `${backendURL}/verify`,
          {},
          { withCredentials: true }
        );

        const { status, user } = data;
        if (status) {
          setUsername(user);
        } else {
          removeCookie("token", { path: "/" });
          window.location.href = `${frontendUrl}/login`;
        }
      } catch (err) {
        removeCookie("token", { path: "/" });
        window.location.href = `${frontendUrl}/login`;
      } finally {
        setLoading(false); // Done checking
      }
    };
    verifyUser();
  }, [cookies, removeCookie]);

  if (loading) return <div>Loading...</div>;

  const handleLogout = async () => {
    try {
      // Call backend logout to clear cookie
      await axios.post(`${backendURL}/logout`, {}, { withCredentials: true });
    } catch (err) {
      console.error("Logout error:", err);
    }

    removeCookie("token");
    window.location.href = `${frontendUrl}/login`;
  };

  const handleMenuClick = (index) => {
    setSelectMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
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
          <div className="avatar">
            {username?.slice(0, 2).toUpperCase() || "NA"}
          </div>
          <p className="username">{username || "Loading..."}</p>
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
