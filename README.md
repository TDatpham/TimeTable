# 📚 Ứng Dụng Thời Khóa Biểu

Ứng dụng quản lý thời khóa biểu cá nhân được xây dựng với React, hoàn toàn không cần backend và lưu trữ dữ liệu cục bộ trên trình duyệt.

## ✨ Tính Năng

- 🔐 **Hệ thống đăng nhập/đăng ký** - Quản lý tài khoản cá nhân
- 📅 **Quản lý thời khóa biểu** - Thêm, sửa, xóa môn học
- 🔍 **Tìm kiếm và lọc** - Tìm kiếm theo tên môn, phòng học, thứ trong tuần
- 📊 **Sắp xếp thông minh** - Sắp xếp theo thứ, giờ, tên môn, phòng học
- 📊 **Thống kê chi tiết** - Xem tổng quan về lịch học
- 💾 **Lưu trữ cục bộ** - Dữ liệu được lưu trên trình duyệt, không cần internet
- 📱 **Responsive Design** - Giao diện thân thiện trên mọi thiết bị
- 🎨 **Giao diện đẹp** - UI/UX hiện đại và dễ sử dụng

## 🚀 Cài Đặt và Chạy

### Yêu Cầu Hệ Thống
- Node.js (phiên bản 14 trở lên)
- npm hoặc yarn

### Cài Đặt Dependencies
```bash
npm install
```

### Chạy Ứng Dụng
```bash
npm start
```

Ứng dụng sẽ chạy tại `http://localhost:3000`

### Build cho Production
```bash
npm run build
```

## 🎯 Hướng Dẫn Sử Dụng

### 1. Đăng Ký Tài Khoản
- Truy cập trang chủ và nhấn "Đăng Ký Miễn Phí"
- Điền thông tin: Họ tên, Email, Mật khẩu
- Xác nhận mật khẩu và nhấn "Đăng Ký"

### 2. Đăng Nhập
- Sử dụng email và mật khẩu đã đăng ký
- Hoặc sử dụng tài khoản demo:
  - Email: `admin@example.com`
  - Mật khẩu: `admin123`

### 3. Quản Lý Thời Khóa Biểu
- **Thêm môn học**: Nhấn nút "Thêm Môn Học" và điền thông tin
- **Chỉnh sửa**: Nhấn nút "✏️ Sửa" trên môn học cần sửa
- **Xóa môn học**: Nhấn nút "🗑️ Xóa" và xác nhận
- **Tìm kiếm**: Sử dụng ô tìm kiếm để tìm môn học
- **Lọc theo thứ**: Chọn thứ trong tuần từ dropdown
- **Sắp xếp**: Chọn tiêu chí sắp xếp (thứ, giờ, tên môn, phòng) và thứ tự (tăng/giảm dần)

### 4. Tính Năng Sắp Xếp
- **Sắp xếp theo thứ**: Hiển thị môn học theo thứ tự từ Thứ 2 đến Chủ nhật
- **Sắp xếp theo giờ**: Hiển thị môn học theo giờ bắt đầu từ sớm đến muộn
- **Sắp xếp theo tên môn**: Hiển thị môn học theo thứ tự bảng chữ cái
- **Sắp xếp theo phòng**: Hiển thị môn học theo tên phòng học
- **Thứ tự**: Chọn "Tăng dần" hoặc "Giảm dần" để đảo ngược thứ tự
- **Đặt lại**: Nhấn nút "🔄 Đặt lại" để về sắp xếp mặc định

### 5. Xem Thống Kê
- Xem tổng số môn học, phòng học
- Tổng giờ học trong tuần
- Số môn học theo từng thứ

## 🛠️ Công Nghệ Sử Dụng

- **Frontend**: React 19.1.1
- **Routing**: React Router DOM
- **Styling**: CSS3 với responsive design
- **State Management**: React Hooks (useState, useEffect)
- **Data Storage**: Local Storage API
- **Date Handling**: date-fns
- **Build Tool**: Create React App

## 📁 Cấu Trúc Dự Án

```
src/
├── api/                 # API functions (local storage)
├── components/          # React components
│   ├── Footer.js
│   ├── Header.js
│   ├── HelpModal.js
│   ├── Navbar.js
│   ├── TimetableForm.js
│   ├── TimetableList.js
│   └── TimetableStats.js
├── hooks/              # Custom hooks
├── pages/              # Page components
│   ├── HomePage.js
│   ├── LoginPage.js
│   ├── RegisterPage.js
│   └── TimetablePage.js
├── router/             # Routing configuration
├── styles/             # CSS styles
├── utils/              # Utility functions
└── App.js              # Main App component
```

## 🔒 Bảo Mật và Dữ Liệu

- **Lưu trữ cục bộ**: Tất cả dữ liệu được lưu trên trình duyệt của bạn
- **Không có server**: Ứng dụng hoạt động hoàn toàn offline
- **Bảo mật**: Chỉ bạn mới có thể truy cập dữ liệu của mình
- **Không mất dữ liệu**: Dữ liệu được lưu trữ bền vững trên trình duyệt

## 🎨 Giao Diện

- **Thiết kế hiện đại**: Sử dụng Material Design principles
- **Responsive**: Tương thích với mọi kích thước màn hình
- **Dark/Light mode**: Tự động thích ứng với hệ thống
- **Animations**: Hiệu ứng mượt mà và chuyên nghiệp

## 🐛 Xử Lý Lỗi

### Lỗi Thường Gặp

1. **Không thể đăng nhập**
   - Kiểm tra email và mật khẩu
   - Thử tài khoản demo: admin@example.com / admin123

2. **Mất dữ liệu**
   - Dữ liệu được lưu trên trình duyệt
   - Không xóa dữ liệu trình duyệt
   - Sử dụng cùng trình duyệt để truy cập

3. **Giao diện bị lỗi**
   - Làm mới trang (F5)
   - Xóa cache trình duyệt
   - Kiểm tra kết nối internet

## 📝 Ghi Chú

- Ứng dụng hoạt động hoàn toàn offline sau khi tải lần đầu
- Dữ liệu được lưu trữ cục bộ, không gửi lên server
- Tương thích với tất cả trình duyệt hiện đại
- Không cần cài đặt thêm phần mềm

## 🤝 Đóng Góp

Nếu bạn muốn đóng góp vào dự án:

1. Fork repository
2. Tạo feature branch
3. Commit changes
4. Push to branch
5. Tạo Pull Request

## 📄 License

Dự án này được phát hành dưới MIT License.

## 👨‍💻 Tác Giả

Được phát triển với ❤️ cho cộng đồng học tập Việt Nam.

---

**Lưu ý**: Đây là ứng dụng demo, không nên sử dụng cho mục đích thương mại mà không có sự cải tiến về bảo mật và tính năng.