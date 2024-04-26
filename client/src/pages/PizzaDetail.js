// Trong file PizzaDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MenuList } from "../helpers/MenuList";
import "../styles/PizzaDetail.css";

function PizzaDetail() {
  const { pizzaName } = useParams(); // Lấy tên của pizza từ URL

  // Tìm món pizza trong danh sách MenuList dựa trên tên
  const pizza = MenuList.find((pizza) => pizza.name === pizzaName);

  // Sử dụng useState và useEffect ở đầu component
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedThumbnailIndex, setSelectedThumbnailIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === pizza.additionalImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Thay đổi hình ảnh sau mỗi 3 giây

    return () => clearInterval(intervalId);
  }, [pizza.additionalImages.length]);

  // Nếu không tìm thấy món pizza, hiển thị thông báo lỗi
  if (!pizza) {
    return <div>Không tìm thấy món pizza.</div>;
  }

  return (
    <div className="Container">
      <h2 className="ten">{pizza.name}</h2>
      <div className="anh-container">
        {pizza.additionalImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={pizza.name}
            className={index === currentImageIndex ? "active" : ""}
          />
        ))}
      </div>
      <div className="thumbnail-container">
        {pizza.additionalImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={pizza.name}
            className={`thumbnail ${index === selectedThumbnailIndex ? "selected" : ""}`}
            onClick={() => {
              setSelectedThumbnailIndex(index);
              setCurrentImageIndex(index);
            }}
          />
        ))}
      </div>
      <p className="image-count">Hình ảnh {currentImageIndex + 1}/{pizza.additionalImages.length}</p>
      <p className="gia">Giá: {pizza.price} VNĐ</p>
      <p className="mt">{pizza.description}</p>
    </div>
  );
}

export default PizzaDetail;
