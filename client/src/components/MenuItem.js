import React from "react";
import { Link } from "react-router-dom";
import "../styles/MenuItem.css";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {price}  VNĐ </p>
      <Link to={`/menu/${name}`} className="button">Xem thông tin</Link>
      <button className="button2">Thêm vào giỏ hàng</button>
    </div>
  );
}

export default MenuItem;