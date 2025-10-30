import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">📅 App Thời Khóa Biểu</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="/" className="hover:underline">Trang chủ</a></li>
          <li><a href="/timetable" className="hover:underline">Thời khóa biểu</a></li>
          <li><a href="/about" className="hover:underline">Giới thiệu</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
