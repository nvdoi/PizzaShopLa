import React, { useState } from "react";
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../components/MenuItem";
import SearchIcon from '@mui/icons-material/Search';
import "../styles/Menu.css";

function Menu() {
  const [searchTerm, setSearchTerm] = useState(""); // Trạng thái cho ô nhập tìm kiếm

  // Hàm xử lý thay đổi trong ô nhập tìm kiếm
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Lọc danh sách sản phẩm dựa trên từ khóa tìm kiếm
  const filteredMenuList = MenuList.filter((menuItem) =>
    menuItem.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>

      {/* Ô nhập tìm kiếm */}
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <SearchIcon/>
      </div>

      <div className="menuList">
        {/* Kiểm tra nếu danh sách sản phẩm đã lọc rỗng */}
        {filteredMenuList.length === 0 ? (
          <p>Không có sản phẩm</p>
        ) : (
          /* Hiển thị danh sách sản phẩm đã lọc */
          filteredMenuList.map((menuItem, key) => (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Menu;
