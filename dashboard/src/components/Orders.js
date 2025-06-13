import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const backendURL = process.env.REACT_APP_API_URL;

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get(`${backendURL}/allOrders`).then((res) => {
      console.log(res.data);
      setAllOrders(res.data);
    });
  }, []);

  return (
    <div className="orders">
      {allOrders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      ) : (
        <div className="yes-order">
          <h3 className="title">Orders ({allOrders.length})</h3>
          <div className="order-table">
            <table>
              <tr>
                <th>Name</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Mode</th>
                <th>Total price</th>
                <th>P&L</th>
              </tr>
              {allOrders.map((stock, index) => {
                const currValue = stock.price * stock.qty;
                const isProfit = currValue - stock.avg * stock.qty >= 0.0;
                const profClass = isProfit ? "profit" : "loss";
                let modeClass = stock.mode === "Buy" ? "buyMode" : "sellMode";

                return (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td className={modeClass}>{stock.mode}</td>
                    <td>{currValue.toFixed(2)}</td>
                    <td className={profClass}>
                      {(currValue - stock.avg * stock.qty).toFixed(2)}
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
