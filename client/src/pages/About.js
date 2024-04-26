import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> Về Chúng Tôi</h1>
        <p>Tại quán pizza của bạn, khi bước vào, bạn sẽ ngay lập tức bị cuốn vào một không gian thơ mộng và ấm áp. Ánh sáng mờ nhẹ nhàng tỏa ra từ các đèn trang trí, tạo ra một bầu không khí thư giãn và lãng mạn. Bàn ghế gỗ tự nhiên và các chi tiết trang trí nhẹ nhàng mang lại cảm giác thoải mái và ấm cúng.
            <br/>Mùi thơm của pizza từ lò nướng lan tỏa trong không gian, kèm theo hương vị của các loại gia vị và sốt tự nhiên, tạo nên một trải nghiệm không thể quên. Menu đa dạng với các loại pizza từ cổ điển đến đặc biệt và các món salad tươi ngon, đồ uống phong phú cũng là điểm nhấn của quán.
            <br/>Nhân viên thân thiện và chuyên nghiệp luôn sẵn lòng phục vụ bạn với niềm đam mê và tận tâm. Tất cả những yếu tố này cùng nhau tạo nên một không gian lý tưởng để thưởng thức pizza ngon và tận hưởng những khoảnh khắc thư giãn bên gia đình và bạn bè.
        </p>
      </div>
    </div>
  );
}

export default About;