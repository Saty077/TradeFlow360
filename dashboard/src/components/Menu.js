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
    console.log("Menu.js useEffect triggered"); // Debug
    console.log("Cookies:", JSON.stringify(cookies, null, 2)); // Debug
    const verifyUser = async () => {
      if (!cookies.token) {
        console.warn("No token found in cookies, redirecting to login");
        window.location.href = `${frontendUrl}/login`;
        return;
      }
      console.log("Sending POST to http://localhost:3001"); //debug
      try {
        console.log("Sending POST request to http://localhost:3001"); // Debug
        const { data } = await axios.post(
          `${backendURL}`,
          {},
          { withCredentials: true }
        );
        console.log("Verification response:", data); // Debug
        const { status, user, message } = data;
        if (status) {
          console.log("Setting username:", user); // Debug
          setUsername(user);
        } else {
          console.warn("Verification failed:", message); // Debug
          removeCookie("token", { path: "/", domain: "localhost" });
          window.location.href = `${frontendUrl}/login`;
        }
      } catch (err) {
        console.error("Verification error:", err.response?.data || err.message); // Debug
        removeCookie("token", { path: "/", domain: "localhost" });
        window.location.href = `${frontendUrl}/login`;
      } finally {
        setLoading(false); // Done checking
      }
    };
    verifyUser();
  }, [cookies, removeCookie]);

  if (loading) return <div>Loading...</div>;
  // [cookies, removeCookie]
  // const handleLogout = async () => {
  //   try {
  //     console.log("Sending logout request to http://localhost:3001/logout"); // Debug
  //     await axios.get("http://localhost:3001/logout", {
  //       withCredentials: true,
  //     });
  //     removeCookie("token", { path: "/", domain: "localhost" });
  //     window.location.href = `${frontendUrl}/login`;
  //   } catch (err) {
  //     console.error("Logout failed:", err.response?.data || err.message);
  //   }
  // };

  const handleLogout = () => {
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
